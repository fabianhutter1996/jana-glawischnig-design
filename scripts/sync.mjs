// Nach jedem Claude-Design-Export laufen lassen: `npm run sync`
// 1. erzeugt tokens.css aus colors_and_type.css (ohne Google-Fonts-@import, ohne Tailwind-Snippet)
// 2. bricht ab, wenn eine Farbe im Tailwind-Preset nicht zu colors_and_type.css passt
// 3. bricht ab, wenn typography.js eine `--text-*`-Variable nutzt, die es nicht gibt, oder eine auslässt
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
const require = createRequire(import.meta.url)
const { theme } = require('../tailwind.preset.js')
const errors = Object.entries(theme.extend.colors)
  .filter(([k, v]) => cssColors[k] !== v.toLowerCase())
  .map(([k, v]) => `${k}: preset ${v} ≠ css ${cssColors[k] ?? '(fehlt)'}`)
if (errors.length) throw new Error('Preset weicht ab:\n' + errors.join('\n'))

const cssType = new Set([...src.matchAll(/^\s*(--text-[\w-]+):/gm)].map(([, k]) => k))
const typography = require('../typography.js')
const { utilities } = typography.build(theme.extend.fontFamily)
const usedType = new Set(JSON.stringify(utilities).match(/--text-[\w-]+/g))
const typeErrors = []
// Familien: Token muss auf dieselbe Rolle zeigen wie typography.js
for (const [group, role] of Object.entries(typography.family)) {
  const key = `--text-${group}-family`
  const css = src.match(new RegExp(`${key}:\\s*var\\((--font-[\\w-]+)\\)`))?.[1]
  if (css !== `--font-${role}`) typeErrors.push(`${key}: typography.js --font-${role} ≠ css ${css ?? '(fehlt)'}`)
  usedType.add(key)
}
typeErrors.push(
  ...[...usedType].filter(k => !cssType.has(k)).map(k => `${k}: in typography.js, fehlt in css`),
  ...[...cssType].filter(k => !usedType.has(k)).map(k => `${k}: in css, von typography.js nicht genutzt`),
)
if (typeErrors.length) throw new Error('Typo-Skala weicht ab:\n' + typeErrors.join('\n'))

console.log(`tokens.css geschrieben, ${Object.keys(theme.extend.colors).length} Preset-Farben und ${cssType.size} Typo-Tokens (${Object.keys(utilities).length} Klassen) stimmen mit colors_and_type.css überein`)
