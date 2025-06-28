import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { getAboutMe } from "../../API/api";

const EducationTimeline = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 40,
    restDelta: 0.001,
  });


  const [educationInfo, setEducationInfo] = useState([
    {
      year: "2019",
      duration: "2018 – 2019",
      name: "Class 10 – CBSE Board",
      desc: "Completed secondary education with 91% from CBSE Board.",
    },
    {
      year: "2021",
      duration: "2019 – 2021",
      name: "Class 12 – Jamia Millia Islamia",
      desc: "Scored 84% in Physics, Chemistry, and Mathematics (above 90 in each).",
    },
    {
      year: "2025 (Expected)",
      duration: "2021 – Present",
      name: "B.Tech – Jamia Millia Islamia",
      desc: "Currently in final year, maintaining an average CGPA of 7.4 throughout.",
    },
  ]);
  return (
    <section ref={ref} className="py-8 sm:py-12 md:py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-sm sm:text-lg md:text-xl font-mono mb-6 text-white">/education</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - Always visible */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-700"
            style={{ scaleY, originY: 0 }}
          />
          <div className="relative z-10 space-y-8 sm:space-y-12 md:space-y-16">
            {educationInfo.map((item, index) => (
              <EducationItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={itemRef}
      className={`flex items-center w-full ${isEven ? "justify-start" : "justify-end"} `}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : isEven ? -50 : 50 }}
      transition={{ duration: 0.5 }}
    >
      {isEven ? (
        <>
          <div className="w-5/12 pr-2 sm:pr-8">
            <EducationCard item={item} />
          </div>
          <div className="w-2/12 flex justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full" />
          </div>
          <div className="w-5/12 hidden sm:block" />
        </>
      ) : (
        <>
          <div className="w-5/12 hidden sm:block" />
          <div className="w-2/12 flex justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full" />
          </div>
          <div className="w-5/12 pl-2 sm:pl-8">
            <EducationCard item={item} />
          </div>
        </>
      )}
    </motion.div>
  );
};

const EducationCard = ({ item }) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg font-mono w-full">
      <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-1 sm:mb-2">{item.year}</h3>
      <p className="text-orange-400 text-xs sm:text-sm md:text-base">{item.duration}</p>
      <p className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2 font-['Fira_Code']">{item.name}</p>
      <p className="text-gray-400 text-xs sm:text-sm md:text-base">{item.desc}</p>
    </div>
  );
};

export default EducationTimeline;
