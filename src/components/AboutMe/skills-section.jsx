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
      className="w-full h-[24rem] sm:h-[28rem] lg:h-[30rem] rounded-2xl [perspective:1000px]" // Adjusted height for responsiveness
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
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-zinc-950 backdrop-blur-lg border border-gray-800 rounded-2xl p-4 sm:p-6 [backface-visibility:hidden]"> {/* Adjusted padding */}
          <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-white/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          {/* Lighting effect - bottom right (yellow) */}


          <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full blur-2xl"></div> {/* Adjusted size */}

          {/* Bottom yellow glow */}

          <div className="absolute bottom-0 w-full h-16 sm:h-24 bg-gradient-to-t from-yellow-100/10 to-transparent blur-2xl"></div> {/* Adjusted height */}

          <h3 className="text-xl sm:text-2xl text-center font-semibold text-gray-200"> {/* Adjusted font size */}

            {skill.title}
          </h3>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-2xl p-6 sm:p-8 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]"> {/* Adjusted padding */}
          <p className="text-base sm:text-lg lg:text-xl text-center text-gray-700 font-medium leading-relaxed"> {/* Adjusted font size */}
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
    <section className="text-gray-300 p-4 sm:p-8 lg:p-16"> {/* Adjusted padding for all screen sizes */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12"> {/* Adjusted gap and margin-bottom */}
          <h2 className="text-white text-4xl font-semibold leading-[4rem] pb-1 tracking-wider ">This  is<br />
           <span className='text-yellow-300'> WHAT I put on the table</span> </h2> {/* Adjusted font size */}
        
        </div>

        {/* Skills Grid */}
        <div className="mx-4 sm:mx-8 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"> {/* Adjusted horizontal margin and gaps */}
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}