import React, { useEffect, useState } from "react"
import { motion } from "framer-motion";

import { getSkills } from "../../API/api";


export default function SkillsSection() {
  const [skills, setSkills] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skill = await getSkills();
        if (skill) {
          setSkills(skill[0]);
          setLoading(false);
        }
        console.log(skill[0]);
      } catch (error) {
        console.error("Error fetching skills: ", error);
      }
    };

    fetchSkills()
  }, [])

  if (loading) {
    return <div className="text-center py-8 text-white">Loading skills...</div>
  }

  
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
    <section className="text-gray-300 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-mono mb-6 text-white">#skills</h2>

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
              className="space-y-2 "
              variants={itemVariants}
              custom={index}
            >
              <h3 className="text-white font-['Fira_Code'] capitalize text-sm sm:text-base mb-2">
                {category}
              </h3>
              <div className="border border-[#ABB2BF] p-2 sm:p-3 rounded-xl  bg-black/80">
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

         

         

      </div>
    </section>
  )
}

