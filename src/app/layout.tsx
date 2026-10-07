import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Press_Start_2P,
  Pixelify_Sans,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muh Yaumil Aksah Hamid | Software Engineer | AI & IoT Developer",
  description:
    "Portfolio of Muh Yaumil Aksah Hamid - Software Engineer & AI & IoT Developer specializing in modern frontend/backend stacks, machine learning frameworks (YOLOv5, PyTorch), and cloud deployment.",
  icons: {
    icon: { url: "/yau.ico", type: "image/png" },
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} ${pixelify.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
