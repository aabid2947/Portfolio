'use client';
import React from "react";

// Simplified data for clarity
const educationInfo = [
  {
    year: "2019",
    duration: "2018 – 2019",
    name: "Class 10 – CBSE Board",
    desc: "Completed secondary education with 91% from CBSE Board.",
    bg: 'bg-green-500', // Added background colors like in projects
  },
  {
    year: "2021",
    duration: "2019 – 2021",
    name: "Class 12 – Jamia Millia Islamia",
    desc: "Scored 84% in Physics, Chemistry, and Mathematics (above 90 in each).",
    bg: 'bg-red-400',
  },
  {
    year: "2025 (Expected)",
    duration: "2021 – Present",
    name: "B.Tech – Jamia Millia Islamia",
    desc: "Currently in final year, maintaining an average CGPA of 7.4 throughout.",
    bg: 'bg-blue-400',
  },
];

export default function EducationTimeline() {
  return (
    <main className="flex justify-center py-12">
      <section className="text-white max-w-7xl w-full">
        {/* 1. Create the two-column flex container, just like in ProjectSectionHome */}
        <div className="flex justify-around px-4 sm:px-8 md:px-16">

          {/* 2. This is the tall, scrollable parent for the sticky cards */}
          <div className="w-full md:w-1/2 grid gap-2">
            {educationInfo.map((item, idx) => (
              // 3. Each card is a sticky, screen-height child element
              <figure
                key={item.name + idx}
                className="sticky top-0 h-screen grid place-content-center"
              >
                <EducationCard item={item} />
              </figure>
            ))}
          </div>

          {/* 4. This is the sticky title column on the right */}
          <div className="hidden md:grid sticky top-0 h-screen place-content-center w-1/2">
            <h1 className="text-4xl px-8 font-medium text-center tracking-tight leading-[120%]">
              My <br /> Education 🎓
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}

// Re-using your EducationCard component, but adding the background color
const EducationCard = ({ item }) => {
  return (
    <div
      className={`${item.bg} h-auto w-[20rem] sm:w-[24rem] md:w-[30rem] rounded-lg p-6 grid place-content-center gap-4 shadow-lg`}
    >
      <h3 className="text-3xl font-semibold">{item.year}</h3>
      <p className="text-white/80 text-lg">{item.duration}</p>
      <p className="text-2xl font-['Fira_Code']">{item.name}</p>
      <p className="text-xl text-white/90">{item.desc}</p>
    </div>
  );
};