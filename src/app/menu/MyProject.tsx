"use client";

import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "@/app/components/ProjectCard";
import { FolderGit2, Gamepad } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { playSelectSound, playCoinSound } from "@/lib/retroAudio";

const allProjects: ProjectCardProps[] = [
  {
    image: "/experienceUnisia.png",
    title: "Hospital Information System (SIMRS)",
    role: "Software Engineer",
    roleId: "Software Engineer",
    category: "Web & Full Stack",
    year: "2025 - Present",
    description:
      "Engineered hospital management modules for Pharmacy, Billing, Cashier, Registration, and E-Prescription operations. Built custom frontend components and GraphQL API services leveraging Nuxt 3, Vue 3, TypeScript, NestJS, and Pinia.",
    descriptionId:
      "Mengembangkan modul manajemen rumah sakit untuk Farmasi, Billing, Kasir, Registrasi, dan alur kerja E-Resep. Membangun komponen frontend kustom dan layanan GraphQL API dengan Nuxt 3, Vue 3, TypeScript, NestJS, dan Pinia.",
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
    repositoryTypeId: "Sistem Enterprise (PT Unisia Tera Medika)",
  },
  {
    image: "/ShareNote.png",
    title: "ShareNote",
    role: "Full Stack Developer",
    roleId: "Full Stack Developer",
    category: "Web & Full Stack",
    year: "2025",
    description:
      "Developed a web application enabling real-time collaborative note editing and access control for synchronized teamwork.",
    descriptionId:
      "Mengembangkan aplikasi web untuk berbagi catatan yang dapat dibaca dan diedit secara kolaboratif oleh pengguna terotorisasi untuk sinkronisasi kerja tim.",
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
    roleId: "Full Stack Developer",
    category: "Web & Full Stack",
    year: "2025",
    description:
      "Built a responsive social platform featuring post creation, nested commenting, user follows, and custom user profiles.",
    descriptionId:
      "Membangun platform sosial yang responsif dengan fitur pembuatan postingan, komentar bertingkat, follow pengguna, dan profil kustom.",
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
    roleId: "Full Stack Developer (Proyek Tim)",
    category: "Web & Full Stack",
    year: "2025",
    description:
      "Designed and launched an online reservation portal featuring live court availability tracking and instant booking features.",
    descriptionId:
      "Merancang dan meluncurkan portal reservasi lapangan online dengan pelacakan ketersediaan jadwal secara real-time dan konfirmasi instan.",
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
    roleId: "Full Stack Developer",
    category: "Web & Full Stack",
    year: "2025",
    description:
      "Created an interactive AI-powered conversational web application providing real-time recommendations and movie analysis.",
    descriptionId:
      "Membuat aplikasi web percakapan interaktif bertenaga AI yang menyajikan rekomendasi film real-time dan analisis alur cerita mendalam.",
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
    role: "AI Developer",
    roleId: "Pengembang AI",
    category: "AI & Computer Vision",
    year: "2024",
    description:
      "Developed a computer vision application to recognize the Indonesian Sign Language (SIBI) alphabet using YOLOv5, trained on a custom dataset for real-time hand gesture classification with GPU-accelerated model training, evaluation, and inference.",
    descriptionId:
      "Mengembangkan aplikasi computer vision pengenalan alfabet Bahasa Isyarat Indonesia (SIBI) menggunakan YOLOv5 pada dataset kustom, dengan akselerasi GPU untuk pelatihan, evaluasi, dan inferensi real-time.",
    techStack: [
      "Python",
      "PyTorch",
      "YOLOv5",
      "OpenCV",
      "CUDA",
    ],
    repositoryType: "Academic Thesis (Amikom University)",
    repositoryTypeId: "Skripsi Akademik (Universitas Amikom)",
  },
  {
    image: "/smartdoor.png",
    title: "Smart Door Authentication System",
    role: "IoT Developer",
    roleId: "Pengembang IoT",
    category: "IoT & Embedded",
    year: "2022",
    description:
      "Developed an IoT-based smart door lock system using ESP32-CAM for facial recognition authentication to control door access, integrated with the Blynk platform to send real-time notifications.",
    descriptionId:
      "Mengembangkan sistem kunci pintu pintar berbasis IoT menggunakan ESP32-CAM untuk autentikasi pengenalan wajah dalam kontrol akses, terintegrasi dengan platform Blynk untuk notifikasi real-time.",
    techStack: [
      "C",
      "C++",
      "ESP32-CAM",
      "Blynk IoT",
      "Facial Recognition Algorithm",
    ],
    repositoryType: "IoT Hardware Project",
    repositoryTypeId: "Proyek Hardware IoT",
  },
  {
    image: "/facedetection.png",
    title: "Face Mask Detection System",
    role: "Computer Vision Developer",
    roleId: "Pengembang Computer Vision",
    category: "AI & Computer Vision",
    year: "2022",
    description:
      "Developed an AI-powered face mask detection system achieving over 80% classification accuracy using YOLOv5 and PyTorch for real-time compliance detection.",
    descriptionId:
      "Mengembangkan sistem deteksi kepatuhan masker wajah bertenaga AI dengan akurasi lebih dari 80% menggunakan YOLOv5 dan PyTorch untuk deteksi real-time.",
    techStack: ["Python", "YOLOv5", "PyTorch", "Computer Vision"],
    repositoryType: "AI / Computer Vision Project",
    repositoryTypeId: "Proyek AI / Computer Vision",
  },
  {
    title: "Goods Sales Application",
    role: "Desktop Developer",
    roleId: "Pengembang Desktop",
    category: "Desktop & Other",
    year: "2019",
    description:
      "Built a desktop sales application for the LKS (Student Competency Competition), winning 2nd place in the competition.",
    descriptionId:
      "Membangun aplikasi penjualan barang desktop untuk kompetisi LKS (Lomba Kompetensi Siswa), meraih juara 2 dalam kompetisi.",
    techStack: [
      "Visual Basic 6.0",
      "SAP Crystal Report",
      "Microsoft SQL Server 2012 Service Pack 3",
    ],
    repositoryType: "LKS Competition Award (2nd Place)",
    repositoryTypeId: "Juara 2 Kompetisi LKS",
  },
];

const categoryList = [
  { id: "All", en: "All", idn: "Semua" },
  { id: "Web & Full Stack", en: "Web & Full Stack", idn: "Web & Full Stack" },
  { id: "AI & Computer Vision", en: "AI & Computer Vision", idn: "AI & Computer Vision" },
  { id: "IoT & Embedded", en: "IoT & Embedded", idn: "IoT & Embedded" },
  { id: "Desktop & Other", en: "Desktop & Other", idn: "Desktop & Lainnya" },
] as const;

export default function MyProject() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { isRetro, openGame } = useTheme();
  const { language } = useLanguage();

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
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
            {language === "id"
              ? isRetro
                ? "★ STAGE & TROFI ARCADE ★"
                : "Portofolio Terpilih"
              : isRetro
              ? "★ ARCADE STAGES & TROPHIES ★"
              : "Portfolio Showcase"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
            {language === "id"
              ? isRetro
                ? "MISI ARCADE"
                : "Proyek Unggulan"
              : isRetro
              ? "ARCADE MISSIONS"
              : "Featured Projects"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            {language === "id"
              ? isRetro
                ? "Pilih kartrid misi arcade untuk melihat sistem perangkat lunak full-stack, AI computer vision, dan gadget embedded IoT."
                : "Showcase sistem enterprise, aplikasi web modern, model computer vision, dan sistem IoT embedded."
              : isRetro
              ? "Select an arcade cartridge mission to view full stack software systems, computer vision AI, and embedded IoT gadgets."
              : "A showcase of enterprise systems, web applications, computer vision models, and embedded IoT systems."}
          </p>

          {isRetro && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={openGame}
                className="flex items-center gap-2 px-5 py-2 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm border-3 border-black shadow-[4px_4px_0px_#000000] dark:bg-pink-600 dark:text-white dark:border-cyan-400 dark:shadow-[4px_4px_0px_#00ffff] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
              >
                <Gamepad className="w-4 h-4" />
                <span>
                  {language === "id"
                    ? "🕹️ MASUKKAN KOIN - MAIN BUG HUNTER 1989"
                    : "🕹️ INSERT COIN - PLAY BUG HUNTER 1989"}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-12">
          {categoryList.map((cat) => {
            const label = language === "id" ? cat.idn : cat.en;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isRetro
                    ? selectedCategory === cat.id
                      ? "bg-amber-400 text-black border-2 border-black shadow-[3px_3px_0px_#000] dark:bg-pink-600 dark:text-white dark:border-cyan-400 font-bold"
                      : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-2 border-black dark:border-gray-700 shadow-[2px_2px_0px_#000]"
                    : selectedCategory === cat.id
                    ? "bg-red-600 text-white shadow-md shadow-red-600/20 rounded-full"
                    : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-full"
                }`}
              >
                {isRetro && selectedCategory === cat.id ? `▶ ${label}` : label}
              </button>
            );
          })}
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
