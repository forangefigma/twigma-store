/**
 * Figma Code Connect — ProductCard
 * Replace FIGMA_NODE_URL after design system creation.
 */

import figma from '@figma/code-connect'
import { ProductCard } from '../src/components/ProductCard.jsx'

figma.connect(ProductCard, 'FIGMA_NODE_URL', {
  props: {
    product: figma.nestedProps('Product Data', {
      name:             figma.string('Name'),
      price:            figma.string('Price'),
      shortDescription: figma.string('Description'),
      badge:            figma.string('Badge'),
    }),
  },
  example: ({ product }) => (
    <ProductCard product={product} />
  ),
})
