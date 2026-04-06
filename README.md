# Dhruv (swiftcynic) — Portfolio

Personal portfolio website built with Next.js and TypeScript. Shows projects, resume, and a contact form that uses EmailJS.

Live: (your deployed URL / custom domain)

---

## Features
- Responsive portfolio, resume and contact sections
- Preloader with fade animation
- Contact form using EmailJS
- Image galleries and popups
- Lightweight, static-ready Next.js app

## Tech stack
- Next.js (App Router)
- React 19, TypeScript
- EmailJS (@emailjs/browser)
- CSS template files in `public/css` (no Tailwind required to run)
- Libraries: isotope-layout, fslightbox-react, react-player, typed.js

## Repo structure (high level)
- `app/` — Next.js app routes and pages
- `components/` — React components (Hero, About, ContactsInfo, Popups, ...)
- `layouts/` — shared layouts (Preloader, Header, Footer)
- `public/` — static assets, CSS, fonts, images
- `scripts/`, `utility/` — helpers and small utilities

## Local development

Prerequisites
- Node 18+ and npm (or yarn / pnpm)

Install
```bash
npm install
```

Run dev
```bash
npm run dev
# open http://localhost:3000
```

Build
```bash
npm run build
npm run start
```

## EmailJS / Environment
Do not commit your EmailJS keys to source control. Create a `.env.local` with values like:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
Use these env vars in `ContactsInfo` (browser code) as `process.env.NEXT_PUBLIC_*`.

## Deployment
Recommended: Vercel (zero-config for Next.js). For GitHub Pages you can use `next export` and publish the `out/` folder but verify no server-only APIs are required.

## Troubleshooting
- Preloader stuck: check Console for errors and ensure `.preloader .pre-inner` exists. The app hides content until `body.loaded` is added.
- Contact form: check browser Console for EmailJS success/error logs and network requests. If the UI confirmation is hidden by CSS, a portal is used to render the toast directly into `document.body`.

## Contributing
- Open issues for bugs or improvements.
- Make PRs to `main` with a short description and testing steps.

## License
Add your preferred license (MIT recommended).

---

If you want, I can:
- Add a deploy script for GitHub Pages
- Move the EmailJS configuration into `.env.local` and update the component to read from env
- Add CI/CD (Vercel) instructions and a badge
