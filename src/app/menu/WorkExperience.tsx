"use client";

import ExperienceCard from "../components/ExperienceCard";
import { Briefcase, Sword } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";

const experiences = [
  {
    stage: "WORLD 3 - CURRENT MAIN BOSS QUEST",
    stageId: "DUNIA 3 - MISI UTAMA SAAT INI",
    logo: "/unisia.webp",
    role: "Software Engineer",
    roleId: "Software Engineer",
    company: "PT Unisia Tera Medika (JIH Hospital)",
    date: "Oct 2025 - Present",
    dateId: "Okt 2025 - Sekarang",
    points: [
      "Engineered and maintained core Hospital Information System (SIMRS) modules using Nuxt 3, Vue 3, TypeScript, and Tailwind CSS.",
      "Architected modular, reusable frontend components and composables, reducing development time and boosting codebase maintainability.",
      "Integrated complex GraphQL APIs via Apollo Client to handle efficient state management, queries, and mutations.",
      "Delivered critical features for pharmacy, billing, cashier, patient registration, and Electronic Prescription (E-Prescription) workflows.",
      "Designed and implemented backend microservices and API endpoints for the Radiology module using NestJS.",
      "Collaborated with cross-functional teams to define GraphQL schemas, debug system bottlenecks, and ensure reliable integration.",
      "Spearheaded AI integration initiatives aimed at automating clinical data entry and optimizing hospital operations.",
    ],
    pointsId: [
      "Mengembangkan dan memelihara modul inti Sistem Informasi Manajemen Rumah Sakit (SIMRS) menggunakan Nuxt 3, Vue 3, TypeScript, dan Tailwind CSS.",
      "Merancang komponen frontend dan composable yang modular dan reusable, mempercepat waktu pengembangan dan meningkatkan kemudahan perawatan kode.",
      "Mengintegrasikan GraphQL API yang kompleks via Apollo Client untuk manajemen state, queries, dan mutations yang efisien.",
      "Menghadirkan fitur penting untuk alur kerja Farmasi, Billing, Kasir, Registrasi Pasien, dan E-Resep (Electronic Prescription).",
      "Merancang dan mengimplementasikan backend microservices dan API endpoint untuk modul Radiologi menggunakan NestJS.",
      "Berkolaborasi dengan tim lintas fungsi untuk mendefinisikan skema GraphQL, menganalisis bottleneck sistem, dan memastikan keandalan integrasi.",
      "Memimpin inisiatif integrasi AI untuk otomatisasi entri data klinis dan optimalisasi operasional rumah sakit.",
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
    stageId: "DUNIA 2 - MISI SAMPINGAN SELESAI",
    logo: "/gitsolution.png",
    role: "Intern Full Stack Developer",
    roleId: "Intern Full Stack Developer",
    company: "PT GIT Solution (MoA Batch 9)",
    date: "Sep 2023 - Dec 2023",
    dateId: "Sep 2023 - Des 2023",
    points: [
      "Developed responsive full-stack web solutions using EJS, Bootstrap, Node.js, and Express.js, delivering high-quality web portals on schedule.",
    ],
    pointsId: [
      "Mengembangkan solusi web full-stack yang responsif menggunakan EJS, Bootstrap, Node.js, dan Express.js, menghasilkan portal web berkualitas tepat waktu.",
    ],
    techs: [
      "Node.js",
      "Express.js",
      "EJS",
      "Bootstrap",
      "REST API",
      "JavaScript",
    ],
  },
  {
    stage: "WORLD 1 - TUTORIAL DUNGEON CLEARED",
    stageId: "DUNIA 1 - TUTORIAL DUNGEON SELESAI",
    logo: "/company1.jpg",
    role: "Computer Technician Intern",
    roleId: "Teknisi Komputer Magang",
    company: "Digiparts",
    date: "Jan 2019 - Mar 2019",
    dateId: "Jan 2019 - Mar 2019",
    points: [
      "Diagnosed and repaired hardware and software faults across workstation and laptop systems.",
      "Configured operating systems, specialized software packages, and security protocols for user deployment.",
      "Executed system optimization routines, automated data backups, and user data recovery procedures.",
    ],
    pointsId: [
      "Mendiagnosis dan memperbaiki kerusakan hardware serta software pada workstation dan laptop.",
      "Mengonfigurasi sistem operasi, paket perangkat lunak khusus, dan protokol keamanan untuk pengguna.",
      "Menjalankan rutinitas optimasi sistem, backup data otomatis, dan prosedur pemulihan data pengguna.",
    ],
    techs: [
      "Hardware Diagnostics & Repair",
      "OS & Driver Configuration",
      "Security Protocols",
      "Data Recovery",
      "System Optimization",
    ],
  },
];

export default function WorkExperience() {
  const { isRetro } = useTheme();
  const { language } = useLanguage();

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
            {language === "id"
              ? isRetro
                ? "★ DUNGEON & BOSS SELESAI ★"
                : "Perjalanan Karier"
              : isRetro
              ? "★ COMPLETED DUNGEONS & BOSSES ★"
              : "Career Journey"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
            {language === "id"
              ? isRetro
                ? "LOG MISI"
                : "Pengalaman Kerja"
              : isRetro
              ? "QUEST LOG"
              : "Work Experience"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            {language === "id"
              ? isRetro
                ? "Riwayat misi kronologis membangun sistem rumah sakit enterprise, solusi web full-stack, dan diagnostik sistem."
                : "Rekam jejak profesional dalam menghadirkan sistem rumah sakit enterprise, solusi web full-stack, dan rekayasa sistem."
              : isRetro
              ? "Chronological mission history building enterprise hospital platforms, full-stack web solutions, and system diagnostics."
              : "Professional track record delivering enterprise hospital systems, full-stack web solutions, and system engineering."}
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              logo={exp.logo}
              role={language === "id" ? exp.roleId : exp.role}
              company={exp.company}
              date={language === "id" ? exp.dateId : exp.date}
              points={language === "id" ? exp.pointsId : exp.points}
              techs={exp.techs}
              stage={language === "id" ? exp.stageId : exp.stage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
