"use client";

import React from "react";
import StackedCardGallery from "./StackedCardGallery";
import { motion } from "framer-motion";

export default function AchievementSection() {
  return (
    <section className="relative px-6 sm:px-10 lg:px-20 py-16 sm:py-24  text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Stacked Cards */}
        <div className="w-full lg:w-1/2">
          <StackedCardGallery />
        </div>

        {/* Right: Achievement Description */}
        <div className="w-full lg:w-1/2">
          {/* Handwritten-style heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono leading-tight text-yellow-300">
            This was my proudest moment <br className="hidden sm:block" />
            <span className="text-white">as a developer ✨</span>
          </h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed"
          >
            <p className="mb-4">
              In <span className="text-yellow-400 font-semibold">Smart India Hackathon (SIH) 2025</span>, our team tackled the challenging problem statement
              <span className="text-white font-semibold"> SIH-1680</span> — <span className="italic">"Few Short Language Agnostic Keyword Spotting System"</span>.
            </p>
            <p className="mb-4">
              We were tasked with building a system that detects specific keywords in audio clips,
              across different languages and accents.
            </p>
            <p className="mb-4">
              <strong>My role:</strong> I led the core implementation for timestamp extraction by analyzing amplitude
              and energy of waveforms — a crucial step in mapping audio to keywords without full transcription.
            </p>
            <p>
              This achievement not only tested my technical skills in audio signal processing, but also highlighted
              the power of collaborative, real-time innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
