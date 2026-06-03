# Shiva Darshan — Premium Creative Portfolio

A highly interactive, cinematic storytelling experience designed to showcase creative work, impact metrics, and expertise through advanced motion, GSAP scrolling, and luxury editorial aesthetics.

![Portfolio Preview](./public/projects/portfolio.png)

## 🌟 Overview

This portfolio breaks away from traditional static web pages. Instead of separate pages and disjointed components, the entire experience is engineered as a **single, continuously scrubbed master GSAP timeline**. 

As the user scrolls, the page is pinned, and elements dynamically transition in and out—creating a seamless, video-like narrative strictly controlled by scroll position.

## 🚀 Features

- **Cinematic Preloader:** A premium, typography-driven loading sequence to build anticipation before the main experience.
- **Master ScrollTrigger Architecture:** A unified `7500%` scroll sequence using GSAP's `timeline` and `ScrollTrigger`, allowing for flawless, orchestrated transitions without route changes.
- **Custom Magnetic Cursor:** A sleek, context-aware custom cursor that reacts to hover states (e.g., expanding and displaying "OPEN", "COPY", or "EXPLORE") while utilizing smooth `gsap.quickTo()` performance optimization.
- **Advanced Navigation:** A custom navigation system that utilizes `ScrollToPlugin` to calculate label offsets within the pinned sequence, avoiding native anchor jumpiness.
- **Responsive Animations:** Full cross-device compatibility utilizing `gsap.matchMedia()` to safely swap Blur, Scale, and Translation values between Mobile, Tablet, and Desktop screens without breaking the scroll sequence.
- **Fluid Typography:** Implementation of CSS `clamp()` for perfect typography scaling across ultra-wide monitors down to 320px mobile screens.

## 🛠️ Technology Stack

- **Framework:** [React](https://reactjs.org/) / [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation Engine:** [GSAP (GreenSock)](https://greensock.com/)
  - `ScrollTrigger` (For pinned sequences & scroll tracking)
  - `ScrollToPlugin` (For timeline navigation)
- **Deployment:** Vercel / Netlify (Recommended)

## 📂 Architecture & Key Components

The codebase has been refactored for strict modularity, separating the massive animation timeline from the stateless UI components.

- `src/hooks/useHeroTimeline.js`: The central "Brain" of the portfolio. This hook manages the `gsap.matchMedia()` context, registers the timeline labels, and broadcasts the current scroll state.
- `src/components/Shared/Navbar.jsx`: Reads the active timeline state and handles `ScrollToPlugin` navigation. Includes a responsive fullscreen mobile overlay.
- `src/components/Cursor/CustomCursor.jsx`: A high-performance, event-driven custom cursor.
- `src/components/Hero`, `About`, `Expertise`, `Projects`, `ImpactMetrics`, `Contact`: Stateless UI layers that are exclusively animated by Refs passed from the timeline hook.

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shivadarshan-HM/SDportfolio.git
   cd SDportfolio
   ```

2. **Navigate to the app directory:**
   ```bash
   cd portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🎨 Design Philosophy

* **Vibrant yet Dark:** Deep black `#050505` paired with warm amber `#D97706` accents and subtle teal `#0F766E` highlights.
* **Intentionally Paced:** Animations do not rush. The timeline forces the user to digest the content at a cinematic pace.
* **No Glassmorphism Clutter:** Clean, sharp, and editorial aesthetics over noisy, trendy gradients.

## 🤝 Let's Connect

Feel free to reach out for collaborations, freelance work, or just to say hi!

- **Email:** [shivadarshan600@gmail.com](mailto:shivadarshan600@gmail.com)
- **LinkedIn:** [/in/shiva-darshan](https://www.linkedin.com/in/shiva-darshan-01b782371/)
- **GitHub:** [@Shivadarshan-HM](https://github.com/Shivadarshan-HM)

---
*Designed & Engineered by Shiva Darshan.*
