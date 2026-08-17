"use client";

import { MapPin, Sparkles, Heart, Zap, ShieldAlert, Gamepad2 } from "lucide-react";
import ButtonMessage from "../components/ButtonMessage";
import { useTheme } from "@/components/ThemeProvider";
import { playCoinSound } from "@/lib/retroAudio";

export default function Intro() {
  const { isRetro, openGame } = useTheme();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Profile Image / 8-Bit Frame */}
        <div className="shrink-0">
          <div
            className={`w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden transition-all duration-300 ${
              isRetro
                ? "border-4 border-black dark:border-cyan-400 shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#ff0055] rounded-none rotate-1 hover:rotate-0"
                : "rounded-2xl sm:rounded-3xl shadow-xl shadow-red-500/20 dark:shadow-red-950/40 border-2 border-red-500/30 dark:border-red-500/40 hover:shadow-2xl hover:scale-105"
            }`}
          >
            <img
              src="/me.jpg"
              alt="Muh Yaumil Aksah Hamid"
              className={`w-full h-full object-cover ${isRetro ? "contrast-125 saturate-150" : ""}`}
            />
          </div>
        </div>

        {/* Info Column */}
        <div className="flex-1 max-w-2xl text-center md:text-left space-y-4 sm:space-y-5">
          {/* Status Badge & Name */}
          <div>
            {isRetro ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-black border-2 border-black shadow-[3px_3px_0px_#000000] text-xs font-bold mb-3 dark:bg-pink-600 dark:text-white dark:border-cyan-400">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>★ PLAYER 1 READY ★</span>
              </div>
            ) : (
              <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold rounded-full mb-2 border border-red-200 dark:border-red-800/60">
                Available for Opportunities
              </span>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight">
              Hi, I&apos;m <span className="text-red-600 dark:text-red-500">{isRetro ? "YAUMIL AKSAH" : "Muh Yaumil Aksah Hamid"}</span> 👋
            </h1>
          </div>

          {/* Role */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-300">
            {isRetro ? (
              <span className="text-amber-500 dark:text-cyan-400">
                [LVL 25] SOFTWARE &amp; HARDWARE MAGE
              </span>
            ) : (
              <>Software Engineer <span className="text-red-600 dark:text-red-500">|</span> Hardware Engineer</>
            )}
          </p>

          {/* RPG HUD Player Stats (Retro Mode Only) */}
          {isRetro && (
            <div className="p-3 sm:p-4 bg-gray-900 text-green-400 border-2 border-black dark:border-cyan-400 shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ff0055] space-y-2 text-xs font-mono text-left">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1 text-red-400">
                  <Heart className="w-3.5 h-3.5 fill-red-500 animate-pulse" /> HP:
                </span>
                <span className="text-red-400">100/100</span>
                <div className="flex-1 max-w-[140px] h-2.5 bg-gray-800 border border-gray-700 overflow-hidden">
                  <div className="h-full bg-red-500 w-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1 text-cyan-400">
                  <Zap className="w-3.5 h-3.5 fill-cyan-400" /> MP:
                </span>
                <span className="text-cyan-400">99/99</span>
                <div className="flex-1 max-w-[140px] h-2.5 bg-gray-800 border border-gray-700 overflow-hidden">
                  <div className="h-full bg-cyan-400 w-[99%]"></div>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap justify-between text-[11px] text-yellow-400 border-t border-gray-800">
                <span>⚔️ ATK: 99 (Full-Stack)</span>
                <span>🛡️ DEF: 95 (Clean Code)</span>
                <span>⚡ SPEED: 90 (Turbo)</span>
              </div>
            </div>
          )}

          {/* Summary */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify md:text-left">
            Software Engineer and Hardware Engineer with hands-on experience building end-to-end web applications and IoT systems. Proficient in modern frontend and backend technologies, with a strong commitment to creating scalable solutions, optimizing hardware-software integration, and continuously adopting new technologies to deliver impactful products.
          </p>

          {/* Location */}
          <p className="flex items-center justify-center md:justify-start text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-red-600 dark:text-red-500 shrink-0" />
            {isRetro ? "WORLD 1: South Tangerang, Banten, Indonesia" : "South Tangerang, Banten, Indonesia"}
          </p>

          {/* Social Icons & Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-1">
            <div className="flex gap-3 items-center">
              <a
                href="https://github.com/AxVsel"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCoinSound()}
                className="hover:scale-110 transition-transform p-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                title="GitHub"
              >
                <img
                  src="/githubAnimated.webp"
                  alt="GitHub"
                  className="h-9 w-9 sm:h-10 sm:w-10"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/yaumil-aksah/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCoinSound()}
                className="hover:scale-110 transition-transform p-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                title="LinkedIn"
              >
                <img
                  src="/linkedidAnimated.webp"
                  alt="LinkedIn"
                  className="h-9 w-9 sm:h-10 sm:w-10"
                />
              </a>
              <a
                href="mailto:yaumilaksah@gmail.com"
                onClick={() => playCoinSound()}
                className="hover:scale-110 transition-transform p-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                title="Email"
              >
                <img
                  src="/emailAnimated.webp"
                  alt="Email"
                  className="h-9 w-9 sm:h-10 sm:w-10"
                />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 items-center w-full sm:w-auto">
              <ButtonMessage />
            </div>
          </div>

          {/* Playable 8-bit Mini Game CTA (Retro Mode) */}
          {isRetro && (
            <div className="pt-2 flex justify-center md:justify-start">
              <button
                onClick={openGame}
                className="flex items-center gap-2.5 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-black font-extrabold text-xs sm:text-sm border-3 border-black shadow-[4px_4px_0px_#000000] dark:border-cyan-400 dark:shadow-[4px_4px_0px_#00ffff] active:translate-x-1 active:translate-y-1 transition-transform animate-pulse"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>🕹️ PLAY MINI GAME (BUG HUNTER)</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
