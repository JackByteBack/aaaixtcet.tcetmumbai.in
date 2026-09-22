# TCET AAAI — Official Student Chapter Website

The official website for the **Association for the Advancement of Artificial Intelligence (AAAI)** student chapter at **Thakur College of Engineering & Technology (TCET)**, Mumbai.

**Live at:** [tcetaaai.tcetmumbai.in](https://tcetaaai.tcetmumbai.in)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro](https://astro.build) v7 | Static site generation, content collections, routing |
| [Tailwind CSS](https://tailwindcss.com) v4 | Utility-first styling via Vite plugin |
| [TypeScript](https://www.typescriptlang.org) | Type safety in config and content schemas |
| Content Collections | Type-safe Markdown for events and team data |
| `@astrojs/sitemap` | Auto-generated sitemap at `/sitemap-index.xml` |

**Node.js requirement:** `>=22.12.0`

---

## Getting Started

### Prerequisites

- Node.js 22.12.0 or higher
- npm (comes with Node)

### Installation

```bash
git clone https://github.com/JackByteBack/aaaixtcet.tcetmumbai.in.git
cd aaaixtcet.tcetmumbai.in
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:4321`.

To run in the background:

```bash
npx astro dev --background
```

Manage with:
- `npx astro dev stop` — stop the server
- `npx astro dev status` — check status
- `npx astro dev logs` — view logs

### Build & Preview

```bash
npm run build      # generates static site in dist/
npm run preview    # preview the build locally
```

---

## Project Structure

```
.
├── public/
│   ├── images/              # Event photos, team photos
│   ├── videos/              # Background videos (compressed)
│   ├── scripts/             # Client-side JS (scroll animations)
│   ├── robots.txt           # Search engine directives
│   └── favicon.svg          # Site favicon
│
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Navbar.astro         # Sticky nav with animated mobile menu
│   │   ├── Hero.astro           # Homepage hero with gradient blobs
│   │   ├── EventCard.astro      # Event listing card
│   │   ├── TeamCard.astro       # Team member card
│   │   ├── StatCounter.astro    # Animated stat counters
│   │   ├── FAQ.astro            # Accordion FAQ section
│   │   ├── CTABand.astro        # Call-to-action banner
│   │   ├── Footer.astro         # Footer with legal links
│   │   └── LoadingScreen.astro  # Animated loading screen (homepage)
│   │
│   ├── content/
│   │   ├── events/          # Markdown files for each event
│   │   └── team/            # Markdown files for each team member
│   │
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout (SEO, JSON-LD, fonts)
│   │
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── about.astro          # About the chapter
│   │   ├── events/
│   │   │   ├── index.astro      # Events listing (dark theme)
│   │   │   └── [slug].astro     # Individual event detail (dark theme)
│   │   ├── team.astro           # Team page
│   │   ├── achievements.astro   # Achievements & milestones
│   │   ├── contact.astro        # Contact form / info
│   │   ├── privacy-policy.astro # Legal: Privacy Policy
│   │   ├── terms-and-conditions.astro # Legal: Terms & Conditions
│   │   ├── 404.astro            # Custom 404 error page
│   │   └── 500.astro            # Custom 500 error page
│   │
│   ├── styles/
│   │   └── app.css          # Tailwind v4 theme, prose styles, animations
│   │
│   └── content.config.ts    # Content collection schemas (events, team)
│
├── astro.config.mjs         # Astro config (site URL, Tailwind, sitemap)
├── package.json
└── tsconfig.json
```

---

## Content Management

### Adding Events

Create a new Markdown file in `src/content/events/`:

```markdown
---
title: "Workshop Title"
description: "Short description of the event."
date: 2026-10-15
time: "2:00 PM - 5:00 PM"
venue: "Seminar Hall, TCET"
upcoming: true
registrationUrl: "https://forms.google.com/your-form"
category: "Workshop"
accentColor: "#50e3c2"
heroGradient: "linear-gradient(135deg, #50e3c2, #0070f3)"
tags: ["AI", "Machine Learning", "Beginner"]
---

## What You'll Learn

Event content in Markdown...

### Topics Covered

- Topic 1
- Topic 2
```

**Schema fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Event title |
| `description` | string | Yes | Short description (used in meta tags) |
| `date` | date | Yes | Event date |
| `dateLabel` | string | No | Custom date text shown instead of `date` (e.g., "28, 29 September & 1 October 2026") |
| `time` | string | No | Time range |
| `venue` | string | No | Location |
| `upcoming` | boolean | No | Show on events page (default: false) |
| `registrationUrl` | string | No | External registration link |
| `category` | string | No | Category badge (e.g., "Workshop", "Hackathon") |
| `coverImage` | string | No | Cover image path |
| `accentColor` | string | No | Accent color (default: #0070f3) |
| `heroGradient` | string | No | Custom gradient for hero banner |
| `tags` | string[] | No | Tags shown on event page |
| `github` | string | No | GitHub repo link |
| `linkedin` | string | No | LinkedIn event link |

### Adding Team Members

Create a new Markdown file in `src/content/team/`:

```markdown
---
name: "Jane Doe"
role: "President"
photo: "/images/team/jane-doe.jpg"
bio: "Short bio about the member."
linkedin: "https://linkedin.com/in/janedoe"
order: 1
---

Optional extended bio in Markdown.
```

**Schema fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Full name |
| `role` | string | Yes | Position/title |
| `photo` | string | No | Profile photo path |
| `bio` | string | No | Short bio |
| `linkedin` | string | No | LinkedIn profile URL |
| `instagram` | string | No | Instagram profile URL |
| `email` | string | No | Contact email |
| `order` | number | No | Display order (default: 0) |

---

## Key Features

### SEO & Performance

- **JSON-LD structured data** (EducationalOrganization schema) on every page
- **Open Graph & Twitter Card** meta tags for social sharing
- **Auto-generated sitemap** via `@astrojs/sitemap`
- **robots.txt** configured for search engines
- **Lazy loading** on event card images and background video
- **Video compression** — background video optimized from 5.5MB to 2.1MB via ffmpeg
- **Static output** — zero JavaScript runtime by default, fast page loads

### Responsive Design

- Mobile-first with `clamp()` fluid typography
- 44px minimum touch targets on mobile for accessibility
- Sticky navbar with blur backdrop
- Animated hamburger-to-X mobile menu with smooth slide-down
- Responsive grid layouts across all pages

### Dark Mode (Events Pages)

- Events listing and event detail pages use a dark theme
- Dark prose styling for Markdown content
- Theme toggle removed — site defaults to light theme

### Animations

- **Loading screen** — animated progress bar on homepage (2.5s)
- **Scroll animations** — elements fade in on scroll via IntersectionObserver
- **Hero blobs** — floating gradient blobs with parallax on scroll
- **Stat counters** — animated number counting on scroll
- **FAQ accordion** — smooth expand/collapse
- **Mobile menu** — hamburger ↔ X icon transition with slide-down animation

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, stats, upcoming events, FAQ, CTA |
| About | `/about` | Chapter overview, mission, SEO content |
| Events | `/events` | Full-screen video hero, event cards (dark) |
| Event Detail | `/events/[slug]` | Individual event with sidebar (dark) |
| Team | `/team` | Team member grid |
| Achievements | `/achievements` | Milestones and accomplishments |
| Contact | `/contact` | Contact form and information |
| Privacy Policy | `/privacy-policy` | Legal privacy policy |
| Terms & Conditions | `/terms-and-conditions` | Legal terms |
| 404 | `/404` | Custom 404 error page |
| 500 | `/500` | Custom 500 error page |

---

## Configuration

### Site URL

Update `site` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://tcetaaai.tcetmumbai.in',
  // ...
});
```

### Social Links

Social links (Instagram, LinkedIn) are hardcoded in `Footer.astro`. Update the `href` values there.

### Registration Links

Each event has an optional `registrationUrl` field in its frontmatter. Update the URL in the Markdown file for each event.

---

## Deployment

This is a fully static Astro site. It can be deployed to any static hosting provider:

- **Vercel** — `npx vercel` or connect the GitHub repo
- **Netlify** — Build command: `npm run build`, output: `dist`
- **GitHub Pages** — Use `@astrojs/static` adapter
- **Cloudflare Pages** — Build command: `npm run build`, output: `dist`

The site is configured with `@astrojs/sitemap` which generates a sitemap at build time.

---

## License

© 2026 TCET AAAI. All rights reserved.
