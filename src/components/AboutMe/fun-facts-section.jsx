"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PuzzleIcon as Chess, Coffee, Code, Book, PuzzleIcon } from "lucide-react"

// Personal fun facts data - replace with your API call
const sampleFunFacts = [
  { text: "Chess strategist", icon: Chess },
  { text: "Novel enthusiast", icon: Book },
  { text: "Chicken lover", icon: Coffee }, // Using Coffee icon as food icon
  { text: "Night owl coder", icon: Code },
  { text: "Problem solver", icon: PuzzleIcon },
  { text: "Story seeker", icon: Book },
  { text: "Strategic thinker", icon: Chess },
  { text: "Comfort food connoisseur", icon: Coffee },
]

export default function FunFactsSection() {
  const [funFacts, setFunFacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [hoveredFact, setHoveredFact] = useState(null)

  useEffect(() => {
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      setFunFacts(sampleFunFacts)
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <motion.p
            className="text-gray-400 font-mono text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Loading fun facts...
          </motion.p>
        </div>
      </div>
    )
  }

  return (
    <section className=" text-gray-300 p-8  flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl md:text-3xl font-mono mb-2 text-white">
            <span className="text-yellow-400">#</span>my-fun-facts
          </h2>
          <p className="text-gray-400 mb-12 font-mono text-sm">Things that make me, well... me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {funFacts.map((fact, index) => {
              const IconComponent = fact.icon
              return (
                <motion.div
                  key={fact.text}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  onHoverStart={() => setHoveredFact(index)}
                  onHoverEnd={() => setHoveredFact(null)}
                  className="group relative"
                >
                  <div
                    className=" bg-zinc-950 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 h-full
                    hover:border-yellow-400/50 hover:bg-slate-800/80 transition-all duration-300
                    cursor-pointer backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{
                          rotate: hoveredFact === index ? 360 : 0,
                          scale: hoveredFact === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="p-2 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 
                          rounded-lg group-hover:from-yellow-400/30 group-hover:to-orange-500/30"
                      >
                        <IconComponent className="w-5 h-5 text-yellow-400" />
                      </motion.div>
                      <span
                        className="font-mono text-sm text-gray-300 group-hover:text-white
                        transition-colors duration-300"
                      >
                        {fact.text}
                      </span>
                    </div>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 
                        rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Fun interactive element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 font-mono text-xs">Hover over the cards to see them come alive ✨</p>
        </motion.div>
      </div>
    </section>
  )
}
