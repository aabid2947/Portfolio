import ContactSection from "../components/ContactSection";
import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import Hyperspeed from "../components/ui/Hyperspeed";
import { GridBackground } from '../components/ui/GridBackgroud.jsx'; // Import the new component

export default function ContactPage() {
  return (
    <GridBackground>
      <NavBar />
      <ContactSection />
      <Footer />

    </GridBackground>
  );
}
