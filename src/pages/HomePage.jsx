import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/footer'
import { HeroSection } from '../components/HeroSection'
import { ProjectCard } from '../components/projectCard'
import AboutSection from '../components/AboutSectionHome'
import { Contact } from 'lucide-react'
import ContactSection from '../components/ContactSectionHome'
import SkillsSection from '../components/HomeSkillSection'
import { QuoteSection } from '../components/QuoteSection'



export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <QuoteSection/>
      {/* <ProjectCard/> */}
      <SkillsSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
