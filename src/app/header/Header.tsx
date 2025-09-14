"use client";
import { useState } from "react";
import ButtonMessage from "../components/ButtonMessage";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-black fixed top-0 inset-x-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-18 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/yaumillogo.png"
            alt="Logo"
            className="w-10 h-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#TechStack"
            className="text-gray-600 hover:text-red-600 transition font-semibold text-lg"
          >
            TechStack
          </a>
          <a
            href="#experience"
            className="text-gray-600 hover:text-red-600 transition font-semibold text-lg"
          >
            Experience
          </a>
          <a
            href="#MyProject"
            className="text-gray-600 hover:text-red-600 transition font-semibold text-lg"
          >
            MyProject
          </a>
          <ButtonMessage />
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="w-6 h-1 bg-gray-600 mb-1"></div>
            <div className="w-6 h-1 bg-gray-600 mb-1"></div>
            <div className="w-6 h-1 bg-gray-600"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-black shadow-md">
          <nav className="flex flex-col items-start p-4 gap-4">
            <a
              href="#TechStack"
              className="text-gray-600 hover:text-red-600 transition font-semibold "
            >
              TechStack
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-red-600 transition font-semibold "
            >
              Experience
            </a>
            <a
              href="#MyProject"
              className="text-gray-600 hover:text-red-600 transition font-semibold "
            >
              MyProject
            </a>
            <ButtonMessage />
          </nav>
        </div>
      )}
    </header>
  );
}
