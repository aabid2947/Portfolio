import React from 'react';


import ThreeDCardDemo from './ui/3d-card-demo-2';
// Updated ProjectCard to use mainProjects data shape
export function ProjectCard({ project }) {
  return (
   <ThreeDCardDemo project={project}/>
   
  );
}