# Website UI Kit — Jana Glawischnig

**Product:** Marketing website at [janaglawischnig.com](https://janaglawischnig.com)  
**Stack:** Next.js 14 + Tailwind CSS + Google Fonts  
**Source:** `jana-glawischnig-web/src/`

## Screens recreated in index.html

| Section | Description |
|---|---|
| Header | Fixed glass nav with logo, links, CTA pill button, mobile menu |
| Hero | 2-col grid: headline + script accent + dual CTA / portrait with blob frame |
| Services | 2-col service cards with numbered steps / checklist |
| Bundles | 3-col pricing cards, featured card with border highlight |
| Contact | Dark section (inverse surface), two-col form + calendar CTA |
| Footer | Logo, nav links, copyright |

## Components

- `Header` — glass-blur fixed nav, mobile hamburger
- `Hero` — fadeInUp staggered reveal, organic blob behind portrait
- `ServiceCard` — numbered list / checklist variants
- `BundleCard` — highlighted vs standard, "Meine Empfehlung" tag
- `ContactForm` — dark glass form with validation states
- `Footer` — minimal footer

## Notes

- Hero image is not available (not in codebase); placeholder used
- "TrustedBy" section omitted — no client logos available
- All copy is verbatim from the codebase
- Fonts loaded via Google Fonts (exact match to production)
