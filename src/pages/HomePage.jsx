'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import NavBar from '../components/Navbar'
import Footer from '../components/footer'
import { HeroSection } from '../components/HeroSection'
import { ProjectCard } from '../components/projectCard'
import AboutSection from '../components/AboutSectionHome'
import ContactSection from '../components/ContactSectionHome'
import SkillsSection from '../components/HomeSkillSection'
import { QuoteSection } from '../components/QuoteSection'
import Hyperspeed from '../components/ui/Hyperspeed'

const AnimatedSection = ({ children, direction }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 5,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            },
          }}
        />
      </div>
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
      <AnimatedSection direction="up">
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <ContactSection />
      </AnimatedSection>
      <Footer />
    </div>
  )
}
