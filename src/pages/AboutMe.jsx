import ContactSection from "../components/ContactSection";
import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import Hyperspeed from "../components/ui/Hyperspeed";
import AboutSection from "@/components/AboutMe/about-section";
import SkillsSection from "@/components/AboutMe/skills-section";
import FunFactsSection from "@/components/AboutMe/fun-facts-section";

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full z-[-1] ">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
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
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>
      <div className="background-blur-md h-screen flex flex-col space-y-8">
        <NavBar />
        <AboutSection />
        <SkillsSection />
        <FunFactsSection />
        <Footer />
      </div>
    </div>
  );
}
