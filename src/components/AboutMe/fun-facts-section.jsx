
import { useEffect, useState } from "react"
import { getAboutMe } from "../../API/api";
import { motion } from "framer-motion";


export default function FunFactsSection() {
  const [funFacts, setFunFacts] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFunFacts() {
      try {
        const facts = await getAboutMe();
        console.log(facts)
        setFunFacts(facts[0].FunFacts)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching fun facts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFunFacts()
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
    <section className=" text-gray-300 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-mono mb-6 text-white">#my-fun-facts</h2>

        <div className="flex flex-wrap gap-3 max-w-3xl mx-auto">
          {funFacts.map((fact) => (
            <span
              key={fact}
              className="inline-flex px-3 py-1 rounded-full border border-gray-700 text-sm font-mono
                hover:border-gray-500 transition-colors cursor-pointer"
            >
              {fact}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

