import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import SmallProjectsSection from "../components/Project/SmallProject";
import Hyperspeed from "../components/ui/Hyperspeed";
import MainProjects from "../components/Project/MainProjects"
import { GridBackground } from '../components/ui/GridBackgroud.jsx'; // Import the new component

export default function ProjectPage() {
  return (
    <>
    
     <GridBackground>
        <NavBar />
        <MainProjects/>
        <SmallProjectsSection />
        <Footer />
  </GridBackground>
    </>
  );
}