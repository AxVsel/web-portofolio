"use client";

import { GraduationCap, Award, Calendar, Building } from "lucide-react";

interface EducationItem {
  type: "Formal Education" | "Non-Formal Education";
  institution: string;
  degree: string;
  period: string;
  logo?: string;
  points: string[];
  achievements?: string[];
  skills?: string[];
}

const educations: EducationItem[] = [
  {
    type: "Formal Education",
    institution: "Amikom University Yogyakarta",
    degree: "Bachelor of Informatics",
    period: "Sep 2020 - Aug 2024",
    logo: "/campuslogo.jpg",
    points: [
      "Studied both software and hardware aspects of computing, including programming, networking, and embedded systems.",
      "Completed academic projects related to system development and integration: Traffic Light Simulation (IoT, AVR + Proteus), Smart Door (IoT, ESP32-CAM + Blynk facial authentication), Face Mask Detection (AI, YOLOv5 + PyTorch, >80% accuracy), and SIBI Sign Language Detection (Thesis, YOLOv5, 1,200-image dataset).",
      "Developed strong problem-solving, teamwork, and research skills through collaborative coursework and assignments.",
    ],
    skills: ["AI / Computer Vision", "IoT & Embedded", "YOLOv5", "PyTorch", "Python", "Networking"],
  },
  {
    type: "Formal Education",
    institution: "SMKN 1 Banggai",
    degree: "Vocational High School, Software Engineering",
    period: "Sep 2017 - Apr 2020",
    logo: "/vocational.png",
    points: [
      "Specialized in web development and software using JavaScript, HTML, CSS, and Visual Basic.",
      "Completed an internship as a computer and laptop service technician.",
    ],
    achievements: [
      "🏆 Achieved 2nd place in the LKS (Lomba Kompetensi Siswa) competition, IT Software Solution for Business category.",
    ],
    skills: ["Web Development", "JavaScript", "HTML/CSS", "Visual Basic", "Hardware Servicing"],
  },
  {
    type: "Non-Formal Education",
    institution: "PT DumbWays Indonesia Technology",
    degree: "Full Stack Developer Program",
    period: "Apr 2025 - Oct 2025",
    logo: "/dumbways.png",
    points: [
      "Learned to build full-stack applications from scratch using React.js, TypeScript, Prisma, PostgreSQL, and other modern technologies.",
      "Developed and deployed real-world projects following best practices in frontend and backend development.",
      "Gained hands-on experience with API development, authentication, database management, and deployment.",
    ],
    skills: ["React.js", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "REST API", "Full Stack"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-18 md:py-20 bg-gray-50/70 dark:bg-gray-900/40 border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-red-600 dark:text-red-500 font-semibold tracking-wider uppercase text-xs sm:text-sm flex items-center justify-center gap-1.5">
            <GraduationCap className="w-4 h-4" /> Academic &amp; Certifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
            Education &amp; Training
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            Formal degrees, specialized software engineering vocational foundation, and intensive full-stack bootcamps.
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-4 sm:space-y-6">
          {educations.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-7 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
                {/* Left: Logo & Degree */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0 overflow-hidden">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="w-full h-full object-contain p-1"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <Building className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-500" />
                    )}
                  </div>
                  <div>
                    <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/60 mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-gray-900 dark:text-gray-100 text-base sm:text-lg md:text-xl font-bold leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm md:text-base mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                </div>

                {/* Right: Period */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full w-fit shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                  {item.period}
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed pl-0.5 sm:pl-1">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 sm:gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 mt-1.5 sm:mt-2 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Achievements banner if any */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-3.5 sm:mt-4 p-2.5 sm:p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl">
                  {item.achievements.map((ach, aIdx) => (
                    <p key={aIdx} className="text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      {ach}
                    </p>
                  ))}
                </div>
              )}

              {/* Skills Tags */}
              {item.skills && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 pt-3.5 sm:pt-4 border-t border-gray-100 dark:border-gray-800">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-[11px] sm:text-xs rounded-md border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
