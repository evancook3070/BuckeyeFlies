@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 60 29% 97%;
    --foreground: 0 0% 11%;
    --card: 60 20% 99%;
    --card-foreground: 0 0% 11%;
    --popover: 60 20% 99%;
    --popover-foreground: 0 0% 11%;
    --primary: 126 28% 30%;
    --primary-foreground: 60 29% 97%;
    --secondary: 199 25% 90%;
    --secondary-foreground: 126 28% 22%;
    --muted: 60 14% 93%;
    --muted-foreground: 126 10% 40%;
    --accent: 26 57% 45%;
    --accent-foreground: 60 29% 97%;
    --destructive: 0 62% 40%;
    --destructive-foreground: 60 29% 97%;
    --border: 199 20% 80%;
    --input: 199 20% 82%;
    --ring: 26 57% 45%;
    --chart-1: 126 28% 30%;
    --chart-2: 199 25% 44%;
    --chart-3: 26 57% 45%;
    --chart-4: 43 60% 55%;
    --chart-5: 0 30% 40%;
    --radius: 0.125rem;
    --font-heading: 'Cormorant Garamond', ui-serif, Georgia, serif;
    --font-body: 'EB Garamond', ui-serif, Georgia, serif;
    --font-display: 'Cormorant Garamond', ui-serif, Georgia, serif;
    --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace;
    --sidebar-background: 60 20% 96%;
    --sidebar-foreground: 0 0% 20%;
    --sidebar-primary: 126 28% 30%;
    --sidebar-primary-foreground: 60 29% 97%;
    --sidebar-accent: 60 14% 92%;
    --sidebar-accent-foreground: 126 28% 22%;
    --sidebar-border: 199 20% 80%;
    --sidebar-ring: 26 57% 45%;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
    font-size: 18px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  ::selection {
    background: #B46A32;
    color: #FAF9F6;
  }
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: #FAF9F6; }
  ::-webkit-scrollbar-thumb { background: #547A8C; border: 3px solid #FAF9F6; }
}

@layer components {
  .font-display { font-family: var(--font-display); }
  .font-body { font-family: var(--font-body); }
  .font-mono { font-family: var(--font-mono); }

  .display-heading {
    font-family: var(--font-display);
    font-weight: 500;
    line-height: 0.92;
    letter-spacing: -0.02em;
    font-size: clamp(2.75rem, 8vw, 9rem);
  }
  .section-heading {
    font-family: var(--font-display);
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.01em;
    font-size: clamp(2rem, 5vw, 4rem);
  }
  .eyebrow {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #547A8C;
  }
  .eyebrow-copper {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #B46A32;
  }
  .spec-mono {
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.55;
    letter-spacing: 0.01em;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 px-8 py-4 transition-all duration-300;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    background: #3D5A40;
    color: #FAF9F6;
    border: 1px solid #3D5A40;
  }
  .btn-primary:hover { background: #2f4832; border-color: #2f4832; }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }

  .btn-outline {
    @apply inline-flex items-center justify-center gap-2 px-8 py-4 transition-all duration-300;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    background: transparent;
    color: #1B1B1B;
    border: 1px solid #1B1B1B;
  }
  .btn-outline:hover { background: #1B1B1B; color: #FAF9F6; }

  .link-underline {
    position: relative;
    display: inline-block;
  }
  .link-underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  }
  .link-underline:hover::after { transform: scaleX(1); transform-origin: left; }

  .ledger-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(180,106,50,0.4), transparent);
  }
  .vintage-border {
    border: 1px solid rgba(84,122,140,0.3);
  }
}

/* Page transition curtain */
.page-curtain {
  position: fixed;
  inset: 0;
  background: #3D5A40;
  z-index: 9999;
  transform: scaleX(0);
  transform-origin: right;
  pointer-events: none;
}
.page-curtain.entering {
  animation: curtainIn 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}
.page-curtain.leaving {
  animation: curtainOut 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}
@keyframes curtainIn {
  0% { transform: scaleX(0); transform-origin: left; }
  100% { transform: scaleX(1); transform-origin: left; }
}
@keyframes curtainOut {
  0% { transform: scaleX(1); transform-origin: right; }
  100% { transform: scaleX(0); transform-origin: right; }
}

/* Custom cursor */
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(180,106,50,0.6);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease;
  mix-blend-mode: multiply;
}
.cursor-ring.hovering {
  width: 56px;
  height: 56px;
  background: rgba(180,106,50,0.12);
  border-color: rgba(180,106,50,0.9);
}
@media (hover: none) {
  .cursor-ring { display: none; }
}

/* Magnification hover */
.specimen-img {
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease;
}
.specimen-cell:hover .specimen-img {
  transform: scale(1.12);
}

/* Parallax */
.parallax-slow { will-change: transform; }

/* Fade up on load */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }

/* Grain overlay */
.grain::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}