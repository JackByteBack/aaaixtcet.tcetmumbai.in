# TCET AAAI Website — Build Prompt

> Paste this into your coding agent inside the initialized Astro project.

---

## Context

I'm building the official website for **TCET AAAI**, a student chapter at Thakur College of Engineering & Technology (TCET). It will be deployed at **tcetaaai.tcetmumbai.in**.

**Stack:** Astro.js + Tailwind CSS v4
**Tools you must use while building:**

- Use the **Astro docs MCP** to confirm current Astro APIs, routing, content collections, and image/asset handling — don't rely on memory for Astro syntax, versions change fast.
- Use the **tailwind-4-docs skill** for all styling — Tailwind v4 changed config (CSS-based `@theme`, no `tailwind.config.js` by default), so follow v4 conventions exactly, not v3 habits.
- Use **@DESIGN.md** in the project root as the single source of truth for colors, typography, spacing scale, and component style. Do not invent a design system outside of it — extend it only where it's silent.

---

## Competitor context (reference only — do NOT copy)

There's an existing chapter site at `https://acmsigai.tcetmumbai.in/` (TCET ACM-SIGAI, the AI/ML chapter). I want a site that's **functionally stronger** than it, but the **visual design must be fully original** and follow @DESIGN.md — no layout, color palette, component style, or UI pattern should be lifted from that site.

Known weaknesses of the competitor site to avoid repeating:

- It's a pure client-rendered SPA with almost no server-rendered HTML — page source is nearly blank, which kills SEO and produces broken/empty link previews when shared on Instagram/WhatsApp (a real problem since their traffic comes from Instagram bio links).
- No visible Open Graph / meta tags for social sharing.
- No clear structured "upcoming events" flow with registration.

## Features to include (functional parity + improvements)

**Core pages/sections**

- Home — hero (chapter name, mission one-liner, primary CTA), highlight of the nearest upcoming event, quick stats (members, events held, since-year)
- About — what TCET AAAI is, mission, affiliation to parent body, faculty coordinator(s)
- Events — upcoming events (date, time, venue, description, register CTA) and past events archive with photos/recap
- Team — office bearers with photos, roles, and links (LinkedIn/Instagram)
- Achievements / Highlights — notable wins, speakers, milestones
- Contact — email, social links, simple contact form or mailto

**Technical requirements**

- Server-rendered/static-generated HTML for every page (this is Astro's default — make sure nothing critical is client-only that would blank out the initial HTML)
- Proper `<title>` and meta description per page
- Open Graph + Twitter Card tags (image, title, description) so Instagram/WhatsApp link previews render correctly
- `sitemap.xml` and `robots.txt`
- Fast load: optimized images (Astro `<Image />`), minimal JS, ship interactivity only where needed (Astro islands)
- Mobile-first responsive layout — primary traffic will come from Instagram bio links on phones
- Accessible: proper heading hierarchy, alt text, sufficient color contrast per @DESIGN.md tokens
- Clean 404 page

## What I want from you right now

1. Confirm the Astro project structure you'll use (pages, layouts, content collections for events/team).
2. Pull current best-practice patterns from the Astro docs MCP for content collections (for Events and Team data) before writing code.
3. Pull Tailwind v4 setup conventions from the tailwind-4-docs skill (CSS-first `@theme`, no config file unless needed) before writing any styles.
4. Read @DESIGN.md and map its tokens into the Tailwind v4 theme before building components.
5. Propose the page/route list and content collection schemas first, and wait for my confirmation before scaffolding.
