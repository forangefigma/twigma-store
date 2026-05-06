/**
 * Twigma Typography Tokens
 * Figma Variable Collection: twigma/typography
 *
 * Font families, sizes, weights, and line heights.
 * Maps to Figma Text Styles.
 */

export const typography = {
  fontFamily: {
    display: "'Playfair Display', Georgia, serif",  // Headings, hero text
    body:    "'DM Sans', system-ui, sans-serif",     // Body copy, UI
    mono:    "'Courier New', Courier, monospace",    // Prices, codes
  },

  fontSize: {
    xs:   '0.75rem',   // 12px
    sm:   '0.875rem',  // 14px
    base: '1rem',      // 16px
    lg:   '1.125rem',  // 18px
    xl:   '1.25rem',   // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '4rem',     // 64px
  },

  fontWeight: {
    light:   300,
    regular: 400,
    medium:  500,
    bold:    700,
  },

  lineHeight: {
    tight:   1.2,
    snug:    1.375,
    normal:  1.5,
    relaxed: 1.625,
    loose:   2,
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight:   '-0.025em',
    normal:  '0em',
    wide:    '0.025em',
    wider:   '0.05em',
    widest:  '0.1em',
  },
}
