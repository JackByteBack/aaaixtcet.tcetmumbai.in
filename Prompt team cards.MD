# "Committee Roster" Card System — Full Design Spec

Theme name: **Committee Roster** (a credential-style, framed-portrait roster system — think official department notice crossed with a studio-shot yearbook).

The system has **3 tiers** of people, and each tier has its own structural rules, plus a **3-state visual weight system** (Solid / Pale / Neutral) applied to individual cards within every tier.

---

## Tier 1 — Faculty Mentors & Leaders

- Section label: black pill, "FACULTY MENTORS & LEADERS"
- 2-column layout, but only ever shows 1 row (2 people): Faculty Sponsor + Assistant Professor / secondary faculty
- **Faculty-specific rules that differ from the other tiers:**
  - Photos are **candid/office shots**, not studio portraits — different backdrop per person (hallway, lockers), not the shared studio backdrop used everywhere else
  - Only **one social icon** (LinkedIn) — no GitHub icon on faculty cards, ever
  - Role badges use distinct icons not reused elsewhere: graduation cap (Faculty Sponsor), briefcase (Assistant Professor/other faculty)
  - Quote style: aspirational/mission statements in first person ("Empowering minds to transform knowledge into meaningful innovation"), not role-tagline style

## Tier 2 — Core Executive Team

- Section label: black pill, "CORE EXECUTIVE TEAM"
- 2-column grid, multiple rows — one row per role-pair, ordered by seniority:
  1. Chairperson / Vice Chairperson
  2. Secretary / Treasurer
  3. Event Manager / Creative Head
  4. PR Head / Sponsorship Head
  5. Technical Head / Webmaster
- **Core-specific rules:**
  - All photos share **one consistent studio backdrop** (vertical slat wall + greenery) — this is what visually unifies the whole executive tier
  - Every card gets **two social icons**: LinkedIn + GitHub
  - Full name always in two words minimum, always bold black caps/title-case

## Tier 3 — Junior Core Team

- Section label: black pill, "JUNIOR CORE TEAM"
- Same 2-column grid and same studio backdrop as Core Executive (visually it's "core team, junior year")
- Role badges are **prefixed "JT"** (Junior) — JT Creative Head, JT Technical Head, JT Secretary, JT Event Manager, JT PR & Spons Head (roles get combined at junior level), plus a standalone In-house Head
- **Junior-specific rules:**
  - Quote boxes are more often **plain role-description text** rather than a personal quote (e.g. "Assisting in chapter records, administrative scheduling, and inter-team operational coordination." instead of a quoted motto) — signals "responsibilities" rather than "philosophy"
  - Visual weight (see below) skews toward Pale/Neutral more often than Solid — reinforces that this tier is junior/supporting

---

## The 3-state visual weight system (applies within every tier)

Every individual card is rendered in one of three weights. This is what creates rhythm across the grid — it is not tied 1:1 to any single role, but higher-ranking/attention-getting roles (Chairperson, Event Manager, Technical Head) more often get Solid.

| State                                                       | Photo frame border              | Role badge                        | Quote/description box                            | Social icon buttons        |
| ----------------------------------------------------------- | ------------------------------- | --------------------------------- | ------------------------------------------------ | -------------------------- |
| **Solid** (primary emphasis)                                | Thick solid blue border         | Solid blue fill, black text       | Solid blue fill, black left accent bar           | Solid blue fill buttons    |
| **Pale** (secondary)                                        | Thin pale-blue border           | Pale blue outline, black text     | Pale blue/near-white fill, black left accent bar | Pale blue outline buttons  |
| **Neutral** (tertiary — used for PR/Sponsorship-type roles) | Thin black/gray border, no blue | Black outline badge, no blue fill | Pale fill, thin black accent bar                 | Thin black outline buttons |

Within a row of two cards, the two states are usually different from each other (contrast left vs. right), but not in a fixed left/right rule — just avoid two Solid or two Neutral cards side by side.

---

## Full role → icon map

| Role                               | Icon                |
| ---------------------------------- | ------------------- |
| Faculty Sponsor                    | Graduation cap      |
| Assistant Professor / faculty      | Briefcase           |
| Chairperson                        | Crown               |
| Vice Chairperson                   | Person with tag     |
| Secretary / JT Secretary           | Document/paper      |
| Treasurer                          | Dollar sign         |
| Event Manager / JT Event Manager   | Calendar            |
| Creative Head / JT Creative Head   | Palette             |
| PR Head                            | Megaphone           |
| Sponsorship Head                   | Tag/handshake       |
| PR & Spons Head (combined, junior) | Tag/handshake       |
| Technical Head / JT Technical Head | Code brackets `< >` |
| Webmaster                          | Globe               |
| In-house Head                      | People/group icon   |

---

## Card anatomy (identical structure across all tiers, only styling weight changes)

1. **Name** — bold heavy sans-serif, black, left-aligned, wraps to 2 lines if long
2. **Role badge** — rounded pill, icon + bold uppercase label, styled per weight state above
3. **Photo frame** — thick rounded-corner frame around a 3:4 portrait, border styled per weight state; faculty = candid backdrop, core/junior = shared studio backdrop
4. **Quote/description bar** — rectangle with solid left accent bar, styled per weight state; content is either an italic first-person quote in quotation marks, or (mainly junior tier) a plain responsibility description
5. **Social row** — 1 icon (LinkedIn only) for faculty, 2 icons (LinkedIn + GitHub) for core/junior, styled per weight state

## Page-level structure (top to bottom)

1. Eyebrow pill ("THE MINDSHARE" style) — small blue pill, bold black text
2. Headline ("MEET THE TEAM") — large bold black
3. Subtext — one muted gray sentence, centered
4. Hero photo card — full-width group photo, black-and-white, thick black frame, two stacked pill labels bottom-left (year range + team name)
5. Tier 1 container: Faculty Mentors & Leaders
6. Tier 2 container: Core Executive Team
7. Tier 3 container: Junior Core Team

Each tier container = one large rounded cream-background box with a black border, holding that tier's full grid.

## Color & type tokens

| Token                     | Value                                                    |
| ------------------------- | -------------------------------------------------------- |
| Page background           | Off-white paper `#FAFAF7`                                |
| Tier container background | Warm cream `#F5F0E6`                                     |
| Primary blue              | `#5B9BD5`–`#6FA8DC`                                      |
| Pale blue                 | Very light tint of primary blue, near-white              |
| Neutral border            | Black/dark gray, thin                                    |
| Body/heading text         | Black                                                    |
| Muted text                | Mid gray                                                 |
| Name/heading font         | Bold heavy sans (e.g. Archivo Black / Poppins ExtraBold) |
| Badge/label font          | Bold, uppercase, tight tracking                          |
| Quote/body font           | Semi-bold, sentence case                                 |

No shadows, no gradients, no glow — all definition comes from flat fills and borders.
