import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard.jsx'
import { Button } from '../components/Button.jsx'
import { products } from '../data/products.js'
import { prefetchAboutPage } from '../utils/routePrefetch.js'
import styles from './HomePage.module.css'

export function HomePage() {
  const navigate = useNavigate()
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>Handcrafted in the Pacific Northwest</p>
            <h1 className={styles.heroHeading}>
              Wear the<br/>
              <em>forest.</em>
            </h1>
            <p className={styles.heroSubtitle}>
              Twig accessories made from sustainably harvested botanicals.
              Each piece is unique — shaped by nature, finished by hand.
            </p>
            <div className={styles.heroActions}>
              <Button
                size="lg"
                onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop the Collection
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => navigate('/about')}
                onMouseEnter={prefetchAboutPage}
                onFocus={prefetchAboutPage}
                onTouchStart={prefetchAboutPage}
              >
                Our Story →
              </Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroOrb} />
            <div className={styles.heroBadgeFloat}>
              <span>✦</span> Since 2019
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="collection" className={styles.products}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Collection</h2>
            <p className={styles.sectionSubtitle}>
              {products.length} pieces, each one handmade.
            </p>
          </div>
          <div className={styles.grid}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Craft strip */}
      <section className={styles.strip}>
        <div className="container">
          <div className={styles.stripGrid}>
            {[
              { icon: '🌿', label: 'Sustainably Sourced', desc: 'All botanicals ethically harvested' },
              { icon: '✋', label: 'Handmade', desc: 'No two pieces are identical' },
              { icon: '📦', label: 'Free Shipping', desc: 'On all orders over $60' },
            ].map(item => (
              <div key={item.label} className={styles.stripItem}>
                <span className={styles.stripIcon}>{item.icon}</span>
                <div>
                  <p className={styles.stripLabel}>{item.label}</p>
                  <p className={styles.stripDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
