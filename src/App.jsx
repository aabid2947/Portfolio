import { useState } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { useLenis } from "./lib/scroll.js";
import Preloader from "./components/Preloader.jsx";
import Cursor from "./components/Cursor.jsx";
import Grain from "./components/Grain.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis(loading);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <Cursor />
      <Grain />
      <ScrollProgress />
      <Navbar started={!loading} />
      <main>
        <Hero started={!loading} />
        <About />
        <Skills />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
