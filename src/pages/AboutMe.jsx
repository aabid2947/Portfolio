import ContactSection from "../components/ContactSection";
import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import Hyperspeed from "../components/ui/Hyperspeed";
import AboutSection from "@/components/AboutMe/about-section";
import SkillsSection from "@/components/AboutMe/skills-section";
import FunFactsSection from "@/components/AboutMe/fun-facts-section";
import EducationTimeline from "../components/AboutMe/education-section";
import { GridBackground } from '../components/ui/GridBackgroud.jsx'; // Import the new component
import AchievementSection from "../components/AboutMe/achievment-section.jsx";
export default function ContactPage() {
  
   
  return (
    <GridBackground>
    
        <NavBar />
        <AboutSection />
        <AchievementSection/>
        <EducationTimeline/>
        <SkillsSection />
        <FunFactsSection />
        <Footer />
</GridBackground>
  );
}
