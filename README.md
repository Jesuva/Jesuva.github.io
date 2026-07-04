# jesuva.dev — portfolio

A single-page React portfolio built with Vite, styled around a "system status /
observability" theme — a nod to the notifications infrastructure and
monitoring dashboards this résumé is actually built on.

## Stack

- **React 18 + Vite** — component structure, fast dev server
- **Framer Motion** — page-load choreography, sparkline draw-in
- **lucide-react** — icons
- Hand-rolled CSS (`src/index.css`) with design tokens as CSS custom properties
- A `<canvas>` ambient background: a node graph with traveling "packets",
  echoing the event-driven systems described in the Experience section
- Scroll-reveal via `IntersectionObserver` (see `src/hooks/useReveal.js`)
- Respects `prefers-reduced-motion` throughout

## Content

All copy lives in one place: `src/data/content.js`. Edit that file to update
experience, skills, certifications, or contact details — the components just
render it. The résumé PDF served for download lives at
`public/Jesuva_Arockiadoss_Resume.pdf`; swap it out (keep the same filename,
or update `resumeFile` in `content.js`) whenever the résumé changes.

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL. Hot reload is on by default.

## Building for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

This outputs static files to `dist/`.

## Deploying to Jesuva.github.io

This repo is a **user/organization GitHub Pages site**, which GitHub always
serves from the root of the `main` (or `master`) branch — it does not run a
build step for you. There are two ways to get the built site live:

### Option A — GitHub Actions (recommended, already set up)

A workflow at `.github/workflows/deploy.yml` builds the app and deploys it
automatically on every push to `main`/`master`.

One-time setup:
1. Push this project to `Jesuva/Jesuva.github.io`.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`/`master` (or re-run the workflow from the **Actions** tab).

The site will be live at `https://jesuva.github.io/` a minute or two after
the workflow finishes.

### Option B — commit the build output directly

If you'd rather not use Actions:

```bash
npm run build
# copy everything from dist/ into the repository root
cp -r dist/* .
git add .
git commit -m "Deploy built site"
git push
```

With this option, keep **Settings → Pages → Source** set to **Deploy from a
branch** (`main` / root).

## Project structure

```
├── index.html                 Vite entry HTML
├── public/                    Static assets copied as-is (favicon, résumé)
├── src/
│   ├── main.jsx                React root
│   ├── App.jsx                 Section composition
│   ├── index.css               Design tokens + all styles
│   ├── data/content.js         All résumé-derived copy
│   ├── hooks/
│   │   ├── useReveal.js         Scroll-reveal via IntersectionObserver
│   │   └── useCountUp.js        Animated number count-up
│   └── components/
│       ├── NetworkBackground.jsx  Ambient canvas node graph
│       ├── Nav.jsx                Sticky nav with animated active pill
│       ├── Hero.jsx               Landing section + typewriter role text
│       ├── StatusPanel.jsx        Signature "system status" hero widget
│       ├── About.jsx
│       ├── Experience.jsx         Timeline with scroll-filled line
│       ├── Systems.jsx            Flagship project cards
│       ├── Skills.jsx
│       ├── CertEdu.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
└── .github/workflows/deploy.yml
```

## Customizing the theme

Colors, fonts, spacing, and radii are all CSS custom properties at the top of
`src/index.css` under `:root`. Change a value there and it cascades through
every component — no hunting through individual files.
