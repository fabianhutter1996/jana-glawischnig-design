# @jana/design — Nutzung als Paket

Quelle ist der Claude-Design-Export (alles außer `package.json`, `tailwind.preset.js`, `scripts/`, `tokens.css`, dieser Datei).

**Neuen Export einspielen:** ZIP-Inhalt drüberkopieren → `npm run sync` (erzeugt `tokens.css`, prüft Preset-Farben) → Version in `package.json` hochzählen → commit, `git tag vX.Y.Z`, push mit Tags → in den Apps den Tag in `package.json` anheben, `npm install`.

**In einer App:**
- `package.json`: `"@jana/design": "github:fabianhutter1996/jana-glawischnig-design#vX.Y.Z"`
- `tailwind.config.ts`: `presets: [require('@jana/design/tailwind.preset')]`
- `layout.tsx`: `import '@jana/design/tokens.css'` vor `./globals.css`; Fonts per `next/font/google` mit `variable: '--font-playfair'` usw., Klassen auf `<body>` (nicht `<html>`, sonst gewinnen die Fallbacks aus `tokens.css`).
