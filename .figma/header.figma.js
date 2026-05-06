/**
 * Figma Code Connect — Header
 * Replace FIGMA_NODE_URL after design system creation.
 */

import figma from '@figma/code-connect'
import { Header } from '../src/components/Header.jsx'

figma.connect(Header, 'FIGMA_NODE_URL', {
  props: {},
  example: () => <Header />,
})
