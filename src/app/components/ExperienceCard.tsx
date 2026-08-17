"use client";

import { Calendar, Building2 } from "lucide-react";

interface ExperienceCardProps {
  logo?: string;
  role: string;
  company: string;
  date: string;
  points: string[];
  techs: string[];
}

export default function ExperienceCard({
  logo,
  role,
  company,
  date,
  points,
  techs,
}: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 w-full rounded-2xl p-4 sm:p-6 lg:p-7 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
        {/* Header: Logo, Role, Company */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0 overflow-hidden">
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
            <h3 className="text-gray-900 dark:text-gray-100 text-base sm:text-lg md:text-xl font-bold leading-snug">
              {role}
            </h3>
            <p className="text-red-600 dark:text-red-500 font-semibold text-xs sm:text-sm md:text-base mt-0.5">
              {company}
            </p>
          </div>
        </div>

        {/* Date badge */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full w-fit shrink-0 self-start sm:self-auto">
          <Calendar className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
          {date}
        </div>
      </div>

      {/* Points */}
      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed pl-0.5 sm:pl-1">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 sm:gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 mt-1.5 sm:mt-2 shrink-0"></span>
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
              className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-[11px] sm:text-xs rounded-md border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
