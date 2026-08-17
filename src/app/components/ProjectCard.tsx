"use client";

import { ExternalLink, Github, Cpu, Brain, Layers, Play } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { playCoinSound, playSelectSound } from "@/lib/retroAudio";

export interface ProjectCardProps {
  image?: string;
  title: string;
  role?: string;
  category: "Web & Full Stack" | "AI & Computer Vision" | "IoT & Embedded";
  year: string;
  description: string;
  techStack: string[];
  repositoryType?: string;
  githubFrontend?: string;
  githubBackend?: string;
  githubOrg?: string;
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCard({
  image,
  title,
  role,
  category,
  year,
  description,
  techStack,
  repositoryType,
  githubFrontend,
  githubBackend,
  githubOrg,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  const { isRetro } = useTheme();

  const getCategoryBadge = () => {
    switch (category) {
      case "AI & Computer Vision":
        return {
          icon: Brain,
          className:
            "bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60",
        };
      case "IoT & Embedded":
        return {
          icon: Cpu,
          className:
            "bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60",
        };
      default:
        return {
          icon: Layers,
          className:
            "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60",
        };
    }
  };

  const badge = getCategoryBadge();
  const CategoryIcon = badge.icon;

  return (
    <div
      onClick={() => isRetro && playSelectSound()}
      className={`flex flex-col h-full overflow-hidden transition-all duration-300 ${
        isRetro
          ? "bg-white dark:bg-gray-900 border-4 border-black dark:border-cyan-400 shadow-[5px_5px_0px_#000000] dark:shadow-[5px_5px_0px_#ff0055] rounded-none hover:-translate-y-1 group"
          : "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg dark:hover:shadow-red-950/20 hover:-translate-y-1 group"
      }`}
    >
      {/* Top Banner / Image Area */}
      <div
        className={`relative h-40 sm:h-44 md:h-48 flex items-center justify-center overflow-hidden border-b ${
          isRetro
            ? "bg-gray-950 border-b-4 border-black dark:border-cyan-400"
            : "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-850 border-gray-100 dark:border-gray-800"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              isRetro ? "contrast-115" : ""
            }`}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-4 text-center">
            <CategoryIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-2 text-red-500/70 dark:text-red-400/80" />
            <span className="font-semibold text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {category}
            </span>
          </div>
        )}
        {/* Year Pill / Cartridge Header */}
        <span
          className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 ${
            isRetro
              ? "bg-amber-400 text-black border border-black shadow-[2px_2px_0px_#000] rounded-none font-bold"
              : "bg-black/75 dark:bg-gray-950/85 backdrop-blur-md text-white rounded-full border border-white/10"
          }`}
        >
          {year}
        </span>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
        {/* Category & Role */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span
            className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 ${
              isRetro
                ? "bg-amber-100 dark:bg-gray-800 text-black dark:text-cyan-300 border border-black dark:border-cyan-400 rounded-none shadow-[1px_1px_0px_#000]"
                : `rounded-full border ${badge.className}`
            }`}
          >
            <CategoryIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            {category}
          </span>
          {role && (
            <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium truncate max-w-[50%]">
              {role}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className={`text-[10px] sm:text-xs font-medium ${
                isRetro
                  ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-yellow-300 border border-black dark:border-cyan-500/50 shadow-[1px_1px_0px_#000] px-1.5 py-0.5 rounded-none"
                  : "px-1.5 sm:px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links / Footer Actions */}
        <div className="pt-3.5 sm:pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs">
          {/* GitHub Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {githubFrontend && (
              <a
                href={githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => isRetro && playCoinSound()}
                className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium hover:underline text-[11px] sm:text-xs"
              >
                <Github className="w-3.5 h-3.5" /> Frontend
              </a>
            )}
            {githubBackend && (
              <a
                href={githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => isRetro && playCoinSound()}
                className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium hover:underline text-[11px] sm:text-xs"
              >
                <Github className="w-3.5 h-3.5" /> Backend
              </a>
            )}
            {githubOrg && (
              <a
                href={githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => isRetro && playCoinSound()}
                className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium hover:underline text-[11px] sm:text-xs"
              >
                <Github className="w-3.5 h-3.5" /> GitHub Org
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => isRetro && playCoinSound()}
                className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium hover:underline text-[11px] sm:text-xs"
              >
                <Github className="w-3.5 h-3.5" /> Source Code
              </a>
            )}
            {!githubFrontend && !githubBackend && !githubOrg && !githubLink && (
              <span className="text-gray-400 dark:text-gray-500 italic text-[11px] sm:text-xs">
                {repositoryType || "Repository"}
              </span>
            )}
          </div>

          {/* Live Demo */}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => isRetro && playCoinSound()}
              className={`inline-flex items-center justify-center gap-1 font-semibold px-3 py-1.5 transition-colors text-xs ${
                isRetro
                  ? "bg-amber-400 text-black border-2 border-black shadow-[2px_2px_0px_#000] dark:bg-pink-600 dark:text-white dark:border-cyan-400 rounded-none active:translate-x-0.5 active:translate-y-0.5"
                  : "bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm"
              }`}
            >
              {isRetro ? "INSERT COIN / PLAY" : "Live Demo"}
              {isRetro ? <Play className="w-3 h-3 fill-current" /> : <ExternalLink className="w-3 h-3" />}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
