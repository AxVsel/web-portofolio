"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { playCoinSound } from "@/lib/retroAudio";

export default function Footer() {
  const { isRetro } = useTheme();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 py-6 sm:py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Author Info */}
        <div className="text-center sm:text-left">
          <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-200">
            {isRetro ? "★ DEV: MUH YAUMIL AKSAH HAMID ★" : "Muh Yaumil Aksah Hamid"}
          </p>
          <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {isRetro ? "HIGH SCORE: 999,990 PTS" : "Software Engineer & Hardware Engineer"}
          </p>
        </div>

        {/* Credits */}
        <p className="text-[11px] sm:text-xs text-center text-gray-500 dark:text-gray-400">
          {isRetro ? (
            <span className="text-amber-500 dark:text-cyan-400 font-bold">
              © {new Date().getFullYear()} THANKS FOR PLAYING!
            </span>
          ) : (
            <>
              © {new Date().getFullYear()} Designed &amp; built with{" "}
              <span className="text-red-500">❤️</span> by Yaumil Aksah.
            </>
          )}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/AxVsel"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => isRetro && playCoinSound()}
            className={`p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors ${
              isRetro
                ? "border-2 border-black dark:border-cyan-400 bg-amber-100 dark:bg-gray-800 shadow-[2px_2px_0px_#000] text-black"
                : "hover:bg-gray-100 dark:hover:bg-gray-850 rounded-xl"
            }`}
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/yaumil-aksah/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => isRetro && playCoinSound()}
            className={`p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors ${
              isRetro
                ? "border-2 border-black dark:border-cyan-400 bg-amber-100 dark:bg-gray-800 shadow-[2px_2px_0px_#000] text-black"
                : "hover:bg-gray-100 dark:hover:bg-gray-850 rounded-xl"
            }`}
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:yaumilaksah@gmail.com"
            onClick={() => isRetro && playCoinSound()}
            className={`p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors ${
              isRetro
                ? "border-2 border-black dark:border-cyan-400 bg-amber-100 dark:bg-gray-800 shadow-[2px_2px_0px_#000] text-black"
                : "hover:bg-gray-100 dark:hover:bg-gray-850 rounded-xl"
            }`}
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
