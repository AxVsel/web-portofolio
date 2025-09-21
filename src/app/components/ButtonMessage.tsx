import { Download, Mail } from "lucide-react";

export default function ButtonMessage() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      {/* WhatsApp / Email Button */}
      <a
        href="mailto:assperacus77@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-all duration-200 text-sm md:text-base lg:text-lg w-full sm:w-auto"
      >
        <Mail className="w-4 h-4 md:w-5 md:h-5" />
        Let&apos;s Talk
      </a>

      {/* Download CV Button */}
      <a
        href="/yaumilCV.pdf"
        download
        className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md shadow-sm border transition-all duration-200 text-sm md:text-base lg:text-lg w-full sm:w-auto"
      >
        <Download className="w-4 h-4 md:w-5 md:h-5" />
        Download CV
      </a>
    </div>
  );
}
