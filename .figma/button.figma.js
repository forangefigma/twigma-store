/**
 * Figma Code Connect — Button
 *
 * Replace FIGMA_NODE_URL with the actual Figma node URL after
 * the design system has been created in Figma (Act 1 of demo).
 *
 * To link: figma connect publish
 */

import figma from '@figma/code-connect'
import { Button } from '../src/components/Button.jsx'

figma.connect(Button, 'FIGMA_NODE_URL', {
  props: {
    variant: figma.enum('Variant', {
      Primary:   'primary',
      Secondary: 'secondary',
      Ghost:     'ghost',
    }),
    size: figma.enum('Size', {
      Small:  'sm',
      Medium: 'md',
      Large:  'lg',
    }),
    children: figma.string('Label'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ variant, size, children, disabled }) => (
    <Button variant={variant} size={size} disabled={disabled}>
      {children}
    </Button>
  ),
})
