"use client";

import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
  SiNestjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiSupabase,
  SiMariadb,
  SiPytorch,
  SiOpencv,
  SiArduino,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import {
  Code2,
  Server,
  BrainCircuit,
  Cpu,
  Wrench,
  Layers,
} from "lucide-react";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNuxt />, title: "Nuxt 3", href: "https://nuxt.com" },
  { node: <SiVuedotjs />, title: "Vue 3", href: "https://vuejs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiCplusplus />, title: "C / C++", href: "https://isocpp.org" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMariadb />, title: "MariaDB", href: "https://mariadb.org" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiOpencv />, title: "OpenCV", href: "https://opencv.org" },
  { node: <SiArduino />, title: "Arduino / ESP32", href: "https://www.arduino.cc" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const skillCategories = [
  {
    name: "Programming Languages",
    icon: Code2,
    color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "HTML5", "CSS3"],
  },
  {
    name: "Frontend Development",
    icon: Layers,
    color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/60",
    skills: [
      "Vue.js",
      "Nuxt.js (Nuxt 3)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Pinia",
      "Redux",
      "Zustand",
      "Apollo Client",
    ],
  },
  {
    name: "Backend & Databases",
    icon: Server,
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "GraphQL",
      "REST API",
      "WebSocket",
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "Redis",
      "Supabase",
      "Prisma ORM",
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/60",
    skills: [
      "PyTorch",
      "YOLOv5",
      "OpenCV",
      "CUDA",
      "Computer Vision",
      "Object Detection",
      "Google AI Studio",
    ],
  },
  {
    name: "Embedded Systems & IoT",
    icon: Cpu,
    color: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/60",
    skills: [
      "ESP32",
      "ESP32-CAM",
      "ESP8266",
      "Arduino Uno",
      "Arduino Nano",
      "Blynk IoT",
      "AVR / Proteus",
      "Hardware Troubleshooting",
    ],
  },
  {
    name: "Tools, Cloud & DevOps",
    icon: Wrench,
    color: "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800",
    skills: [
      "Git & GitHub",
      "Docker",
      "Postman",
      "Apidog",
      "Figma",
      "VS Code",
      "Google Colab",
      "N8N",
      "Vercel",
      "Railway",
      "Ngrok",
      "Antigravity",
      "Trello",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="TechStack" className="py-14 sm:py-18 md:py-20 bg-gray-50/70 dark:bg-gray-900/40 border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-red-600 dark:text-red-500 font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Technical Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
            Skills &amp; Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            Comprehensive skill set across full-stack web development, AI/computer vision, and IoT embedded hardware.
          </p>
        </div>

        {/* Logo Loop Carousel */}
        <div className="w-full mb-8 sm:mb-12 overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-3 sm:p-4">
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="right"
            logoHeight={38}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--background)"
            ariaLabel="Technologies"
          />
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-2.5 rounded-xl border ${category.color}`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-950/50 hover:text-red-600 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-800/60 border border-transparent rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
