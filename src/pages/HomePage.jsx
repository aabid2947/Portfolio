import React from 'react';
import { motion, useInView } from 'framer-motion';
import NavBar from '../components/Navbar';
import Footer from '../components/footer';
import { HeroSection } from '../components/Home/HeroSection';
import AboutSectionHome from '../components//Home/AboutSectionHome';
import ContactSection from '../components/Home/ContactSectionHome';
import SkillsSection from '../components/Home/SkillSectionHome';
import { QuoteSection } from '../components/Home/QuoteSection';
import Hyperspeed from '../components/ui/Hyperspeed';
import ProjectSectionHome from '../components/Home/ProjectSectionHome.jsx';
import { GridBackground } from '../components/ui/GridBackgroud.jsx'; // Import the new component

const AnimatedSection = ({ children, direction }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  return (
    <GridBackground>
      {/* <div className="relative "> */}
        <div >
        <NavBar />
          <AnimatedSection direction="up">
            <HeroSection />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <QuoteSection />
          </AnimatedSection>
          <AnimatedSection direction="up">
            <SkillsSection />
          </AnimatedSection>
          <ProjectSectionHome />
          <AnimatedSection direction="up">
            <AboutSectionHome />
          </AnimatedSection>
          <AnimatedSection direction="left">
            <ContactSection />
          </AnimatedSection>
          <Footer />
        </div>
      {/* </div> */}
    </GridBackground>
  );
}