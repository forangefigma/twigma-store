/**
 * ProductDetail Component
 * Figma Component: Twigma/ProductDetail
 * Code Connect: .figma/product-detail.figma.js
 */

import React, { useState } from 'react'
import { Badge } from './Badge.jsx'
import { Button } from './Button.jsx'
import { ProductIllustration } from './ProductIllustration.jsx'
import { useCart } from '../context/CartContext.jsx'
import styles from './ProductDetail.module.css'

export function ProductDetail({ product }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const badgeVariant = product.badge === 'Bestseller' ? 'bestseller'
    : product.badge === 'New' ? 'new'
    : product.badge === 'Just Added' ? 'new'
    : 'default'

  function handleAdd() {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className={styles.detail}>
      <div className={styles.imageCol}>
        <div className={styles.imageWrap}>
          <ProductIllustration
            productSlug={product.images?.primary || product.slug}
            color={product.color}
            accentColor={product.accentColor}
            size="lg"
          />
        </div>
      </div>

      <div className={styles.infoCol}>
        {product.badge && (
          <Badge variant={badgeVariant}>{product.badge}</Badge>
        )}
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Materials</span>
            <span className={styles.metaValue}>{product.materials.join(', ')}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Dimensions</span>
            <span className={styles.metaValue}>{product.dimensions}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Availability</span>
            <span className={styles.metaValue} style={{ color: 'var(--color-moss)', fontWeight: 500 }}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        <div className={styles.qtyRow}>
          <label className={styles.qtyLabel} htmlFor="product-qty">
            Quantity
          </label>
          <select
            id="product-qty"
            className={styles.qtySelect}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            disabled={!product.inStock}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <Button
          size="lg"
          fullWidth
          onClick={handleAdd}
          disabled={!product.inStock}
        >
          {added ? '✓ Added to Cart' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  )
}
