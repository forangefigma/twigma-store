/**
 * Figma Code Connect — Badge
 * Replace FIGMA_NODE_URL after design system creation.
 */

import figma from '@figma/code-connect'
import { Badge } from '../src/components/Badge.jsx'

figma.connect(Badge, 'FIGMA_NODE_URL', {
  props: {
    variant: figma.enum('Variant', {
      Default:    'default',
      New:        'new',
      Bestseller: 'bestseller',
      Sale:       'sale',
    }),
    children: figma.string('Label'),
  },
  example: ({ variant, children }) => (
    <Badge variant={variant}>{children}</Badge>
  ),
})
