import React, { createContext, useContext, ReactNode } from 'react';


// Define the shape of a project

// The fixed list of main projects
const mainProjects = [
  {
    Name: "PvPingMc",
    Desc:
      "A Minecraft store website to purchase in‑game items and a blog system where admins can share posts. Built with modern UI and deployed via a Cloudflare CI/CD pipeline.",
    Tech: [
      "React",
      "JavaScript",
      "Tebex API",
      "Cloudflare",
      "Git",
      "GitHub",
      "CI/CD",
      "Tailwind",
    ],
    Repo: ["https://github.com/aabid2947/PvPingMc"],
    Live: "https://pvpingmcv02.pages.dev/",
    pic: "/PvPingMc.png",
  },
  {
    Name: "Modernaff",
    Desc:
      "Developed the ModernAff corporate website using WordPress (Elementor Pro, WPForms) and custom JavaScript, achieving a 98+ PageSpeed Insights score through optimized asset delivery and caching strategies.",
    Tech: [
      "WordPress",
      "Elementor",
      "WPForms",
      "JavaScript",
      "Cloudflare",
      "CI/CD",
      "Git",
      "GitHub",
    ],
    Repo: ["https://github.com/aabid2947/Modernaff"],
    Live: "https://modernaff.com/",
    pic: "/Modernaff.png",
  },
  {
    Name: "Yacht Inventory",
    Desc:
      "A yacht inventory platform with filtering, comparison, pagination, contact form, and loan calculator features. Uses WordPress for backend and modern React tools for frontend.",
    Tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn/UI",
      "Radix UI",
      "Framer Motion",
      "Lucide React",
      "React Router DOM",
      "Emotion",
      "WordPress",
      "ESLint",
    ],
    Repo: ["https://github.com/aabid2947/yacht-inventory"],
    Live: "https://yacht-inventory.vercel.app",
    pic: "/yacht.png",
  },
  {
    Name: "Aiva",
    Desc:
      "Aiva is a React Native mobile virtual assistant that supports chat with AI, voice-to-text input, file upload summarization, and M-Pesa payments. It includes Firebase authentication, push notifications, and Google Sign-In.",
    Tech: [
      "React Native",
      "React",
      "Firebase",
      "Firestore",
      "Google Sign-In",
      "Axios",
      "React Context API",
      "Voice-to-Text",
      "M-Pesa Integration",
      "Push Notifications",
    ],
    Repo: [
      "https://github.com/aabid2947/Aiva",
      "https://github.com/aabid2947/AivaBackend",
    ],
    Live:
      "https://drive.google.com/file/d/1tzKBnf0olvCSIta0giXWxSBcRLbKCkhr/view?usp=drive_link",
    pic: "/PvPingMc.png", // fallback image
  },
  {
    Name: "Transfer Learning",
    Desc:
      "A PyTorch-based implementation of transfer learning that retrains a pre-trained model on custom image datasets. It includes data preprocessing, model training, and evaluation confusion matrices and accuracy curves.",
    Tech: [
      "Python",
      "PyTorch",
      "Torchvision",
      "Jupyter Notebook",
      "Matplotlib",
      "Requests",
    ],
    Repo: ["https://github.com/aabid2947/TransferLearn"],
    Live: "",
    pic: "/PvPingMc.png", // fallback image
  },
  {
    Name: "Portfolio",
    Desc:
      "A personal portfolio built with modern frontend practices to showcase my work, skills, and contact information. Responsive and interactive, hosted on Vercel.",
    Tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "React Router DOM",
      "TypeScript",
    ],
    Repo: ["https://github.com/aabid2947/Portfolio"],
    Live: "https://portfolio-alpha-neon-44.vercel.app/",
    pic: "/Portfolio.png",
  },
];

// Create a Context for the main projects
const ProjectContext = createContext(mainProjects);


// Provider component
export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={mainProjects}>
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook to use the main projects
export const useMainProjects = () => {
  return useContext(ProjectContext);
};
