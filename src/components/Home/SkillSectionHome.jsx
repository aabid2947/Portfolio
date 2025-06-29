import React from 'react';
import { motion } from 'framer-motion';
// Import icons from lucide-react
import { Framer, Code, Layers } from 'lucide-react'; 

export default function SkillsSection() {
  // 1. Updated data structure to include optional icons
  const skills = [
    { name: 'AFTER EFFECTS', icon: <Layers size={20} /> },
    { name: 'ADVANCED PROTOTYPING' },
    { name: 'FRAMER', icon: <Framer size={20} /> },
    { name: 'REACT' },
    { name: 'NEXT.JS' },
    { name: 'TAILWIND CSS' },
    { name: 'JAVASCRIPT' },
    { name: 'TYPESCRIPT' },
    { name: 'PYTHON' },
    { name: 'DOCKER' },
    { name: 'FIREBASE' },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, '-100%'], // Animate from start to the point where the first set is off-screen
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30, // Controls the speed of the scroll
          ease: 'linear',
        },
      },
    },
  };

  return (
    <section className=" relative w-full py-16 sm:py-20 md:py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col items-start px-4">
        {/* Header aligned to the left */}
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-8 sm:mb-10 self-start">
          TECH STACK
        </h2>

        {/* 2. The Marquee Container */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 whitespace-nowrap" // Use flex and gap for spacing
            variants={marqueeVariants}
            animate="animate"
            // Pause animation on hover
            whileHover={{ transition: { duration: 0 } }} 
          >
            {/* 3. Render the skills list TWICE for a seamless loop */}
            {[...skills, ...skills].map((skill, index) => (
              <SkillTag key={index} name={skill.name} icon={skill.icon} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// A new component for individual skill tags for cleaner code
const SkillTag = ({ name, icon }) => {
  return (
    <div className="flex items-center justify-center h-16 sm:h-20   bg-[#000] text-gray-200 rounded-lg px-4 py-2 sm:px-5 sm:py-3 shadow-md">
      {icon && <span className="mr-1 sm:mr-2 text-base sm:text-xl">{icon}</span>}
      <span className="font-semibold tracking-wide text-base sm:text-xl uppercase">{name}</span>
    </div>
  );
};