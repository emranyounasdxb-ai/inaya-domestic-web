# Inaya Domestic Web

Modern, bilingual (English / Arabic with full RTL) website for **Inaya Domestic** - maid and domestic worker services in Ajman, UAE.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (English / Arabic, automatic RTL)

## Features

- Bilingual EN/AR with language toggle and automatic RTL layout
- Fully responsive modern design
- Booking, Contact and Careers forms (with validation)
- 20+ domestic services with dynamic detail pages
- SEO-friendly: per-page metadata, sitemap.xml, robots.txt
- All pages: Home, About, Services, Booking, Contact, FAQ, Reviews, Pricing, How It Works, Service Areas, Blog, Careers, Privacy, Terms, Refund Policy

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to /en or /ar).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/[locale]/      Localized pages (RTL/LTR)
components/        UI components (Navbar, Footer, forms, cards)
messages/          en.json / ar.json translation files
lib/               services data + site config
i18n.ts            next-intl config
middleware.ts      locale routing
```

## Customization

- Update contact details in `lib/site-config.ts` (phone, WhatsApp, email).
- Edit text content in `messages/en.json` and `messages/ar.json`.
- Add/edit services in `lib/services.ts`.
