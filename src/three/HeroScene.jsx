import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, MeshDistortMaterial, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

/* Quality is resolved once on mount — no resize churn for a hero backdrop. */
function getQuality() {
  const w = typeof window !== "undefined" ? window.innerWidth : 1440;
  const mobile = w < 768;
  return {
    mobile,
    detail: mobile ? 4 : 6, // icosahedron subdivisions → smoothness of the morph
    particles: mobile ? 450 : 1300,
    maxDpr: mobile ? 1.5 : 1.8, // cap retina overdraw
    bloom: mobile ? 0.55 : 0.9,
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

/* ---- atmospheric gold rim (fresnel halo, additive, bloom-fed) ---- */
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

function LiquidOrb({ detail }) {
  const mesh = useRef();
  const rim = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#f0d491") },
      uPower: { value: 3.0 },
      uIntensity: { value: 1.15 },
    }),
    []
  );
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.08;
  });
  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, detail]} />
        <MeshDistortMaterial
          color="#7c5a23"
          metalness={1}
          roughness={0.16}
          envMapIntensity={1.5}
          distort={0.36}
          speed={1.5}
        />
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
      uSize: { value: 22 },
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

/* ---- procedural studio lighting baked once → reflections, no HDR download ---- */
function StudioEnv() {
  return (
    <Environment resolution={256} frames={1}>
      <color attach="background" args={["#0a0a0f"]} />
      <Lightformer form="rect" intensity={1.4} color="#fff4e0" position={[0, 3, 3]} scale={[7, 4, 1]} />
      <Lightformer
        form="rect"
        intensity={2.4}
        color="#e3b964"
        position={[-5, 1, -1]}
        rotation={[0, Math.PI / 3, 0]}
        scale={[3, 7, 1]}
      />
      <Lightformer form="rect" intensity={0.7} color="#9db4ff" position={[5, -1, 2]} scale={[3, 3, 1]} />
      <Lightformer form="ring" intensity={1.5} color="#f0d491" position={[3, 3, 4]} scale={2.2} />
    </Environment>
  );
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
        <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.7}>
          <LiquidOrb detail={q.detail} />
        </Float>
      </group>
      <Dust count={q.particles} />
      <StudioEnv />
    </>
  );
}

export default function HeroScene({ active = true }) {
  const q = useMemo(getQuality, []);
  return (
    <Canvas
      dpr={[1, q.maxDpr]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6.2], fov: 36 }}
      frameloop={active ? "always" : "never"}
    >
      <color attach="background" args={["#060608"]} />
      <Scene q={q} />
      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur intensity={q.bloom} luminanceThreshold={0.5} luminanceSmoothing={0.25} radius={0.8} />
      </EffectComposer>
    </Canvas>
  );
}
