import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { getAboutMe } from "../../API/api";



const EducationTimeline = () => {
  const [educationInfo, setEducationInfo] = useState([])
  const [loading,setLoading] = useState(true)

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

  useEffect(() => {
    console.log("Fetching Education Info")
    const fetchEducationInfo = async () => {
      try {
        const fetchedAboutme = await getAboutMe()

        if (fetchedAboutme) {
          console.log(fetchedAboutme[0].education)
          setEducationInfo(fetchedAboutme[0].education)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchEducationInfo()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  }


  return (
    <section ref={ref} className="py-16  text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-mono mb-6 text-white">/education </h2>
        <div className="relative max-w-4xl mx-auto">
          <motion.div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700" style={{ scaleY, originY: 0 }} />
          <div className="relative z-10 space-y-16">
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
    // console.log(90)
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
          <div className="w-5/12 pr-8">
            <div className="bg-gradient-to-b from-gray-900 to-black text-white p-4 rounded-lg shadow-lg font-mono">
              <h3 className="text-2xl font-semibold mb-2">{item.year}</h3>
              <p className="text-orange-400">{item.duration}</p>
              <p className="text-lg mb-2 font-['Fira_Code']">{item.name}</p>
              <p className="text-gray-400 ">{item.desc}</p>
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
            <div className="ml-[4px] w-4 h-4 bg-orange-500 rounded-full" />
          </div>
          <div className="w-5/12 pl-8">
            <div className="bg-gradient-to-b from-gray-900 to-black text-white p-4 rounded-lg shadow-lg font-mono">
              <h3 className="text-2xl font-semibold mb-2">{item.year}</h3>
              <p className="text-orange-400">{item.duration}</p>
              <p className="text-lg mb-2 font-['Fira_Code']">{item.name}</p>
              <p className="text-gray-400 ">{item.desc}</p>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default EducationTimeline;
