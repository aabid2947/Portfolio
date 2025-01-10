'use client'

import { getSkills } from "../API/api";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    console.log("Fetching skills");
    const fetchSkills = async () => {
      try {
        const skill = await getSkills();
        console.log(skill)
        if (skill) {
          setSkills(skill[0]);
        }
        console.log(skill[0]);
      } catch (error) {
        console.error("Error fetching skills: ", error);
      }
    };
    fetchSkills();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: (i) => ({
      x: i % 2 === 0 ? -50 : 50,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <h2 className="font-['Fira_Code'] text-[#C778DD] text-base sm:text-lg">#skills</h2>
          <div className="h-[1px] w-16 sm:w-24 md:w-32 bg-[#C778DD]" />
        </div>

        {/* Decorative Shapes */}
        <div className="absolute left-4 sm:left-8 top-12 sm:top-24 opacity-50 sm:opacity-100">
          {/* Dots Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-[4px] sm:gap-[6px]">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] bg-zinc-400 rounded-full" />
            ))}
          </div>
          
          {/* Square Shapes */}
          <div className="relative mt-8 sm:mt-12 hidden sm:block">
            <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border border-[#C778DD] opacity-50" />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border border-[#C778DD] opacity-50" />
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border border-[#C778DD] opacity-50" />
          </div>
        </div>

        {/* Additional Dots */}
        <div className="absolute right-4 sm:right-12 bottom-8 sm:bottom-12 opacity-20 sm:opacity-40">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-[4px] sm:gap-[6px]">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] bg-zinc-400 rounded-full" />
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto sm:ml-16 md:ml-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div 
              key={category} 
              className="space-y-2"
              variants={itemVariants}
              custom={index}
            >
              <h3 className="text-white font-['Fira_Code'] capitalize text-sm sm:text-base mb-2">
                {category}
              </h3>
              <div className="border border-[#ABB2BF] p-2 sm:p-3 rounded-xl">
                <p className="space-y-1 sm:space-y-2 text-[#ABB2BF] text-xs sm:text-sm font-['Fira_Code']">
                  {Array.isArray(items) && items.map((item, index) => (
                    <React.Fragment key={index}>
                      <strong>{item}</strong>
                      {index < items.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Shapes */}
        <div className="hidden absolute right-24 sm:right-72 top-12 sm:top-24 opacity-50 sm:opacity-100 lg:block">
          {/* Dots Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-[4px] sm:gap-[6px]">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] bg-zinc-400 rounded-full" />
            ))}
          </div>
          
          {/* Square Shapes */}
          <div className="relative mt-8 sm:mt-12 hidden sm:block opacity-10">
            <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border border-[#C778DD] opacity-50" />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border border-[#C778DD] opacity-50" />
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border border-[#C778DD] opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

