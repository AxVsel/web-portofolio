"use client";

import { useState } from "react";
import ButtonMessage from "../components/ButtonMessage";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#TechStack", label: "Tech Stack" },
    { href: "#experience", label: "Experience" },
    { href: "#MyProject", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 fixed top-0 inset-x-0 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/yaumillogo.png"
            alt="Muh Yaumil Aksah Hamid Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-bold text-gray-900 dark:text-gray-100 text-base sm:text-lg tracking-tight">
            Yaumil Aksah
          </span>
        </a>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden md:flex items-center gap-3.5 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors font-medium text-sm lg:text-base py-1"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <div className="pl-1 lg:pl-2">
            <ThemeToggle />
          </div>

          <ButtonMessage />
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-red-600 dark:text-red-500" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300">
          <nav className="flex flex-col p-4 gap-1.5 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium px-3.5 py-2.5 rounded-xl transition-all text-base"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-gray-100 dark:border-gray-800">
              <ButtonMessage />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
