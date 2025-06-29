import React from "react";
import { HoverEffect } from "@/components/ui/card-hover";

const minorProjects = [
  {
    Name: 'Round‑Robin Coupon',
    Desc:
      'A web app that distributes coupons to guest users using a round-robin algorithm with cooldown logic, IP/cookie tracking, and responsive dark/light themes for modern devices.',
    tech: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Redux Toolkit',
      'shadcn/ui',
      'React Context API',
    ],
    githubLink: 'https://github.com/aabid2947/RR_Coupon',
    liveLink: 'https://rr-coupon.vercel.app/',
  },
  {
    Name: 'Task Manager Pro',
    Desc:
      'A task management app with weather info, subtasks, theme toggle, and charts for progress tracking. Built with Redux Toolkit, React and features persistent state across sessions.',
    tech: [
      'React 18',
      'Redux Toolkit',
      'Bootstrap 5',
      'Chart.js',
      'Lucide React',
      'Redux Persist',
    ],
    githubLink: 'https://github.com/aabid2947/TODO_APP',
    liveLink: 'https://todo-app-steel-kappa-61.vercel.app/',
  },
  {
    Name: 'PodcastEncAIAbout',
    Desc:
      'An AI-based podcast editor that detects active speakers using diarization, selects the right camera feed, and creates multi-camera highlight videos automatically using deep learning tools.',
    tech: [
      'Python',
      'PyTorch (yolov8)',
      'Diarization',
      'dlib face landmarks',
      'FFmpeg',
      'OpenCV',
    ],
    githubLink: 'https://github.com/aabid2947/PodcastEncAI',
    liveLink: '',
  },
  {
    Name: 'NewCastleV2V',
    Desc:
      'A V2V simulation system using OMNeT++, Veins, and SUMO. Supports OpenStreetMap import, realistic vehicle movement, and customizable multi-vehicle network communication environments.',
    tech: [
      'OMNeT++',
      'Veins',
      'SUMO',
      'Python (randomTrips)',
      'OpenStreetMap',
      'XML config',
    ],
    githubLink: 'https://github.com/aabid2947/NewCastleV2V',
    liveLink: '',
  },
  {
    Name: 'MedNexus',
    Desc:
      'A blockchain-based website that manages hospital records securely using Ethereum, IPFS, and smart contracts. It decentralizes storage and ensures verifiable, tamper-proof patient data.',
    tech: [
      'Solidity',
      'Smart Contracts',
      'Ethereum',
      'React.js',
      'Tailwind CSS',
      'Hardhat',
      'IPFS',
      'Ethers.js',
      'MetaMask',
    ],
    githubLink: 'https://github.com/aabid2947/MedNexus',
    liveLink: '',
  },
  {
    Name: 'Chat App',
    Desc:
      'A real-time Flutter chat app supporting Firebase Authentication, Google Sign-In, and Firestore storage. Features include rich messaging UI and cross-platform compatibility for mobile devices.',
    tech: [
      'Flutter',
      'Dart',
      'Firebase Authentication',
      'Cloud Firestore',
      'Provider',
      'Google Sign-In',
    ],
    githubLink: 'https://github.com/aabid2947/ChatApp',
    liveLink: '',
  },
];


const SmallProjectsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16"> {/* Adjusted padding */}
      <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4 sm:mb-6">Minor Projects</h2> {/* Adjusted heading size and margin */}
      <HoverEffect items={minorProjects} />
    </section>
  );
};

export default SmallProjectsSection;