import * as THREE from "three";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { markHeroReady } from "../lib/heroReady.js";

/* The liquid-gold orb, built to start without a hitch.
   The first version used a physical material lit by a baked studio
   environment, plus a bloom pass. Compiling those shaders took ~1.4 s on an
   integrated GPU, and on Windows that stalls every repaint in the tab, so the
   loading counter froze. Now the studio reflections are painted once into a
   matcap, the wobble is the same simplex-noise displacement on a cheap matcap
   material, the glow is CSS behind a transparent canvas, and the few shaders
   left compile in the background before the first frame. */

/* Quality is resolved once on mount — no resize churn for a hero backdrop. */
function getQuality() {
  const w = typeof window !== "undefined" ? window.innerWidth : 1440;
  const mobile = w < 768;
  return {
    mobile,
    detail: mobile ? 4 : 6, // icosahedron subdivisions → smoothness of the morph
    particles: mobile ? 450 : 1300,
    maxDpr: mobile ? 1.25 : 1.5, // full-screen canvas with MSAA: keep the pixel count sane
  };
}

/* Pointer tracked at the window so parallax keeps working under the DOM text overlay. */
function useGlobalPointer() {
  const ref = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      ref.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      ref.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return ref;
}

/* ---- the studio, painted once: what the polished gold sphere reflects ----
   Traced from the old lit orb. Positions are on the sphere as the camera sees
   it (x right, y up, -1..1): an amber softbox across the top, an orange strip
   light curving down the left edge, a dim beige panel right of centre, all on
   a near-black bronze body. Edges are blurred like the old 0.16 roughness. */
function makeGoldMatcap(size = 512) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  const s = size / 2;
  const X = (x) => s + x * s;
  const Y = (y) => s - y * s;
  const soft = (px) => {
    if ("filter" in g) g.filter = px ? `blur(${px}px)` : "none";
  };
  const panel = (x, y, w, h, r) => {
    g.beginPath();
    if (g.roundRect) g.roundRect(X(x), Y(y), w * s, h * s, r * s);
    else g.rect(X(x), Y(y), w * s, h * s);
    g.fill();
  };

  const body = g.createRadialGradient(X(0), Y(0.25), 0, X(0), Y(0), s);
  body.addColorStop(0, "#170f06");
  body.addColorStop(0.75, "#0b0704");
  body.addColorStop(1, "#050302");
  g.fillStyle = body;
  g.fillRect(0, 0, size, size);

  soft(size * 0.014);
  // amber softbox across the top; its top edge bows, as on a sphere
  g.fillStyle = "#a8783a";
  g.beginPath();
  g.moveTo(X(-0.47), Y(0.47));
  g.quadraticCurveTo(X(-0.05), Y(0.62), X(0.41), Y(0.4));
  g.lineTo(X(0.35), Y(0));
  g.quadraticCurveTo(X(0), Y(-0.03), X(-0.4), Y(0));
  g.closePath();
  g.fill();

  // orange strip light: a gentle curve hugging the left edge
  g.strokeStyle = "#bb761c";
  g.lineCap = "round";
  g.lineWidth = 0.18 * s;
  g.beginPath();
  g.arc(X(0.6), Y(0), 1.4 * s, Math.PI * 0.872, Math.PI * 1.128);
  g.stroke();

  g.fillStyle = "rgba(100,92,74,0.75)"; // dim beige panel, right of centre
  panel(0.42, 0.08, 0.28, 0.38, 0.06);
  soft(0);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* 3D simplex noise (Ashima Arts / Stefan Gustavson, MIT) — the same wobble
   drei's MeshDistortMaterial used. */
const SIMPLEX = /* glsl */ `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
`;

/* ---- atmospheric gold rim (fresnel halo, additive) ---- */
const fresnelVert = /* glsl */ `
  varying vec3 vN;
  varying vec3 vV;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;
const fresnelFrag = /* glsl */ `
  varying vec3 vN;
  varying vec3 vV;
  uniform vec3 uColor;
  uniform float uPower;
  uniform float uIntensity;
  void main() {
    float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), uPower);
    gl_FragColor = vec4(uColor * f * uIntensity, f);
  }
`;

const DISTORT = 0.36;
const SPEED = 1.5;

function LiquidOrb({ detail }) {
  const mesh = useRef();
  const time = useRef({ value: 0 });
  const material = useMemo(() => {
    const m = new THREE.MeshMatcapMaterial({ matcap: makeGoldMatcap() });
    m.toneMapped = false; // the matcap is painted in final colours
    m.onBeforeCompile = (shader) => {
      shader.uniforms.time = time.current;
      shader.uniforms.distort = { value: DISTORT };
      shader.vertexShader = `uniform float time;\nuniform float distort;\n${SIMPLEX}\n${shader.vertexShader}`.replace(
        "#include <begin_vertex>",
        `float noise = snoise(vec3(position / 2.0 + (time / 50.0) * 5.0));
         vec3 transformed = position * (noise * pow(distort, 2.0) + 1.0);`
      );
    };
    m.customProgramCacheKey = () => "aiva-liquid-gold";
    return m;
  }, []);
  useEffect(() => () => (material.matcap.dispose(), material.dispose()), [material]);
  const rim = useMemo(
    () => ({
      // pale cream and broad: bloom used to whiten and spread this rim
      uColor: { value: new THREE.Color("#efe3c0") },
      uPower: { value: 2.0 },
      uIntensity: { value: 1.35 },
    }),
    []
  );
  useFrame((state, delta) => {
    time.current.value = state.clock.elapsedTime * SPEED;
    if (mesh.current) mesh.current.rotation.y += delta * 0.08;
  });
  return (
    <group>
      <mesh ref={mesh} material={material}>
        <icosahedronGeometry args={[1.5, detail]} />
      </mesh>
      <mesh scale={1.34}>
        <icosahedronGeometry args={[1.5, 4]} />
        <shaderMaterial
          uniforms={rim}
          vertexShader={fresnelVert}
          fragmentShader={fresnelFrag}
          transparent
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ---- slow-drifting gold dust for depth ("light in the projector beam") ---- */
const dustVert = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  attribute float aSeed;
  varying float vA;
  void main() {
    vec3 p = position;
    float t = uTime * 0.1 + aSeed;
    p.x += sin(t) * 0.3;
    p.y += cos(t * 0.9) * 0.3;
    p.z += sin(t * 0.7) * 0.3;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (1.0 / -mv.z);
    vA = 0.25 + 0.55 * (0.5 + 0.5 * sin(t * 1.7));
  }
`;
const dustFrag = /* glsl */ `
  uniform vec3 uColor;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d) * vA;
    if (a < 0.01) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;

function Dust({ count }) {
  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 5.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.72;
      positions[i * 3 + 2] = r * Math.cos(phi);
      seeds[i] = Math.random() * 100;
    }
    return { positions, seeds };
  }, [count]);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 24 },
      uColor: { value: new THREE.Color("#e3b964") },
    }),
    []
  );
  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-aSeed" array={seeds} count={count} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={dustVert}
        fragmentShader={dustFrag}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* The same gentle bob and sway drei's <Float> gave (speed 1.1, rotation 0.35,
   float 0.7), without pulling in drei. */
function Float({ children }) {
  const ref = useRef();
  const offset = useRef(Math.random() * 10000);
  useFrame((state) => {
    const g = ref.current;
    if (!g) return;
    const t = ((offset.current + state.clock.elapsedTime) / 4) * 1.1;
    g.rotation.x = (Math.cos(t) / 8) * 0.35;
    g.rotation.y = (Math.sin(t) / 8) * 0.35;
    g.rotation.z = (Math.sin(t) / 20) * 0.35;
    g.position.y = (Math.sin(t) / 10) * 0.7;
  });
  return <group ref={ref}>{children}</group>;
}

function Scene({ q }) {
  const orbGroup = useRef();
  const pointer = useGlobalPointer();
  const { camera } = useThree();
  useFrame(() => {
    const p = pointer.current;
    camera.position.x += (p.x * 0.7 - camera.position.x) * 0.05;
    camera.position.y += (p.y * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
    const g = orbGroup.current;
    if (g) {
      g.rotation.y += (p.x * 0.5 - g.rotation.y) * 0.04;
      g.rotation.x += (-p.y * 0.35 - g.rotation.x) * 0.04;
    }
  });
  return (
    <>
      <group ref={orbGroup}>
        <Float>
          <LiquidOrb detail={q.detail} />
        </Float>
      </group>
      <Dust count={q.particles} />
    </>
  );
}

/* Compiles every shader in the scene before the first frame, in the
   background where the browser supports it (KHR_parallel_shader_compile), so
   no frame ever waits on a compile. */
function Warmup({ onWarm }) {
  const { gl, scene, camera } = useThree();
  useEffect(() => {
    let live = true;
    const done = () => live && onWarm();
    gl.compileAsync(scene, camera).then(done, done);
    return () => {
      live = false;
    };
  }, [gl, scene, camera, onWarm]);
  return null;
}

/* Tells the preloader the scene is up once a few frames have drawn. */
function ReadySignal() {
  const frames = useRef(0);
  useFrame(() => {
    frames.current += 1;
    if (frames.current === 3) markHeroReady();
  });
  return null;
}

export default function HeroScene({ active = true }) {
  const q = useMemo(getQuality, []);
  const [warm, setWarm] = useState(false);
  const onWarm = useCallback(() => setWarm(true), []);
  return (
    <Canvas
      dpr={[1, q.maxDpr]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6.2], fov: 36 }}
      frameloop={warm && active ? "always" : "never"}
      style={{ opacity: warm ? 1 : 0, transition: "opacity 0.9s ease" }}
    >
      <Scene q={q} />
      <Warmup onWarm={onWarm} />
      {warm && <ReadySignal />}
    </Canvas>
  );
}
