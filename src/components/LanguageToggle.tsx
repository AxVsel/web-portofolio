"use client";

import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import { Languages, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { playCoinSound } from "@/lib/retroAudio";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { isRetro } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />;
  }

  const handleToggle = () => {
    if (isRetro) {
      playCoinSound();
    }
    toggleLanguage();
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle language between English and Indonesian"
      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 ${
        isRetro
          ? language === "id"
            ? "bg-red-500 text-white border-2 border-black dark:border-cyan-400 shadow-[2px_2px_0px_#000000]"
            : "bg-blue-600 text-white border-2 border-black dark:border-cyan-400 shadow-[2px_2px_0px_#000000]"
          : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
      }`}
      title={
        language === "en"
          ? "Switch language to Bahasa Indonesia"
          : "Ganti bahasa ke English"
      }
    >
      {isRetro ? (
        <span className="text-xs">🌐</span>
      ) : (
        <Languages className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
      )}
      <span className="tracking-wide">
        {language === "en" ? "EN" : "ID"}
      </span>
      <span className="text-[10px] text-gray-500 dark:text-gray-400 font-normal">
        {language === "en" ? "🇬🇧" : "🇮🇩"}
      </span>
    </button>
  );
}
