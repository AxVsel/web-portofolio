# 🌐 Muh Yaumil Aksah Hamid — Personal Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://yaumil-aksah.vercel.app/)

Modern, fast, and fully responsive personal portfolio website of **Muh Yaumil Aksah Hamid** (*Software Engineer & Hardware Engineer*). Built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS v4.

🔗 **Live Website**: [yaumil-aksah.vercel.app](https://yaumil-aksah.vercel.app/)

---

## ✨ Features

- **🎮 8-Bit Retro Arcade Game Mode & Mini Game**:
  - Interactive **8-BIT** toggle button in the navigation bar.
  - 🕹️ **Playable Mini Game: "BUG HUNTER 1989"**: Complete canvas-based 8-bit space/bug shooter with keyboard and mobile touch controls, powerup coin drops, and local high score tracking.
  - Authentic retro pixel fonts (**Press Start 2P** & **Pixelify Sans**).
  - Pure Web Audio API synthesized 8-bit sound effects (*Coin, Power-Up, Laser, Explosion, Game Over*) with sound mute toggle.
  - RPG Player HUD Stats (*HP, MP, Level 25, ATK/DEF/SPEED stats*).
  - Gamified sections: *Item Inventory (Tech Stack)*, *Quest Log (Experience)*, *Arcade Cartridges (Projects)*, and *Guild Training (Education)*.
  - CRT scanlines overlay effect.
- **🌓 Dark Mode & Light Mode**:
  - Smooth theme switching with Sun & Moon animated toggle button.
  - Automatic system preference detection (`prefers-color-scheme`).
  - Persistent theme preference stored in `localStorage` without hydration flickering.
- **📱 Fully Responsive Design**:
  - Pixel-perfect adaptability across **Mobile (< 640px)**, **Tablet (641px - 1024px)**, and **Desktop (> 1024px)**.
  - Mobile hamburger menu navigation with backdrop blur and smooth transitions.
- **🛠️ Comprehensive Tech Stack Showcase**:
  - Infinite animated LogoLoop carousel for core technologies.
  - Categorized skill cards: *Programming Languages*, *Frontend*, *Backend & Databases*, *AI & Machine Learning*, *Embedded Systems & IoT*, and *Tools & DevOps*.
- **💼 Professional Career Journey**:
  - Detailed work experience timeline:
    - **PT Unisia Tera Medika (JIH Hospital)** — Software Engineer (Oct 2025 - Present)
    - **PT GIT Solution (MoA Batch 9)** — Intern Full Stack Developer (Sep 2023 - Dec 2023)
    - **Digiparts** — Computer Technician Intern (Jan 2019 - Mar 2019)
- **🚀 Featured Projects Showcase (8 Projects)**:
  - Interactive category filter tabs (*All*, *Web & Full Stack*, *AI & Computer Vision*, *IoT & Embedded*).
  - Direct repository links (Frontend / Backend / Org) and Live Demo buttons.
  - Featured projects:
    1. **Hospital Information System (SIMRS)** — Enterprise Healthcare System
    2. **ShareNote** — Collaborative Note-Sharing Platform
    3. **Circle** — Modern Social Media Web App
    4. **FutsalGo** — Online Futsal Court Booking System
    5. **Chatfilm** — AI-Powered Movie Discussion & Analysis Platform
    6. **Indonesian Sign Language (SIBI) Recognition** — Computer Vision (YOLOv5 Thesis)
    7. **Smart Door Lock System** — IoT & Facial Recognition (ESP32-CAM + Blynk)
    8. **Face Mask Compliance Detection** — Real-time Computer Vision (YOLOv5 & PyTorch)
- **🎓 Education & Achievements**:
  - **Amikom University Yogyakarta** — Bachelor of Informatics (2020 - 2024)
  - **SMKN 1 Banggai** — Software Engineering (🏆 *2nd Place LKS IT Software Solution for Business*)
  - **PT DumbWays Indonesia Technology** — Full Stack Developer Program (2025)
- **📬 Direct Contact & Call-to-Action**:
  - Quick contact cards for Email, WhatsApp, and Location.
  - Interactive "Let's Talk" email trigger and one-click CV download button.

---

## 🛠️ Tech Stack & Libraries

| Category | Technologies |
|---|---|
| **Framework** | [Next.js 15.5](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/postcss`, `tw-animate-css` |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Utilities** | `clsx`, `tailwind-merge`, `class-variance-authority` |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```
├── public/                 # Static assets (images, logos, icons, CV PDF)
│   ├── experienceUnisia.png
│   ├── ShareNote.png
│   ├── circleProject.png
│   ├── FutsalGo.png
│   ├── chatFilm.png
│   ├── sibi.png
│   ├── smartdoor.png
│   ├── facedetection.png
│   ├── yaumilCV.pdf
│   └── ...
├── src/
│   ├── app/
│   │   ├── components/     # Feature components
│   │   │   ├── ButtonMessage.tsx    # Contact & CV download CTA
│   │   │   ├── ExperienceCard.tsx   # Work experience card
│   │   │   └── ProjectCard.tsx      # Portfolio project card with category badge
│   │   ├── header/
│   │   │   ├── Header.tsx           # Responsive navbar with theme toggle
│   │   │   └── Footrer.tsx          # Footer with social links
│   │   ├── menu/
│   │   │   ├── Intro.tsx            # Hero section with bio & socials
│   │   │   ├── TechStack.tsx        # Categorized skills & logo loop
│   │   │   ├── WorkExperience.tsx   # Professional experience timeline
│   │   │   ├── MyProject.tsx        # 8 featured projects with category filters
│   │   │   ├── Education.tsx        # Formal & non-formal education
│   │   │   └── LetsBuild..tsx       # Contact section
│   │   ├── globals.css              # Tailwind CSS & theme tokens
│   │   ├── layout.tsx               # Root layout & ThemeProvider wrapper
│   │   └── page.tsx                 # Main single-page application layout
│   └── components/
│       ├── LogoLoop.tsx             # Animated infinite marquee component
│       ├── ThemeProvider.tsx        # Dark/Light mode context & persistence
│       └── ThemeToggle.tsx          # Sun/Moon interactive toggle button
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js 18.18+ or 20+ installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AxVsel/web-portofolio.git
   cd web-portofolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port specified in terminal).

### Production Build

To test the production build locally:
```bash
npm run build
npm run start
```

---

## 👨‍💻 Author

**Muh Yaumil Aksah Hamid**
*Software Engineer | Hardware Engineer*

- **Location**: South Tangerang, Banten, Indonesia
- **Email**: [yaumilaksah@gmail.com](mailto:yaumilaksah@gmail.com)
- **WhatsApp / Phone**: [+62 813-5513-0934](https://wa.me/6281355130934)
- **GitHub**: [@AxVsel](https://github.com/AxVsel)
- **LinkedIn**: [linkedin.com/in/yaumil-aksah](https://www.linkedin.com/in/yaumil-aksah/)
- **Live Portfolio**: [yaumil-aksah.vercel.app](https://yaumil-aksah.vercel.app/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
