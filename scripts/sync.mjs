// Nach jedem Claude-Design-Export laufen lassen: `npm run sync`
// 1. erzeugt tokens.css aus colors_and_type.css (ohne Google-Fonts-@import, ohne Tailwind-Snippet)
// 2. bricht ab, wenn eine Farbe im Tailwind-Preset nicht zu colors_and_type.css passt
import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const src = readFileSync(new URL('../colors_and_type.css', import.meta.url), 'utf8')

const tokens = src
  .replace(/\/\* ─── Google Fonts[\s\S]*?(?=\/\* ─── Font Variables)/, '')
  .replace(/\/\* ─── Tailwind v3 config extension[\s\S]*$/, '')
  .replace(' * colors_and_type.css', ' * tokens.css — GENERIERT aus colors_and_type.css via `npm run sync`, nicht von Hand ändern.\n * Fonts laden die Apps per next/font/google (kein @import).')
if (tokens.includes('googleapis')) throw new Error('Google-Fonts-@import nicht entfernt')
writeFileSync(new URL('../tokens.css', import.meta.url), tokens.trimEnd() + '\n')

const cssColors = Object.fromEntries(
  [...src.matchAll(/--color-([\w-]+):\s*(#[0-9a-fA-F]{6})/g)].map(([, k, v]) => [k, v.toLowerCase()])
)
const { theme } = createRequire(import.meta.url)('../tailwind.preset.js')
const errors = Object.entries(theme.extend.colors)
  .filter(([k, v]) => cssColors[k] !== v.toLowerCase())
  .map(([k, v]) => `${k}: preset ${v} ≠ css ${cssColors[k] ?? '(fehlt)'}`)
if (errors.length) throw new Error('Preset weicht ab:\n' + errors.join('\n'))
console.log(`tokens.css geschrieben, ${Object.keys(theme.extend.colors).length} Preset-Farben stimmen mit colors_and_type.css überein`)
