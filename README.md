# NUVE PLUVIA — Waterproofing Specialist Website

Official company profile website for **NUVE Pluvia Solution**, a specialist waterproofing provider focused on long-term building protection.

Built with **Next.js (App Router)** and **Tailwind CSS**.

---

## Overview

This repository contains a multi-page company profile site with:

- A **Landing Page** (`/`) as the first entry point  
- A dedicated **Site Section** under `/site/*` with consistent navigation  
- **Separate layouts**:
  - Landing layout (**no Navbar / Footer**)
  - Site layout (**Navbar + Footer**)

The main call-to-action button **“Get a Solution”** redirects users to **Home** at `/site/home`.

---

## Live Routes

- **Landing Page**: `/`
- **Home**: `/site/home`
- **Product**: `/site/product`
- **About Us**: `/site/about-us`

---

## Features

- Responsive UI (mobile & desktop)
- App Router routing structure (`app/`)
- Optimized images using `next/image`
- Reusable components (Navbar / Footer)
- Clean styling system via Tailwind CSS
- Layout separation:
  - Landing page without Navbar/Footer
  - Main site pages with Navbar/Footer

---

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

---

## Project Structure

High-level structure:

```txt
app/
  page.tsx                 -> Landing page route: "/"
  layout.tsx               -> Root layout (global)
  globals.css              -> Global styles

  site/
    layout.tsx             -> Layout for "/site/*" (Navbar + Footer)
    home/page.tsx          -> "/site/home"
    product/page.tsx       -> "/site/product"
    about-us/page.tsx      -> "/site/about-us"

components/
  Navbar.tsx               -> Main navigation (used in /site layout)
  Footer.tsx               -> Footer (used in /site layout)

public/
  logo.png                 -> Logo assets
  ...                      -> Images and static files
````

## Getting Started (Local Development)

### 1) Install dependencies

```bash
npm install
```

### 2) Run the development server

```bash
npm run dev
```

Open:

* [http://localhost:3000](http://localhost:3000) (Landing Page)

---

## Build & Production

### Build for production

```bash
npm run build
```

### Run production server locally

```bash
npm run start
```

---

## Navigation & CTA Behavior

The landing page call-to-action **“Get a Solution”** routes to:

* `/site/home`

Example:

```tsx
<Link href="/site/home">Get a Solution</Link>
```

---

## Layout System

This project uses two layout layers:

1. **Root Layout** (`app/layout.tsx`)

* Global wrappers and styles.

2. **Site Layout** (`app/site/layout.tsx`)

* Contains the main UI shell:

  * Navbar
  * Footer

The Landing Page (`/`) does not use the site layout, so it renders without Navbar/Footer.

---

## Assets & Styling Notes

* Images live in `public/`
* Prefer `next/image` for optimized performance
* Styling uses Tailwind utility classes
* Custom fonts/assets (if any) should be placed under `public/` and referenced in CSS

---

## Deployment

This project can be deployed on any Next.js-compatible platform:

* Vercel
* Netlify
* VPS / Docker

Typical Vercel setup:

1. Import the repository into Vercel
2. Framework preset: **Next.js**
3. Build command: `npm run build`
4. Output: handled automatically by Next.js

---

## License

This project is proprietary and intended for official use by **NUVE Pluvia Solution** unless otherwise stated.

---

## Credits

Designed and developed for **NUVE Pluvia Solution**.

```