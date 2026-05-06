/**
 * Twigma Color Tokens
 * Figma Variable Collection: twigma/color
 *
 * These map directly to Figma Variables under the "Color" collection.
 * When you push this codebase via the Figma MCP, each token below
 * becomes a variable in your Figma design system.
 */

export const color = {
  // Brand
  brand: {
    bark:      '#3D2B1F', // Primary dark brown
    moss:      '#5A7A52', // Primary green
    clay:      '#B8693A', // Accent warm orange
    cream:     '#F5F0E8', // Light background
    parchment: '#EDE5D4', // Secondary background
  },

  // Neutrals
  neutral: {
    900: '#1A1207',
    800: '#2E2015',
    700: '#3D2B1F',
    600: '#5C4033',
    500: '#8A6E5C',
    400: '#B5998A',
    300: '#D4C4B8',
    200: '#EDE5D4',
    100: '#F5F0E8',
    50:  '#FDFAF5',
  },

  // Semantic
  semantic: {
    success: '#4A7C59',
    warning: '#C4813A',
    error:   '#A33B2A',
    info:    '#3A6B8A',
  },

  // Surface
  surface: {
    base:    '#FDFAF5',
    raised:  '#F5F0E8',
    overlay: '#EDE5D4',
  },

  // Text
  text: {
    primary:   '#1A1207',
    secondary: '#5C4033',
    muted:     '#8A6E5C',
    inverse:   '#FDFAF5',
  },
}
