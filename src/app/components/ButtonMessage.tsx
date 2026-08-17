import { Download, Mail } from "lucide-react";

export default function ButtonMessage() {
  return (
    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
      {/* Contact / Email Button */}
      <a
        href="mailto:yaumilaksah@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-xl shadow-sm shadow-red-600/20 transition-all duration-200 text-xs sm:text-sm md:text-base w-full sm:w-auto hover:scale-102 active:scale-98"
      >
        <Mail className="w-4 h-4 shrink-0" />
        Let&apos;s Talk
      </a>

      {/* Download CV Button */}
      <a
        href="/yaumilCV.pdf"
        download="Muh_Yaumil_Aksah_Hamid_CV.pdf"
        className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-xl shadow-sm border border-gray-300 dark:border-gray-700 transition-all duration-200 text-xs sm:text-sm md:text-base w-full sm:w-auto hover:scale-102 active:scale-98"
      >
        <Download className="w-4 h-4 text-gray-700 dark:text-gray-300 shrink-0" />
        Download CV
      </a>
    </div>
  );
}
