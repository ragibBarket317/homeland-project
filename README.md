# Homeland Purbachal City

React + TypeScript + Tailwind CSS + Redux Toolkit (Vite).

```bash
npm install
npm run dev     # development
npm run build   # production build
```

## Structure

```
public/videos/hero.mp4        hero background video
src/assets/images/            logo + images
src/components/common/        reusable UI (Button, Container, Logo, Icons, FloatingActions)
src/components/layout/        Header, Footer, Layout
src/components/sections/      page sections (Hero, ...)
src/constants/siteData.ts     all text, links, nav items (edit content here)
src/pages/Home.tsx            home page
src/store/                    redux store, hooks, uiSlice
src/types/                    shared TypeScript types
```
