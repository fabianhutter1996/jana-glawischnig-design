# Jana Glawischnig — Design System

**Version:** 1.0 · **Created:** April 2026  
**Brand manual created by:** Candela Atelier (www.candelaatelier.com)

---

## Overview

**Jana Glawischnig** is a Vienna-based Social Media Manager and Content Creator who helps small businesses stand out through custom Reels and creative social media content. Her brand radiates warmth, creativity, passion, reliability, and empathy — feminine and elegant, but never childish.

**Primary digital product:** Marketing website at [janaglawischnig.com](https://janaglawischnig.com) — a one-page Next.js site with sections: Hero, TrustedBy, Services (Content Production + Social Media Management), Bundles (Foundation / Growth / Authority), Contact, Footer.

**Services offered:** Social Media Management, Content Production (Reels/video), Meta Ads Management, Community Management, monthly reporting.

**Target market:** Austrian small business owners ("Andrea" — 34, Vienna, values quality, authenticity, slow life, style).

---

## Sources

| Source | Path / URL |
|---|---|
| Website codebase | `jana-glawischnig-web/` (Next.js + Tailwind, local mount) |
| Brand manual PDF | `uploads/BrandManual_Akt_JanaGlawischnig.pdf` |
| Logo assets | `assets/logos/` |
| Brand icons | `assets/icons/` |
| Profile images | `assets/images/` |

> **Note:** Sekundärlogo files are saved as `JG_Sekundaerlogo.svg` (ae spelling) in `assets/logos/` due to special-character path constraints.

---

## CONTENT FUNDAMENTALS

### Language
- **Primary language:** German (Austrian), with occasional English phrases for stylistic effect
- **English appears in:** CTAs ("Let's work together"), bundle names ("The Foundation Bundle"), brand-level statements
- **Tone:** Warm, personal, direct — talks *to* the reader, never at them

### Voice & Tone
- **Aspirational but grounded** — "Sichtbarkeit durch Mehrwert statt Lautstärke" (Visibility through value, not volume)
- **Poetic but precise** — "Kreativität mit Herz trifft auf strategische Präzision"
- **Personal "ich/euch" framing** — Jana speaks in first person ("Ich erstelle…", "Gemeinsam erschaffen wir…"). Uses *ihr/euch* (informal plural) for clients.
- **No emoji** in production copy — brand is elegant, not playful
- **No exclamation marks** in headings — confidence without shouting
- **Sentence case** for body; **ALL CAPS + wide tracking** for Martel Sans labels/tags

### Copy patterns
- Hero H1: bold declarative statement, often with an italic emphasis word: *"Sichtbarkeit durch **Mehrwert** statt Lautstärke."*
- Section eyebrows: Martel Sans, 10px, UPPERCASE, 0.3em tracking, primary color — e.g. `EXPERTISE`, `BUNDLES`
- Script accent line (WindSong): decorative lead-in before major headings — e.g. *"Social Media Management"* or *"Let's work together"*
- CTA copy: Imperative, action-first — "Kostenloses Erstgespräch buchen", "Jetzt anfragen", "Termin Vereinbaren"
- Bundle names use English titles: "The Foundation", "The Growth", "The Authority" — then German description
- Taglines ALL CAPS: `DER STILVOLLE GRUNDSTEIN FÜR EURE DIGITALE PRÄSENZ.`

### Casing rules
| Element | Rule |
|---|---|
| H1/H2 | Sentence case (German capitalisation) |
| Labels/eyebrows | ALL CAPS, Martel Sans, wide tracking |
| Bundle taglines | ALL CAPS |
| Body | Normal German capitalisation |
| CTAs | Title-style, imperative verb first |

---

## VISUAL FOUNDATIONS

### Color
Five core brand colors (see `colors_and_type.css` for full token set):
| Name | Hex | Role |
|---|---|---|
| Wild Raspberry | `#86354D` | Primary — CTAs, accents, key UI |
| Mellow Apricot | `#F0BB7D` | Tertiary — warmth, highlights, hover tints |
| Ash Gray | `#B7C0B8` | Neutral — secondary text, borders |
| Cotton White | `#FFFBF7` | Background — warm off-white, card surface |
| Charleston Green | `#25272A` | Dark — inverse sections, footer background |

- **Background:** Always warm white (`#FFFBF7` / `#fdf9f5`) — never cold white
- **Dark sections** (Contact, inverse): Charleston Green `#31302e` / `#25272A`
- **Tints:** Colors used at low opacity (4–15%) for decorative blobs, icon backgrounds, hover fills
- **No gradients on color surfaces** — only the primary CTA button uses a subtle `from-primary to-primary-container` gradient

### Typography
| Role | Font | Weight | Style | Size |
|---|---|---|---|---|
| Display / H1 / H2 / H3 | Playfair Display | 400 | Often italic for emphasis words | clamp responsive |
| Body | Poppins | 300 (Light) | Normal | 15px / 18px |
| Labels / eyebrows / tags | Martel Sans | 300 | UPPERCASE + tracking 0.1–0.3em | 10px |
| Script accent | WindSong | 400 | — | 2–4rem |

- **Italic** is used intentionally in headings to highlight a key word — e.g. `<span class="italic">Mehrwert</span>`
- WindSong replaces the licensed "Signature Moments" font from the brand manual
- Minimum body font size: 13px (list items); heading scale starts at 24px minimum

### Spacing & Layout
- Max content width: `max-w-7xl` (1280px)
- Section padding: `py-32 px-8` (128px vertical, 32px horizontal)
- Grid: 2-col on desktop (`lg:grid-cols-2`), stacked on mobile
- Cards: `rounded-[24px]` (24px radius), `p-10–12` inner padding
- Buttons: `rounded-full` (pill), `px-8 py-4` or `px-6 py-2`

### Cards
- Background: `#FFFBF7` or `surface-container-lowest` (`#fff`)
- Border radius: 20–24px (`rounded-[20px]`, `rounded-[24px]`)
- Shadow: `0 10px 40px -10px rgba(134, 53, 77, 0.08)` — warm raspberry tint
- Hover: `-translate-y-2` or `-translate-y-3` (lift) with `transition-all duration-500`
- Featured card: `border-2 border-primary` + `ring-8 ring-primary/5`
- No border on standard cards — shadow-only definition

### Backgrounds & Textures
- Primary background: warm Cotton White (`#FFFBF7`)
- Decorative background blobs: `organic-blob` class (freeform border-radius), very low opacity (4–6%), primary or tertiary color, with `animate-pulse` on some
- No photography backgrounds, no dark textures
- Section alternation: white → `surface-container-low/50` → `inverse-surface` (dark)

### Animation
- **Reveal:** `fadeInUp` — `opacity: 0 → 1`, `translateY(24px → 0)`, `0.6s ease-out`
- **Stagger delays:** 0, 0.1s, 0.2s, 0.3s for sequential elements
- **Hover lifts:** `-translate-y-2` / `-translate-y-3` on cards
- **Hero image:** blob rotates `3deg` on group hover (`transition-transform duration-700`)
- **Easing:** `ease-out` for reveals; standard `transition-all` for hover states
- **Duration:** 300ms for colors, 500ms for transforms, 600ms for reveals
- No bounces, no spring physics — smooth and elegant

### Hover & Press States
- **Links:** `text-on-surface/70 → text-primary` color transition
- **CTA buttons:** `hover:scale-[1.02]` (primary) or `hover:bg-primary hover:text-white` (ghost)
- **Cards:** lift `-translate-y-2`, only on `@media(hover:hover)` — touch devices excluded
- **Nav items:** color to primary, `duration-300`

### Borders
- Standard: `border-outline-variant/30` (`#d9c1c4` at 30%) — very subtle
- Dark section borders: `border-surface-variant/20`
- No heavy borders — borders are decorative dividers only

### Shadows
- Editorial: `0px 12px 32px rgba(134, 53, 77, 0.06)` — used on primary CTA
- Card: `0 10px 40px -10px rgba(134, 53, 77, 0.08)` — standard card
- All shadows tinted warm raspberry — never grey/black

### Glass & Blur
- Navigation: `backdrop-filter: blur(24px)` + `rgba(253, 249, 245, 0.8)` — warm glass nav
- Dark form overlay: `bg-surface-bright/10` + border — frosted dark glass

### Corner Radii
- Buttons: `9999px` (full pill)
- Cards: `20–24px`
- Form inputs: `12px` (`rounded-xl`)
- Small badges/tags: `9999px`
- Default: `4px`

### Imagery
- **Warm, natural color grading** — soft, slightly desaturated, earthy tones
- **Hero image:** portrait of Jana, organic blob frame, `object-top` crop
- **Social profile images:** professional yet personal, warm lighting
- No stock photography, no cold or blue-tinted imagery

### Icon style
- Custom SVGs: botanical/organic shapes (potted plant, florist/leaf), social media butterfly motif
- Stroke style: `stroke-width: 1.5`, round caps/joins for utility icons
- Fill style for decorative brand icons
- Icon in circle background: `bg-primary/5 rounded-full` — very subtle tint

---

## ICONOGRAPHY

The brand has **two icon systems**:

### 1. Custom Brand Icons (in `assets/icons/`)
Eight custom SVG icons provided in two variants:
- **Plain** (`JG_Icon1.svg` … `JG_Icon8.svg`) — icon only, use on any background
- **With circle** (`JG_Icon1_mitKreis.svg` … `JG_Icon8_mitKreis.svg`) — icon in a decorative circular frame, for use in section highlights, social media, PDFs

Usage: website section icons, social media highlights, print materials.

### 2. Inline SVG utility icons (from codebase)
Defined in `jana-glawischnig-web/src/components/icons/Icons.tsx`:
- `IconCheck` — simple checkmark, stroke, 18px
- `IconCheckCircle` — circle checkmark, stroke, 16px
- `IconFlorist` — decorative organic plant/leaf illustration, fill, 48px
- `IconSocialMedia` — decorative butterfly/social motif, fill, 48px
- `IconPottedPlant` — potted plant, fill, 80px, 20% opacity (decorative overlay)
- `IconGridView` — grid layout, fill, 24px
- `IconMenu` / `IconClose` — hamburger/X, stroke 1.5, 24px

**No icon font or CDN icon set used** — all icons are hand-crafted inline SVGs.  
**Emoji:** Never used in production UI.  
**Unicode characters:** Not used as icons.

---

## File Index

```
/
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← All CSS custom properties + Tailwind config snippet
├── assets/
│   ├── logos/
│   │   ├── JG_Hauptlogo.svg            ← Primary logo (horizontal)
│   │   ├── JG_Isotyp.svg               ← Isotype (standalone mark)
│   │   ├── JG_Isotyp_Handgeschrieben.svg ← Handwritten isotype variant
│   │   └── [Sekundärlogo files in uploads/ — ä path issue]
│   ├── icons/
│   │   ├── JG_Icon1–8.svg              ← Plain brand icons
│   │   └── JG_Icon1–8_mitKreis.svg     ← Brand icons with circle frame
│   └── images/
│       ├── JG_SocialMediaProfilbild_1.jpg
│       └── JG_SocialMediaProfilbild_2.jpg
├── preview/
│   ├── colors-primary.html             ← Primary color swatches
│   ├── colors-surface.html             ← Surface/background scale
│   ├── colors-semantic.html            ← Semantic colors (error, success…)
│   ├── type-scale.html                 ← Full typography scale
│   ├── type-specimen-playfair.html     ← Playfair Display specimen
│   ├── type-specimen-body.html         ← Poppins + Martel + WindSong
│   ├── spacing-tokens.html             ← Spacing + radius + shadow tokens
│   ├── components-buttons.html         ← Button variants
│   ├── components-cards.html           ← Card variants
│   ├── components-forms.html           ← Form elements
│   ├── components-badges.html          ← Badges, tags, progress
│   ├── brand-logos.html                ← Logo showcase
│   └── brand-icons.html               ← Icon set showcase
└── ui_kits/
    └── website/
        ├── README.md                   ← Website UI kit notes
        └── index.html                  ← Interactive website prototype
```
