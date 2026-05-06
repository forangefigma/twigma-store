/**
 * Figma Code Connect — Footer
 * Replace FIGMA_NODE_URL after design system creation.
 */

import figma from '@figma/code-connect'
import { Footer } from '../src/components/Footer.jsx'

figma.connect(Footer, 'FIGMA_NODE_URL', {
  props: {},
  example: () => <Footer />,
})
