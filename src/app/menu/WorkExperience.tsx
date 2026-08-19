"use client";

import ExperienceCard from "../components/ExperienceCard";
import { Briefcase, Sword } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const experiences = [
  {
    stage: "WORLD 3 - CURRENT MAIN BOSS QUEST",
    logo: "/unisia.webp",
    role: "Software Engineer",
    company: "PT Unisia Tera Medika (JIH Hospital)",
    date: "Oct 2025 - Present",
    points: [
      "Developed and maintained Hospital Information System (SIMRS) modules using Nuxt 3, Vue 3, TypeScript, and Tailwind CSS.",
      "Built reusable frontend components and composables to improve code maintainability and development efficiency.",
      "Integrated frontend applications with GraphQL APIs using Apollo Client, including queries, mutations, and data management.",
      "Developed pharmacy, cashier, billing, patient registration, and electronic prescription (E-Prescription) features for hospital operations.",
      "Contributed to backend development using NestJS, implementing and maintaining Radiology module features and API endpoints.",
      "Collaborated with backend engineers to design GraphQL schemas, troubleshoot API issues, and ensure seamless frontend-backend integration.",
      "Participated in AI-related initiatives to support hospital digital transformation and intelligent healthcare workflows.",
    ],
    techs: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Apollo Client",
      "NestJS",
      "Pinia",
      "MariaDB",
      "Healthcare AI",
    ],
  },
  {
    stage: "WORLD 2 - SIDE QUEST COMPLETED",
    logo: "/gitsolution.png",
    role: "Intern Full Stack Developer",
    company: "PT GIT Solution (MoA Batch 9)",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Developed end-to-end web applications using EJS and Bootstrap for the frontend, and Express.js with Node.js for the backend.",
      "Collaborated in agile team sprints to design RESTful API endpoints and implement dynamic server-rendered user interfaces.",
    ],
    techs: [
      "Node.js",
      "Express.js",
      "Bootstrap",
      "REST APIs",
      "EJS",
      "PostgreSQL",
      "JavaScript",
    ],
  },
  {
    stage: "WORLD 1 - TUTORIAL DUNGEON CLEARED",
    logo: "/company1.jpg",
    role: "Computer Technician Intern",
    company: "Digiparts",
    date: "Jan 2019 - Mar 2019",
    points: [
      "Performed routine maintenance and repair for computers and laptops.",
      "Diagnosed and resolved hardware and software issues.",
      "Installed and configured operating systems, drivers, and applications.",
      "Conducted data backup, recovery, and system optimization.",
      "Ensured devices operated efficiently and securely for end users.",
    ],
    techs: [
      "Hardware Maintenance & Repair",
      "OS & Driver Configuration",
      "Troubleshooting",
      "Data Recovery",
      "System Optimization",
    ],
  },
];

export default function WorkExperience() {
  const { isRetro } = useTheme();

  return (
    <section
      id="experience"
      className="py-14 sm:py-18 md:py-20 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-red-600 dark:text-red-500 font-semibold tracking-wider uppercase text-xs sm:text-sm flex items-center justify-center gap-1.5">
            {isRetro ? (
              <Sword className="w-4 h-4" />
            ) : (
              <Briefcase className="w-4 h-4" />
            )}
            {isRetro ? "★ COMPLETED DUNGEONS & BOSSES ★" : "Career Journey"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
            {isRetro ? "QUEST LOG" : "Work Experience"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            {isRetro
              ? "Chronological mission history building enterprise hospital platforms, full-stack systems, and hardware engineering."
              : "Professional track record delivering enterprise hospital systems, full-stack solutions, and hardware maintenance."}
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
