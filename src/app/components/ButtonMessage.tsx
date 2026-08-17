"use client";

import { Download, Mail, Sword, FileText } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { playCoinSound } from "@/lib/retroAudio";

export default function ButtonMessage() {
  const { isRetro } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
      {/* Contact / Email Button */}
      <a
        href="mailto:yaumilaksah@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => isRetro && playCoinSound()}
        className={`flex items-center justify-center gap-2 font-medium py-2 sm:py-2.5 px-4 sm:px-5 transition-all duration-200 text-xs sm:text-sm md:text-base w-full sm:w-auto ${
          isRetro
            ? "bg-amber-400 text-black border-2 border-black shadow-[3px_3px_0px_#000] dark:bg-pink-600 dark:text-white dark:border-cyan-400 font-bold active:translate-x-0.5 active:translate-y-0.5"
            : "bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-sm shadow-red-600/20 hover:scale-102 active:scale-98"
        }`}
      >
        {isRetro ? <Sword className="w-4 h-4 shrink-0" /> : <Mail className="w-4 h-4 shrink-0" />}
        {isRetro ? "START QUEST" : "Let's Talk"}
      </a>

      {/* Download CV Button */}
      <a
        href="/yaumilCV.pdf"
        download="Muh_Yaumil_Aksah_Hamid_CV.pdf"
        onClick={() => isRetro && playCoinSound()}
        className={`flex items-center justify-center gap-2 font-medium py-2 sm:py-2.5 px-4 sm:px-5 transition-all duration-200 text-xs sm:text-sm md:text-base w-full sm:w-auto ${
          isRetro
            ? "bg-white dark:bg-gray-800 text-black dark:text-yellow-300 border-2 border-black dark:border-cyan-400 shadow-[3px_3px_0px_#000] font-bold active:translate-x-0.5 active:translate-y-0.5"
            : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl shadow-sm border border-gray-300 dark:border-gray-700 hover:scale-102 active:scale-98"
        }`}
      >
        {isRetro ? (
          <FileText className="w-4 h-4 shrink-0 text-amber-500" />
        ) : (
          <Download className="w-4 h-4 text-gray-700 dark:text-gray-300 shrink-0" />
        )}
        {isRetro ? "ITEM SCROLL (CV)" : "Download CV"}
      </a>
    </div>
  );
}
