"use client";

import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "@/app/components/ProjectCard";
import { FolderGit2 } from "lucide-react";

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

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="MyProject" className="py-14 sm:py-18 md:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-red-600 dark:text-red-500 font-semibold tracking-wider uppercase text-xs sm:text-sm flex items-center justify-center gap-1.5">
            <FolderGit2 className="w-4 h-4" /> Portfolio Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            A showcase of enterprise systems, web applications, computer vision models, and IoT hardware engineering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
              }`}
            >
              {cat}
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
