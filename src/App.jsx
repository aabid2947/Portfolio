import React from "react";
import HomePage from "./pages/HomePage";
import { ProjectProvider } from './contexts/ProjectContext';
import MouseGlow from "./components/ui/MouseGlow";
function App() {
  return (
    <ProjectProvider>
    <div className="relative min-h-screen">
    
      
      <div className="relative z-10 min-h-screen">

        <HomePage />
      </div>
    </div>
  </ProjectProvider>

  );
}

export default App;

