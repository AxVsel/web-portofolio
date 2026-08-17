"use client";

import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "@/app/components/ProjectCard";
import { FolderGit2, Gamepad } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { playSelectSound, playCoinSound } from "@/lib/retroAudio";

const allProjects: ProjectCardProps[] = [
  {
    image: "/experienceUnisia.png",
    title: "Hospital Information System (SIMRS)",
    role: "AI Software Engineer",
    category: "Web & Full Stack",
    year: "2025 - Present",
    description:
      "Enterprise SIMRS modules including Pharmacy, Billing, Cashier, Patient Registration, Electronic Prescription (E-Prescription), and Service Transactions. Built reusable Nuxt 3/Vue 3 components and integrated GraphQL APIs with NestJS backend.",
    techStack: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Pinia",
      "Tailwind CSS",
      "NestJS",
      "MariaDB",
    ],
    repositoryType: "Enterprise System (PT Unisia Tera Medika)",
  },
  {
    image: "/ShareNote.png",
    title: "ShareNote",
    role: "Full Stack Developer",
    category: "Web & Full Stack",
    year: "2025",
    description:
      "A web application for sharing notes that can be read and collaboratively edited by authorized users, streamlining team knowledge sharing and collaboration.",
    techStack: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Prisma ORM",
      "Supabase",
      "Express.js",
      "Node.js",
    ],
    githubFrontend: "https://github.com/AxVsel/sharenote-fe",
    githubBackend: "https://github.com/AxVsel/sharenote-be",
  },
  {
    image: "/circleProject.png",
    title: "Circle",
    role: "Full Stack Developer",
    category: "Web & Full Stack",
    year: "2025",
    description:
      "A minimalist, high-performance social media platform where users can publish posts, comments, replies, follow profiles, and discover community discussions.",
    techStack: [
      "TypeScript",
      "React.js",
      "Vite",
      "Shadcn/ui",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "Express.js",
      "Node.js",
    ],
    githubFrontend: "https://github.com/AxVsel/circle-fe",
    githubBackend: "https://github.com/AxVsel/circle-be",
  },
  {
    image: "/FutsalGo.png",
    title: "FutsalGo",
    role: "Full Stack Developer (Team Project)",
    category: "Web & Full Stack",
    year: "2025",
    description:
      "A full-featured sports booking application designed for reserving futsal courts with real-time slot availability, schedule management, and instant confirmation.",
    techStack: [
      "React.js",
      "Vite",
      "TypeScript",
      "Shadcn/ui",
      "Tailwind CSS",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Node.js",
    ],
    githubOrg: "https://github.com/FutsalGo",
  },
  {
    image: "/chatFilm.png",
    title: "Chatfilm",
    role: "Full Stack Developer",
    category: "Web & Full Stack",
    year: "2025",
    description:
      "An intelligent AI-powered platform for cinema enthusiasts to discuss films, TV series, and anime, providing deep storyline breakdowns, recommendations, and cast insights.",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google AI Studio",
    ],
    demoLink: "https://chatfilm-seven.vercel.app/",
  },
  {
    image: "/sibi.png",
    title: "Indonesian Sign Language (SIBI) Recognition",
    role: "AI / Computer Vision (Thesis)",
    category: "AI & Computer Vision",
    year: "2024",
    description:
      "Computer vision application to recognize Indonesian Sign Language (SIBI) alphabet using YOLOv5, trained on a custom 1,200-image dataset with GPU acceleration for real-time gesture inference.",
    techStack: [
      "Python",
      "PyTorch",
      "YOLOv5",
      "OpenCV",
      "CUDA",
      "CometML",
      "Roboflow",
    ],
    repositoryType: "Academic Thesis (Amikom)",
  },
  {
    image: "/smartdoor.png",
    title: "Smart Door Lock System",
    role: "IoT & Embedded Developer",
    category: "IoT & Embedded",
    year: "2022",
    description:
      "IoT-based physical access control mechanism utilizing ESP32-CAM for facial recognition authentication with Blynk cloud integration for instant mobile alerts and remote monitoring.",
    techStack: [
      "C",
      "C++",
      "ESP32-CAM",
      "Blynk IoT",
      "Facial Recognition",
      "Embedded C",
    ],
    repositoryType: "IoT Hardware Project",
  },
  {
    image: "/facedetection.png",
    title: "Face Mask Compliance Detection",
    role: "Computer Vision Developer",
    category: "AI & Computer Vision",
    year: "2022",
    description:
      "Real-time object detection model built with YOLOv5 and PyTorch achieving >80% accuracy in detecting proper mask-wearing compliance in public environments.",
    techStack: ["Python", "YOLOv5", "PyTorch", "Computer Vision", "OpenCV"],
    repositoryType: "AI / Computer Vision Project",
  },
];

const categories = [
  "All",
  "Web & Full Stack",
  "AI & Computer Vision",
  "IoT & Embedded",
] as const;

export default function MyProject() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { isRetro, openGame } = useTheme();

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    if (isRetro) {
      playCoinSound();
    }
  };

  return (
    <section id="MyProject" className="py-14 sm:py-18 md:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-red-600 dark:text-red-500 font-semibold tracking-wider uppercase text-xs sm:text-sm flex items-center justify-center gap-1.5">
            {isRetro ? <Gamepad className="w-4 h-4" /> : <FolderGit2 className="w-4 h-4" />}
            {isRetro ? "★ ARCADE STAGES & TROPHIES ★" : "Portfolio Showcase"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
            {isRetro ? "ARCADE MISSIONS" : "Featured Projects"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            {isRetro
              ? "Select an arcade cartridge mission to view full stack software systems, computer vision AI, and embedded IoT gadgets."
              : "A showcase of enterprise systems, web applications, computer vision models, and IoT hardware engineering."}
          </p>

          {isRetro && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={openGame}
                className="flex items-center gap-2 px-5 py-2 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm border-3 border-black shadow-[4px_4px_0px_#000000] dark:bg-pink-600 dark:text-white dark:border-cyan-400 dark:shadow-[4px_4px_0px_#00ffff] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
              >
                <Gamepad className="w-4 h-4" />
                <span>🕹️ INSERT COIN - PLAY BUG HUNTER 1989</span>
              </button>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                isRetro
                  ? selectedCategory === cat
                    ? "bg-amber-400 text-black border-2 border-black shadow-[3px_3px_0px_#000] dark:bg-pink-600 dark:text-white dark:border-cyan-400 font-bold"
                    : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-2 border-black dark:border-gray-700 shadow-[2px_2px_0px_#000]"
                  : selectedCategory === cat
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20 rounded-full"
                  : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-full"
              }`}
            >
              {isRetro && selectedCategory === cat ? `▶ ${cat}` : cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
