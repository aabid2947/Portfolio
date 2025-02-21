import React, { useState } from "react";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import HeroImage from "../../assets/HeroSectionImage.png";
import {
  Modal,
  ModalTrigger,
} from "../ui/animated-modal";

export function HeroSection() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <div className="relative min-h-screen px-8 py-16 ">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Intro */}
          <div className="space-y-8">
            <h1 className="font-mono text-4xl text-white">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString("AAbid is a ")
                    .typeString(
                      '<span class="text-purple-500">web designer</span>'
                    )
                    .typeString(" and ")
                    .typeString(
                      '<span class="text-purple-500">front-end developer</span>'
                    )
                    .callFunction(() => setIsTypingComplete(true))
                    .start();
                }}
                options={{
                  autoStart: true,
                  delay: 50,
                  cursor: "|",
                }}
              />
            </h1>
            <p className="font-mono text-lg text-zinc-400">
              {isTypingComplete && (
                <TypewriterComponent
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "He crafts responsive websites where technologies meet creativity"
                      )
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    delay: 30,
                    cursor: "",
                  }}
                />
              )}
            </p>

           

            <motion.button
              className="relative overflow-hidden border border-white px-6 py-2 font-mono text-white transition-colors rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <Modal>
              <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                  See My Resume
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                Dwonload 
                </div>
              </ModalTrigger>
            
            </Modal>
              <motion.div
                className="absolute inset-0 bg-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </div>

          {/* Image and decorations */}
          <div className="relative">
            <div className="absolute right-0 top-0 -z-10 h-72 w-72 bg-purple-500/10 blur-3xl"></div>
            <div className="relative aspect-square">
              {/* Geometric squares */}

              {/* Dot pattern */}
              <div className="absolute -right-4 top-4 grid h-24 w-24 grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-zinc-700"
                  ></div>
                ))}
              </div>
              <img
                src={HeroImage}
                alt="Developer portrait"
                className="relative z-0 h-full w-full object-cover"
                width={500}
                height={500}
              />
              {/* Status bar */}
              <div className="absolute bottom-8 left-0 right-0 z-10 mx-4">
                <div className="flex items-center gap-2 rounded bg-zinc-900/80 p-4 backdrop-blur">
                  <div className="h-3 w-3 rounded-sm bg-purple-500"></div>
                  <p className="font-mono text-sm text-zinc-400">
                    Currently working on{" "}
                    <span className="text-white">Portfolio</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const VacationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};
