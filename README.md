<div align="center">

# YugeSpace

**Data Scientist & Bot Automation Developer**
Lampung, Sumatra, Indonesia

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

[Live](#) · [GitHub](https://github.com/Yugenixs) · [Report an Issue](https://github.com/Yugenixs/YugeSpace/issues)

</div>

---

## Overview

YugeSpace is the personal portfolio of a Data Scientist and Bot/Automation Developer, showcasing projects spanning data analysis pipelines, Telegram bot automation, and full-stack web products. The site is built as a single-page, neo-brutalist Next.js application with a modular component architecture and content decoupled from presentation.

## Features

- **Responsive, single-page layout** — Hero, About, Terminal, Tech Stack, Projects, Stats, Contact, and Donation sections
- **Dark / light mode** via CSS custom properties, toggle persisted per session
- **Data-driven content** — tech stack and project listings live in `data/`, independent of component markup
- **Scroll-reveal and ambient micro-interactions** built with pure CSS keyframes (no animation library dependency)
- **Crypto donation flow** — Solana (SOL) address with QR code and one-click copy

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| UI Library | [React 18](https://react.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Icons | [Font Awesome 6](https://fontawesome.com/) |
| Typeface | [JetBrains Mono](https://www.jetbrains.com/lp/mono/) |

## Project Structure

```
YugeSpace/
├── app/
│   ├── layout.js        # Root layout, metadata, fonts
│   ├── page.js           # Page composition
│   └── globals.css       # Design tokens, animations, utilities
├── components/            # Section components (Hero, About, Projects, ...)
├── data/                  # Content: tech stack, projects (single source of truth)
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm, pnpm, or yarn

### Installation

```bash
git clone https://github.com/Yugenixs/YugeSpace.git
cd YugeSpace
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Deployment

The project deploys to [Vercel](https://vercel.com) with zero configuration — connect the repository and Vercel auto-detects the Next.js setup.

## Configuration

Before deploying to production, update the following:

| File | What to set |
|---|---|
| `components/Donation.js` | `SOLANA_ADDRESS` constant — your Solana wallet address |
| `data/projects.js` | Live repository links for each project |
| `components/About.js` | Achievement / experience figures, once finalized |

## License

Distributed under the MIT License. See `LICENSE` for details.

## Contact

- GitHub — [@Yugenixs](https://github.com/Yugenixs)
- Telegram — [@KontolBahlil](https://t.me/KontolBahlil)
- Twitter/X — [@Yugenixs](https://twitter.com/Yugenixs)
