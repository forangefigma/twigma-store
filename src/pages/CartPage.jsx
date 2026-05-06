import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { Button } from '../components/Button.jsx'
import { ProductIllustration } from '../components/ProductIllustration.jsx'
import { FREE_SHIPPING_MIN_USD, FLAT_SHIPPING_USD, shippingForSubtotal } from '../constants/shipping.js'
import styles from './CartPage.module.css'

export function CartPage() {
  const navigate = useNavigate()
  const { lines, subtotal, setLineQuantity, removeLine } = useCart()
  const shipping = shippingForSubtotal(subtotal)
  const total = subtotal + shipping
  const untilFree = Math.max(0, FREE_SHIPPING_MIN_USD - subtotal)

  return (
    <main className="container">
      <nav className={styles.breadcrumb}>
        <Link to="/">Shop</Link>
        <span>›</span>
        <span>Cart</span>
      </nav>

      <h1 className={styles.title}>Your cart</h1>

      {lines.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>Your cart is empty.</p>
          <Button size="lg" onClick={() => navigate('/')}>
            Continue shopping
          </Button>
        </div>
      ) : (
        <div className={styles.layout}>
          <ul className={styles.list}>
            {lines.map(({ product, quantity, lineTotal }) => (
              <li key={product.id} className={styles.row}>
                <Link to={`/products/${product.slug}`} className={styles.thumb}>
                  <ProductIllustration
                    productSlug={product.images?.primary || product.slug}
                    color={product.color}
                    accentColor={product.accentColor}
                    size="sm"
                  />
                </Link>
                <div className={styles.rowBody}>
                  <div className={styles.rowTop}>
                    <Link to={`/products/${product.slug}`} className={styles.rowName}>
                      {product.name}
                    </Link>
                    <p className={styles.rowPrice}>${lineTotal}</p>
                  </div>
                  <p className={styles.rowUnit}>${product.price} each</p>
                  <div className={styles.rowActions}>
                    <label className={styles.qtyLabel}>
                      <span className={styles.visuallyHidden}>Quantity</span>
                      <select
                        className={styles.qtySelect}
                        value={quantity}
                        onChange={e => setLineQuantity(product.id, Number(e.target.value))}
                        aria-label={`Quantity for ${product.name}`}
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button
                      type="button"
                      className={styles.remove}
                      onClick={() => removeLine(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Order summary</h2>
            {untilFree > 0 && (
              <p className={styles.freeShipNote}>
                Add <strong>${untilFree}</strong> more for free shipping (orders over ${FREE_SHIPPING_MIN_USD}).
              </p>
            )}
            {untilFree === 0 && subtotal > 0 && (
              <p className={styles.freeShipYay}>You qualify for free shipping.</p>
            )}
            <dl className={styles.totals}>
              <div className={styles.totalRow}>
                <dt>Subtotal</dt>
                <dd>${subtotal}</dd>
              </div>
              <div className={styles.totalRow}>
                <dt>Shipping</dt>
                <dd>{shipping === 0 ? 'Free' : `$${FLAT_SHIPPING_USD}`}</dd>
              </div>
              <div className={`${styles.totalRow} ${styles.totalGrand}`}>
                <dt>Total</dt>
                <dd>${total}</dd>
              </div>
            </dl>
            <Button size="lg" fullWidth onClick={() => navigate('/checkout')}>
              Checkout
            </Button>
            <button type="button" className={styles.continue} onClick={() => navigate('/')}>
              ← Continue shopping
            </button>
          </aside>
        </div>
      )}
    </main>
  )
}
