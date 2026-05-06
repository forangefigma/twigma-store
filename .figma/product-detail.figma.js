/**
 * Figma Code Connect — ProductDetail
 * Replace FIGMA_NODE_URL after design system creation.
 */

import figma from '@figma/code-connect'
import { ProductDetail } from '../src/components/ProductDetail.jsx'

figma.connect(ProductDetail, 'FIGMA_NODE_URL', {
  props: {
    product: figma.nestedProps('Product Data', {
      name:        figma.string('Name'),
      price:       figma.string('Price'),
      description: figma.string('Description'),
      badge:       figma.string('Badge'),
    }),
  },
  example: ({ product }) => (
    <ProductDetail product={product} />
  ),
})
