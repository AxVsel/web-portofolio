export default function Footer() {
  return (
    <footer className="border-t border-black text-gray-600 py-6 flex flex-col items-center gap-2">
      <p className="text-sm text-center">
        © 2025 Designed and coded with <span className="text-red-500">❤️</span>{" "}
        by Yaumil Aksah
      </p>
      <div className="flex gap-4 mt-1">
        {/* GitHub */}
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <img src="/github.svg" alt="Email" className="h-5 w-5" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <img src="/link.svg" alt="Email" className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
