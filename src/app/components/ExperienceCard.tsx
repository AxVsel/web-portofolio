"use client";

import { Calendar, Building2, Trophy } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { playSelectSound } from "@/lib/retroAudio";

interface ExperienceCardProps {
  logo?: string;
  role: string;
  company: string;
  date: string;
  points: string[];
  techs: string[];
  stage?: string;
}

export default function ExperienceCard({
  logo,
  role,
  company,
  date,
  points,
  techs,
  stage,
}: ExperienceCardProps) {
  const { isRetro } = useTheme();

  return (
    <div
      onClick={() => isRetro && playSelectSound()}
      className={`w-full transition-all duration-300 ${
        isRetro
          ? "bg-white dark:bg-gray-900 border-4 border-black dark:border-cyan-400 shadow-[5px_5px_0px_#000000] dark:shadow-[5px_5px_0px_#ff0055] rounded-none p-4 sm:p-6 lg:p-7 hover:-translate-y-0.5"
          : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-7 shadow-sm hover:shadow-md"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
        {/* Header: Logo, Role, Company */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div
            className={`w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 overflow-hidden ${
              isRetro
                ? "bg-amber-100 dark:bg-gray-800 border-2 border-black dark:border-cyan-400 rounded-none shadow-[2px_2px_0px_#000]"
                : "rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            }`}
          >
            {logo ? (
              <img
                src={logo}
                alt={company}
                className="w-full h-full object-contain p-1 sm:p-1.5"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-500" />
            )}
          </div>
          <div>
            {isRetro && stage && (
              <span className="inline-block text-[10px] font-bold text-amber-600 dark:text-yellow-300 tracking-wider mb-1">
                ★ {stage} ★
              </span>
            )}
            <h3 className="text-gray-900 dark:text-gray-100 text-base sm:text-lg md:text-xl font-bold leading-snug">
              {role}
            </h3>
            <p className="text-red-600 dark:text-red-500 font-semibold text-xs sm:text-sm md:text-base mt-0.5">
              {company}
            </p>
          </div>
        </div>

        {/* Date badge */}
        <div
          className={`flex items-center gap-1.5 text-xs sm:text-sm font-medium shrink-0 self-start sm:self-auto ${
            isRetro
              ? "bg-amber-400 text-black dark:bg-pink-600 dark:text-white border-2 border-black dark:border-cyan-400 shadow-[2px_2px_0px_#000] px-2.5 py-1"
              : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full"
          }`}
        >
          {isRetro ? <Trophy className="w-3.5 h-3.5" /> : <Calendar className="w-3.5 h-3.5" />}
          {date}
        </div>
      </div>

      {/* Points */}
      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed pl-0.5 sm:pl-1">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 sm:gap-2.5">
            <span
              className={`mt-1.5 sm:mt-2 shrink-0 ${
                isRetro
                  ? "w-2 h-2 bg-amber-500 dark:bg-cyan-400 border border-black"
                  : "w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500"
              }`}
            ></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack Badges */}
      {techs && techs.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-gray-100 dark:border-gray-800">
          {techs.map((tech, i) => (
            <span
              key={i}
              className={`font-medium text-[11px] sm:text-xs ${
                isRetro
                  ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-yellow-300 border border-black dark:border-cyan-400/60 shadow-[1px_1px_0px_#000] px-2 py-0.5"
                  : "px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
