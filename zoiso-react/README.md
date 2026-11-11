# ZOISO – React + Tailwind

React 18 · Vite · React Router · Tailwind CSS v4 · react-icons · Swiper

## Run

```bash
npm install
npm run dev      # development
npm run build    # production build in dist/
npm run preview  # preview the build
```

## Structure

```
src/
  assets/        images (optimised) and fonts
  components/
    layout/      top bar, navbar, mobile menu, footer, scroll-to-top button
    sections/    hero, CTA banner, service steps, sliders, ...
    content/     building blocks for the text-heavy pages
    ui/          container, links, buttons, accordion, form controls
  data/          navigation, service steps, FAQ/privacy accordion content
  hooks/         usePageTitle
  pages/         one component per page
```

## Deploying

The site uses clean URLs (e.g. `/isolatie`). Configure your host to serve
`index.html` for every path (single-page-app fallback).
