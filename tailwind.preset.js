// Tailwind-Preset für alle Jana-Apps. Farben werden von `npm run sync` gegen colors_and_type.css geprüft.
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // ── Brand palette (raw) ──────────────────────────────────
        'wild-raspberry':   '#86354D',
        'mellow-apricot':   '#F0BB7D',
        'ash-gray':         '#B7C0B8',
        'cotton-white':     '#FFFBF7',
        'charleston-green': '#25272A',

        // ── Surface scale ────────────────────────────────────────
        'background':                '#fdf9f5',
        'surface':                   '#fdf9f5',
        'surface-bright':            '#fdf9f5',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#f7f3ef',
        'surface-container':         '#f1ede9',
        'surface-container-high':    '#ebe7e4',
        'surface-container-highest': '#e5e2de',
        'surface-variant':           '#e5e2de',
        'surface-dim':               '#ddd9d6',
        'surface-tint':              '#97425a',
        'on-surface':                '#1c1c19',
        'on-surface-variant':        '#544246',
        'on-background':             '#1c1c19',

        // ── Primary ──────────────────────────────────────────────
        'primary':                   '#691e36',
        'primary-container':         '#86354d',
        'primary-fixed':             '#ffd9e0',
        'primary-fixed-dim':         '#ffb1c3',
        'on-primary':                '#ffffff',
        'on-primary-fixed':          '#3f0019',
        'on-primary-fixed-variant':  '#792b43',
        'on-primary-container':      '#ffadc0',

        // ── Secondary ────────────────────────────────────────────
        'secondary':                  '#58605a',
        'secondary-container':        '#dce5dc',
        'secondary-fixed':            '#dce5dc',
        'secondary-fixed-dim':        '#c0c9c1',
        'on-secondary':               '#ffffff',
        'on-secondary-container':     '#5e6660',
        'on-secondary-fixed':         '#151d18',
        'on-secondary-fixed-variant': '#404943',

        // ── Tertiary ─────────────────────────────────────────────
        'tertiary':                   '#543300',
        'tertiary-container':         '#6f4916',
        'tertiary-fixed':             '#ffddb8',
        'tertiary-fixed-dim':         '#f2bd7f',
        'on-tertiary':                '#ffffff',
        'on-tertiary-container':      '#efba7c',
        'on-tertiary-fixed':          '#2b1700',
        'on-tertiary-fixed-variant':  '#633f0b',

        // ── Outline ──────────────────────────────────────────────
        'outline':         '#867276',
        'outline-variant': '#d9c1c4',

        // ── Inverse ──────────────────────────────────────────────
        'inverse-surface':    '#31302e',
        'inverse-on-surface': '#f4f0ec',
        'inverse-primary':    '#ffb1c3',

        // ── Status ───────────────────────────────────────────────
        'error':              '#ba1a1a',
        'error-container':    '#ffdad6',
        'on-error':           '#ffffff',
        'on-error-container': '#93000a',
        'success':            '#3d6b47',
        'warning':            '#7a5200',
      },
      fontFamily: {
        headline: ['var(--font-playfair)', 'serif'],
        body:     ['var(--font-poppins)', 'sans-serif'],
        label:    ['var(--font-martel)', 'sans-serif'],
        script:   ['var(--font-windsong)', 'cursive'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
        '2xl':   '1.5rem',
        full:    '9999px',
      },
      boxShadow: {
        subtle:    '0 2px 8px rgba(134, 53, 77, 0.04)',
        editorial: '0px 12px 32px rgba(134, 53, 77, 0.06)',
        card:      '0 10px 40px -10px rgba(134, 53, 77, 0.08)',
        elevated:  '0 20px 60px -15px rgba(134, 53, 77, 0.12)',
      },
      aspectRatio: {
        portrait: '9 / 16',
      },
    },
  },
}
