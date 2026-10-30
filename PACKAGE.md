# @jana/design — Nutzung als Paket

Quelle ist der Claude-Design-Export (alles außer `package.json`, `tailwind.preset.js`, `typography.js`, `scripts/`, `tokens.css`, dieser Datei).

**Neuen Export einspielen:** ZIP-Inhalt drüberkopieren → `npm run sync` (erzeugt `tokens.css`, prüft Preset-Farben und Typo-Skala) → Version in `package.json` hochzählen → commit, `git tag vX.Y.Z`, push mit Tags → in den Apps den Tag in `package.json` anheben, `npm install`.

**In einer App:**
- `package.json`: `"@jana/design": "github:fabianhutter1996/jana-glawischnig-design#vX.Y.Z"`
- `tailwind.config.ts`: `presets: [require('@jana/design/tailwind.preset')]`
- `layout.tsx`: `import '@jana/design/tokens.css'` vor `./globals.css`; Fonts per `next/font/google` mit `variable: '--font-playfair'` usw., Klassen auf `<body>` (nicht `<html>`, sonst gewinnen die Fallbacks aus `tokens.css`).

**Typografie (ab v1.1.0, `text-label` ab v1.2.0):** Das Preset liefert die Typo-Skala aus `tokens.css` als Klassen — keine Tailwind-Standardgrößen (`text-sm`, `text-4xl` …) für Text nutzen.

| Klasse | Rolle |
|---|---|
| `text-display` | Hero-Statement, Playfair kursiv |
| `text-h1` · `text-h2` · `text-h3` | Überschriften, Playfair 400, gerade — kursiv nur ein Betonungswort (`<em className="italic">`) |
| `text-eyebrow` | Martel 300, 10 px, UPPERCASE, 0.3em — Section- und Card-Eyebrows |
| `text-label` | wie Eyebrow, aber 0.15em — Buttons, Nav-Links, Chips, Formular-Labels, Footer-Links (ab v1.2.0) |
| `text-body` · `text-body-lg` | Fließtext Poppins 300 |
| `text-caption` | Bildunterschrift, Kleingedrucktes |
| `text-script` | WindSong-Akzent |

- `body` bekommt automatisch Poppins 300 / 15 px / 1.7 — eigene `body`-Schriftregeln in `globals.css` entfernen.
- Poppins und Martel per next/font mit Gewicht `300` laden.
- Farbe kommt nicht mit (`text-eyebrow text-primary`). Utilities wie `italic` oder `md:text-5xl` überschreiben die Klassen.
- Neue Token-Gruppe im Export → `typography.js` ergänzen, sonst bricht `npm run sync` ab.
