import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const educationData = [
  {
    year: "2018",
    grade: "10th Grade",
    institution: "High School Name",
    details: "Completed 10th grade with honors",
  },
  {
    year: "2019",
    grade: "11th Grade",
    institution: "High School Name",
    details: "Participated in science fair and won first prize",
  },
  {
    year: "2020",
    grade: "12th Grade",
    institution: "High School Name",
    details: "Graduated with distinction and received scholarship",
  },
  {
    year: "2021-2025",
    grade: "Bachelor's Degree",
    institution: "University Name",
    details: "Majoring in Computer Science with a focus on AI and Machine Learning",
  },
];

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

  return (
    <section ref={ref} className="py-16  text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Education Journey</h2>
        <div className="relative max-w-4xl mx-auto">
          <motion.div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700" style={{ scaleY, originY: 0 }} />
          <div className="relative z-10 space-y-16">
            {educationData.map((item, index) => (
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
      className={`flex items-center w-full ${isEven ? "justify-start" : "justify-end"}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : isEven ? -50 : 50 }}
      transition={{ duration: 0.5 }}
    >
      {isEven ? (
        <>
          <div className="w-5/12 pr-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{item.grade}</h3>
              <p className="text-orange-400">{item.year}</p>
              <p className="text-lg mb-2">{item.institution}</p>
              <p className="text-gray-400">{item.details}</p>
            </div>
          </div>
          <div className="w-2/12 flex justify-center">
            <div className="ml-[4px] w-4 h-4 bg-orange-500 rounded-full" />
          </div>
          <div className="w-5/12" />
        </>
      ) : (
        <>
          <div className="w-5/12" />
          <div className="w-2/12 flex justify-center">
            <div className="ml-[3px] w-4 h-4 bg-orange-500 rounded-full" />
          </div>
          <div className="w-5/12 pl-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{item.grade}</h3>
              <p className="text-orange-400">{item.year}</p>
              <p className="text-lg mb-2">{item.institution}</p>
              <p className="text-gray-400">{item.details}</p>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default EducationTimeline;
