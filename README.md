# Insight Frontend

**The official landing page for [Insight](https://github.com/XplnHUB/Insight-Py)** — a Python CLI tool that analyzes codebases and generates AI-powered reports.

This React web application showcases Insight's features, supported file types, roadmap, and provides installation instructions for the CLI tool.

## What This Project Is

A static marketing website built with React, TypeScript, and Tailwind CSS that:
- Explains what Insight does (AI-powered code analysis)
- Demonstrates CLI installation and usage
- Displays supported languages (30+ file types)
- Shows the product roadmap
- Provides an interactive onboarding modal

**Tech Stack:** React 18 · TypeScript · Vite 5 · Tailwind CSS · Lucide Icons

## Quick Start

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Development

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Lint code:**
```bash
npm run lint
```

## Project Structure

```text
.
├─ index.html
├─ src/
│  ├─ main.tsx         # App bootstrap
│  ├─ App.tsx          # Landing/marketing page UI + sections
│  ├─ components/
│  │  └─ OnboardingModal.tsx
│  └─ index.css        # Tailwind entry
├─ vite.config.ts
├─ tailwind.config.js
├─ eslint.config.js
├─ tsconfig*.json
└─ package.json
```
## Deployment

Deploy as a static site to Vercel, Netlify, Cloudflare Pages, or GitHub Pages:
- **Build command:** `npm run build`
- **Output directory:** `dist`

## About the Insight CLI

This website showcases the [Insight Python CLI](https://github.com/XplnHUB/Insight-Py). To use the actual tool:

```bash
pip install insight-cli-sarang
insight-cli-sarang .
```

## License

Licensed under the terms in `LICENSE`.
