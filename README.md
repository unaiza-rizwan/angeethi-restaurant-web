# Angeethi — Restaurant Website Demo

A multi-page React website built for a fictional Karachi coal-fire grill house,
created as a freelance portfolio demo piece.

## Pages
- Home — hero, story teaser, signature dishes, reviews, CTA
- Menu — full categorized menu with filter pills
- Gallery — visual grid of dishes/interior
- Story (About) — brand story + highlights
- Reservations — booking form with live "availability" panel
- Contact — contact info, map placeholder, message form

## Tech
- React 18 + Vite
- lucide-react for icons
- Plain CSS (no framework) — design tokens in `src/theme.js`
- Client-side hash routing (no external router dependency)

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Vercel, Netlify, or any static host.

## Project structure

```
src/
├── components/     Shared UI pieces (Navbar, Footer, EmberField, CTABand, etc.)
├── pages/          One file per page (Home, Menu, Gallery, About, Reservations, Contact)
├── data/           Static content (menu items, testimonials, gallery items)
├── theme.js        Color tokens
├── styles.css       Global styles, fonts, animations
├── App.jsx         Page routing shell
└── main.jsx        React entry point
```

— Demo design by Unaiza Rizwan Ali
