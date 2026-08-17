"use client";

import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { playCoinSound } from "@/lib/retroAudio";

export default function LetsBuild() {
  const { isRetro } = useTheme();

  return (
    <section id="contact" className="py-14 sm:py-18 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900/60 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-red-600 dark:text-red-500 font-semibold tracking-wider uppercase text-xs sm:text-sm">
          {isRetro ? "★ INSERT COIN TO PLAY ★" : "Get in Touch"}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 font-extrabold mt-2 mb-3 sm:mb-4">
          {isRetro ? "PRESS START TO CO-OP" : "Let's build something impactful together"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
          {isRetro
            ? "Looking for a Party Member for your next Software Quest or IoT Raid? Send an invite transmission below!"
            : "Open for software engineering roles, IoT hardware collaborations, full-stack development, or technical discussions. Feel free to reach out directly!"}
        </p>

        {/* Contact Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 text-left">
          {/* Email */}
          <a
            href="mailto:yaumilaksah@gmail.com"
            onClick={() => isRetro && playCoinSound()}
            className={`flex items-center gap-3 p-3.5 sm:p-4 transition-all group ${
              isRetro
                ? "bg-white dark:bg-gray-900 border-3 border-black dark:border-cyan-400 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#ff0055] hover:scale-102"
                : "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-red-300 dark:hover:border-red-800/80"
            }`}
          >
            <div
              className={`p-2.5 sm:p-3 shrink-0 ${
                isRetro
                  ? "bg-amber-400 text-black border border-black dark:bg-pink-600 dark:text-white"
                  : "bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 rounded-xl group-hover:scale-110 transition-transform"
              }`}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="overflow-hidden min-w-0">
              <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">Email Transmission</p>
              <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 truncate">
                yaumilaksah@gmail.com
              </p>
            </div>
          </a>

          {/* Phone / WhatsApp */}
          <a
            href="https://wa.me/6281355130934"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => isRetro && playCoinSound()}
            className={`flex items-center gap-3 p-3.5 sm:p-4 transition-all group ${
              isRetro
                ? "bg-white dark:bg-gray-900 border-3 border-black dark:border-cyan-400 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#ff0055] hover:scale-102"
                : "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-green-300 dark:hover:border-green-800/80"
            }`}
          >
            <div
              className={`p-2.5 sm:p-3 shrink-0 ${
                isRetro
                  ? "bg-green-400 text-black border border-black dark:bg-green-600 dark:text-white"
                  : "bg-green-50 dark:bg-green-950/60 text-green-600 dark:text-green-400 rounded-xl group-hover:scale-110 transition-transform"
              }`}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="overflow-hidden min-w-0">
              <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">WhatsApp Comm</p>
              <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 truncate">
                (+62) 813-5513-0934
              </p>
            </div>
          </a>

          {/* Location */}
          <div
            className={`flex items-center gap-3 p-3.5 sm:p-4 sm:col-span-2 lg:col-span-1 ${
              isRetro
                ? "bg-white dark:bg-gray-900 border-3 border-black dark:border-cyan-400 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#ff0055]"
                : "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
            }`}
          >
            <div
              className={`p-2.5 sm:p-3 shrink-0 ${
                isRetro
                  ? "bg-cyan-400 text-black border border-black dark:bg-cyan-600 dark:text-white"
                  : "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl"
              }`}
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="overflow-hidden min-w-0">
              <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">Base Territory</p>
              <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 truncate">
                South Tangerang, Banten
              </p>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="mailto:yaumilaksah@gmail.com"
            onClick={() => isRetro && playCoinSound()}
            className={`inline-flex items-center justify-center gap-2 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 transition-all text-xs sm:text-sm md:text-base w-full sm:w-auto ${
              isRetro
                ? "bg-amber-400 text-black border-3 border-black shadow-[4px_4px_0px_#000] dark:bg-pink-600 dark:text-white dark:border-cyan-400 active:translate-x-1 active:translate-y-1 font-bold"
                : "bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md shadow-red-600/25 hover:scale-102 active:scale-98"
            }`}
          >
            <Send className="w-4 h-4" /> {isRetro ? "▶ SEND TRANSMISSION" : "Send an Email"}
          </a>
          <a
            href="https://www.linkedin.com/in/yaumil-aksah/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => isRetro && playCoinSound()}
            className={`inline-flex items-center justify-center gap-2 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 transition-all text-xs sm:text-sm md:text-base w-full sm:w-auto ${
              isRetro
                ? "bg-white dark:bg-gray-800 text-black dark:text-white border-3 border-black dark:border-cyan-400 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#ff0055] active:translate-x-1 active:translate-y-1 font-bold"
                : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm hover:scale-102 active:scale-98"
            }`}
          >
            {isRetro ? "GUILD LINKEDIN" : "Connect on LinkedIn"}
          </a>
        </div>
      </div>
    </section>
  );
}
