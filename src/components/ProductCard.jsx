/**
 * ProductCard Component
 * Figma Component: Twigma/ProductCard
 * Code Connect: .figma/product-card.figma.js
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from './Badge.jsx'
import { ProductIllustration } from './ProductIllustration.jsx'
import { prefetchProductPage } from '../utils/routePrefetch.js'
import styles from './ProductCard.module.css'

export function ProductCard({ product }) {
  const badgeVariant = product.badge === 'Bestseller' ? 'bestseller'
    : product.badge === 'New' ? 'new'
    : product.badge === 'Just Added' ? 'new'
    : 'default'

  return (
    <Link
      to={`/products/${product.slug}`}
      className={styles.card}
      onMouseEnter={prefetchProductPage}
      onFocus={prefetchProductPage}
      onTouchStart={prefetchProductPage}
    >
      <div className={styles.imageWrap}>
        <ProductIllustration
          productSlug={product.images?.primary || product.slug}
          color={product.color}
          accentColor={product.accentColor}
          size="md"
        />
        {product.badge && (
          <div className={styles.badgeWrap}>
            <Badge variant={badgeVariant}>{product.badge}</Badge>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.shortDescription}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.cta}>View →</span>
        </div>
      </div>
    </Link>
  )
}
