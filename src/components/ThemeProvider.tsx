"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getRetroSoundEnabled,
  setRetroSoundEnabled,
  playPowerupSound,
  playCoinSound,
} from "@/lib/retroAudio";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isRetro: boolean;
  toggleRetro: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  isGameOpen: boolean;
  openGame: () => void;
  closeGame: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isRetro, setIsRetroState] = useState<boolean>(false);
  const [soundEnabled, setSoundState] = useState<boolean>(true);
  const [isGameOpen, setIsGameOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage theme
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeState(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark");
      document.documentElement.classList.add("dark");
    } else {
      setThemeState("light");
      document.documentElement.classList.remove("dark");
    }

    // Check localStorage retro mode
    const storedRetro = localStorage.getItem("retro_mode");
    if (storedRetro === "true") {
      setIsRetroState(true);
      document.documentElement.classList.add("retro-mode");
    }

    // Check sound enabled
    setSoundState(getRetroSoundEnabled());
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const toggleRetro = () => {
    const nextRetro = !isRetro;
    setIsRetroState(nextRetro);
    localStorage.setItem("retro_mode", nextRetro ? "true" : "false");
    document.documentElement.classList.toggle("retro-mode", nextRetro);
    if (nextRetro) {
      playPowerupSound();
    } else {
      playCoinSound();
    }
  };

  const toggleSound = () => {
    const nextSound = !soundEnabled;
    setSoundState(nextSound);
    setRetroSoundEnabled(nextSound);
    if (nextSound) {
      playCoinSound();
    }
  };

  const openGame = () => {
    setIsGameOpen(true);
    playPowerupSound();
  };

  const closeGame = () => {
    setIsGameOpen(false);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: mounted ? theme : "light",
        toggleTheme,
        setTheme,
        isRetro: mounted ? isRetro : false,
        toggleRetro,
        soundEnabled: mounted ? soundEnabled : true,
        toggleSound,
        isGameOpen,
        openGame,
        closeGame,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
