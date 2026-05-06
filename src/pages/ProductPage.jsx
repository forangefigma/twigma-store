import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { products, productsBySlug } from '../data/products.js'
import { ProductDetail } from '../components/ProductDetail.jsx'
import { ProductCard } from '../components/ProductCard.jsx'
import styles from './ProductPage.module.css'

export function ProductPage() {
  const { slug } = useParams()
  const product = productsBySlug.get(slug)

  if (!product) return <Navigate to="/" replace />

  const related = products.filter(p => p.id !== product.id).slice(0, 2)

  return (
    <main className="container">
      <nav className={styles.breadcrumb}>
        <Link to="/">Shop</Link>
        <span>›</span>
        <span>{product.name}</span>
      </nav>

      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className={styles.related}>
          <h2 className={styles.relatedTitle}>You might also like</h2>
          <div className={styles.relatedGrid}>
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </main>
  )
}
