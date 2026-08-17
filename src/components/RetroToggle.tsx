"use client";

import { useTheme } from "./ThemeProvider";
import { Gamepad2, Volume2, VolumeX, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";


export default function RetroToggle() {
  const { isRetro, toggleRetro, soundEnabled, toggleSound } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-24 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />;
  }

  return (
    <div className="flex items-center gap-1.5">
      {/* 8-Bit Arcade Mode Switch */}
      <button
        onClick={toggleRetro}
        aria-label="Toggle 8-bit retro arcade mode"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 ${
          isRetro
            ? "bg-amber-400 text-black border-black shadow-[3px_3px_0px_#000000] dark:bg-pink-600 dark:text-white dark:border-cyan-400 dark:shadow-[3px_3px_0px_#00ffff]"
            : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
        }`}
        title={isRetro ? "Switch back to Modern Mode" : "Activate 8-Bit Retro Arcade Mode!"}
      >
        <Gamepad2 className={`w-4 h-4 ${isRetro ? "animate-bounce" : "text-red-500"}`} />
        <span className="hidden sm:inline">
          {isRetro ? "8-BIT ON" : "8-BIT"}
        </span>
        {isRetro && <Sparkles className="w-3 h-3 text-yellow-300 hidden sm:inline" />}
      </button>

      {/* Sound Toggle (Only visible or prominent when in Retro mode) */}
      {isRetro && (
        <button
          onClick={toggleSound}
          aria-label="Toggle retro 8-bit sound effects"
          className="p-1.5 rounded-lg bg-gray-900 text-amber-400 border-2 border-black dark:border-cyan-400 hover:scale-110 active:scale-95 transition-transform"
          title={soundEnabled ? "Mute 8-bit sound effects" : "Unmute 8-bit sound effects"}
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-gray-400" />
          )}
        </button>
      )}
    </div>
  );
}
