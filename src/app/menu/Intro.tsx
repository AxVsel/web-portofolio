import { MapPin } from "lucide-react";
import ButtonMessage from "../components/ButtonMessage";

export default function Intro() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="shrink-0">
          <div
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden
    shadow-xl shadow-red-500/20 dark:shadow-red-950/40 border-2 border-red-500/30 dark:border-red-500/40
    hover:shadow-2xl hover:shadow-red-500/40 transition duration-300 hover:scale-105"
          >
            <img
              src="/me.jpg"
              alt="Muh Yaumil Aksah Hamid"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info Column */}
        <div className="flex-1 max-w-2xl text-center md:text-left space-y-4 sm:space-y-5">
          {/* Status Badge & Name */}
          <div>
            <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold rounded-full mb-2 border border-red-200 dark:border-red-800/60">
              Available for Opportunities
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight">
              Hi, I&apos;m <span className="text-red-600 dark:text-red-500">Muh Yaumil Aksah Hamid</span> 👋
            </h1>
          </div>

          {/* Role */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-300">
            Software Engineer <span className="text-red-600 dark:text-red-500">|</span> Hardware Engineer
          </p>

          {/* Summary */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify md:text-left">
            Software Engineer and Hardware Engineer with hands-on experience building end-to-end web applications and IoT systems. Proficient in modern frontend and backend technologies, with a strong commitment to creating scalable solutions, optimizing hardware-software integration, and continuously adopting new technologies to deliver impactful products.
          </p>

          {/* Location */}
          <p className="flex items-center justify-center md:justify-start text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-red-600 dark:text-red-500 shrink-0" />
            South Tangerang, Banten, Indonesia
          </p>

          {/* Social Icons & Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-1">
            <div className="flex gap-3 items-center">
              <a
                href="https://github.com/AxVsel"
                target="_blank"
                rel="noopener noreferrer"
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

            <div className="w-full sm:w-auto">
              <ButtonMessage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
