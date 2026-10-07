"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { playSelectSound } from "@/lib/retroAudio";

export type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  cvPdfUrl: string;
  cvDownloadFileName: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("portfolio_lang") as Language | null;
    if (storedLang === "en" || storedLang === "id") {
      setLanguageState(storedLang);
    } else {
      setLanguageState("en"); // Default is English
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
    playSelectSound();
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "id" : "en";
    setLanguage(nextLang);
  };

  // When English -> yaumilCV.pdf, when Indonesian -> yaumilCVIDN.pdf
  const cvPdfUrl = language === "id" ? "/yaumilCVIDN.pdf" : "/yaumilCV.pdf";
  const cvDownloadFileName =
    language === "id"
      ? "Muh_Yaumil_Aksah_Hamid_CV_IDN.pdf"
      : "Muh_Yaumil_Aksah_Hamid_CV.pdf";

  return (
    <LanguageContext.Provider
      value={{
        language: mounted ? language : "en",
        setLanguage,
        toggleLanguage,
        cvPdfUrl,
        cvDownloadFileName,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
