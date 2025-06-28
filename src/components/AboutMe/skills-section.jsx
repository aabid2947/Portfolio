import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Data for the skill cards
const skillsData = [
  {
    title: 'User-Centered Insight',
    description: 'I craft intuitive, user-friendly experiences that feel effortless. With expertise in Figma and a keen eye for detail, I blend aesthetics with functionality to create designs that truly resonate.',
  },
  {
    title: 'Full-Stack Development',
    description: 'Building robust and scalable web applications from front to back. Expertise in React for the frontend, Node.js for the backend, and modern databases like MongoDB and Firestore.',
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring a seamless and visually appealing experience across all devices. My layouts are fluid, adaptive, and accessible, from mobile phones to high-resolution desktop displays.',
  },
  {
    title: 'API Integration',
    description: 'Connecting applications with third-party services through REST and GraphQL APIs. I handle data flow, authentication, and error management to create a cohesive system.',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications on cloud platforms like Firebase and Vercel. I implement CI/CD pipelines for automated, reliable, and efficient deployments.',
  },
  {
    title: 'Agile Methodologies',
    description: 'Working in fast-paced, collaborative environments using Agile and Scrum. I focus on iterative development, clear communication, and delivering value quickly and effectively.',
  },
];

// Card component with the flip animation
const SkillCard = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    flipped: {
      rotateY: 180,
    },
    unflipped: {
      rotateY: 0,
    },
  };

  return (
    <div
      className="w-full h-80 rounded-2xl [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
                 <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side_at_var(--mouse-x)_var(--mouse-y),_rgba(199,120,221,0.15),_transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        variants={cardVariants}
        animate={isFlipped ? 'flipped' : 'unflipped'}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-[#000] rounded-2xl p-6 [backface-visibility:hidden]">
           {/* <div className="w-4 h-4 rounded-full bg-white/10 mb-6 shadow-inner"></div> */}
           <h3 className="text-2xl text-center font-semibold text-gray-200">
             {skill.title}
           </h3>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-2xl p-8 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-center text-gray-700 font-medium text-xl leading-relaxed">
            {skill.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};


// Main Skills Section Component
export default function SkillsSection() {
  return (
    <section className=" text-gray-300 p-8 sm:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
           <h2 className="font-mono text-[#C778DD] text-3xl">#skills</h2>
           <div className="h-[1px] flex-grow bg-gray-700" />
        </div>
        
        {/* Skills Grid */}
        <div className="mx-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
