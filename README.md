# Bhavani Nehra — Portfolio

A premium, luxury-minimal portfolio built with Next.js App Router.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (.js only)
- **Styling**: Plain CSS (no Tailwind, no frameworks)
- **Fonts**: Cormorant Garamond + Syne + DM Mono (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
bhavani-portfolio/
├── app/
│   ├── layout.js        # Root layout with font imports + metadata
│   └── page.js          # Main page (all sections)
├── styles/
│   └── globals.css      # Full design system + all component styles
├── public/              # Static assets (add your photo here)
├── next.config.js
└── package.json
```

## Sections

1. **Hero** — Immersive entry with animated headline, stats, and scroll hint
2. **Marquee Strip** — Animated skills ticker
3. **Narrative** — Story-driven "Who I Am" with journey timeline
4. **Projects** — Interactive case studies (click to expand full story + metrics)
5. **Skills** — Hover-reveal skill clusters with animated bars
6. **Experience** — Motion timeline with role details
7. **Education** — Clean compact block
8. **Contact** — Conversion-focused with contact form

## Customization

- Update `PROJECTS`, `SKILLS`, `TIMELINE` arrays in `app/page.js`
- Update social links in the Contact section
- Replace LinkedIn/GitHub URLs with your actual profiles
- Color palette is defined in CSS variables in `styles/globals.css`

## Design System

| Variable | Value |
|---|---|
| `--bg-primary` | `#0d0f14` (charcoal dark) |
| `--accent-gold` | `#c9a96e` (warm gold) |
| `--font-display` | Cormorant Garamond (serif) |
| `--font-body` | Syne (sans) |
| `--font-mono` | DM Mono |
