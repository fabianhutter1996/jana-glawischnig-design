// Typo-Skala als Tailwind-Klassen. Werte per var() aus tokens.css — Apps müssen tokens.css importieren.
// `npm run sync` prüft, dass jede Variable existiert und jedes `--text-*`-Token hier genutzt wird.
//
// Schriftfamilie NICHT über `--text-*-family`: die wird auf :root aufgelöst, next/font setzt
// `--font-playfair` usw. aber erst auf <body> → Fallback statt geladener Schrift. Darum Tailwinds
// fontFamily (`var(--font-playfair)` …); welche Rolle eine Token-Gruppe hat, steht hier:
const family = {
  display:    'headline',
  h1:         'headline',
  h2:         'headline',
  h3:         'headline',
  subheading: 'label',
  body:       'body',
  caption:    'body',
  script:     'script',
}

function build(fontFamily) {
  const v = name => `var(--text-${name})`
  const font = group => [].concat(fontFamily[family[group]]).join(', ')

  const scale = group => ({
    fontFamily: font(group),
    fontSize:   v(`${group}-size`),
    fontWeight: v(`${group}-weight`),
    lineHeight: v(`${group}-leading`),
  })
  const body = scale('body')

  return {
    base: { body },
    utilities: {
      '.text-display': { ...scale('display'), fontStyle: v('display-style') },
      '.text-h1':      scale('h1'),
      '.text-h2':      scale('h2'),
      '.text-h3':      scale('h3'),
      // Token-Gruppe heißt im Export „subheading", in den Apps „Eyebrow"
      '.text-eyebrow': { ...scale('subheading'), textTransform: v('subheading-case'), letterSpacing: v('subheading-spacing') },
      '.text-body':    body,
      '.text-body-lg': { ...body, fontSize: v('body-lg-size'), lineHeight: v('body-lg-leading') },
      '.text-caption': scale('caption'),
      '.text-script':  scale('script'),
    },
  }
}

module.exports = { family, build }
