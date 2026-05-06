import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { Button } from '../components/Button.jsx'
import { shippingForSubtotal } from '../constants/shipping.js'
import { persistOrder, makeOrderId } from '../utils/orders.js'
import styles from './CheckoutPage.module.css'

const initialForm = {
  email: '',
  fullName: '',
  address1: '',
  city: '',
  state: '',
  zip: '',
}

export function CheckoutPage() {
  const navigate = useNavigate()
  const { lines, subtotal, clearCart } = useCart()
  const shipping = shippingForSubtotal(subtotal)
  const total = subtotal + shipping
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (lines.length === 0) {
    return (
      <main className="container">
        <nav className={styles.breadcrumb}>
          <Link to="/">Shop</Link>
          <span>›</span>
          <Link to="/cart">Cart</Link>
          <span>›</span>
          <span>Checkout</span>
        </nav>
        <h1 className={styles.title}>Checkout</h1>
        <p className={styles.empty}>Your cart is empty.</p>
        <Button size="lg" onClick={() => navigate('/cart')}>
          View cart
        </Button>
      </main>
    )
  }

  function update(field, value) {
    setForm(f => ({ ...f, [field]: value }))
    setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { email, fullName, address1, city, state, zip } = form
    if (!email.trim() || !fullName.trim() || !address1.trim() || !city.trim() || !state.trim() || !zip.trim()) {
      setError('Please fill in all fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)
    const id = makeOrderId()
    const order = {
      id,
      createdAt: new Date().toISOString(),
      email: email.trim(),
      shipping: {
        fullName: fullName.trim(),
        address1: address1.trim(),
        city: city.trim(),
        state: state.trim(),
        zip: zip.trim(),
      },
      items: lines.map(({ product, quantity, lineTotal }) => ({
        productId: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        quantity,
        lineTotal,
      })),
      subtotal,
      shippingCost: shipping,
      total,
    }
    persistOrder(order)
    clearCart()
    navigate(`/order/${id}`)
  }

  return (
    <main className="container">
      <nav className={styles.breadcrumb}>
        <Link to="/">Shop</Link>
        <span>›</span>
        <Link to="/cart">Cart</Link>
        <span>›</span>
        <span>Checkout</span>
      </nav>

      <h1 className={styles.title}>Checkout</h1>
      <p className={styles.demoNote}>
        Demo store — no payment is processed. Orders are saved in this browser only.
      </p>

      <div className={styles.layout}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Contact</legend>
            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={e => update('email', e.target.value)}
              />
            </label>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Shipping</legend>
            <label className={styles.label}>
              Full name
              <input
                className={styles.input}
                type="text"
                name="name"
                autoComplete="name"
                value={form.fullName}
                onChange={e => update('fullName', e.target.value)}
              />
            </label>
            <label className={styles.label}>
              Address
              <input
                className={styles.input}
                type="text"
                name="address"
                autoComplete="address-line1"
                value={form.address1}
                onChange={e => update('address1', e.target.value)}
              />
            </label>
            <div className={styles.row2}>
              <label className={styles.label}>
                City
                <input
                  className={styles.input}
                  type="text"
                  autoComplete="address-level2"
                  value={form.city}
                  onChange={e => update('city', e.target.value)}
                />
              </label>
              <label className={styles.label}>
                State
                <input
                  className={styles.input}
                  type="text"
                  autoComplete="address-level1"
                  value={form.state}
                  onChange={e => update('state', e.target.value)}
                />
              </label>
              <label className={styles.label}>
                ZIP
                <input
                  className={styles.input}
                  type="text"
                  autoComplete="postal-code"
                  value={form.zip}
                  onChange={e => update('zip', e.target.value)}
                />
              </label>
            </div>
          </fieldset>

          {error && <p className={styles.error} role="alert">{error}</p>}

          <Button type="submit" size="lg" fullWidth disabled={submitting}>
            {submitting ? 'Placing order…' : `Place order · $${total}`}
          </Button>
        </form>

        <aside className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order summary</h2>
          <ul className={styles.summaryList}>
            {lines.map(({ product, quantity, lineTotal }) => (
              <li key={product.id} className={styles.summaryLine}>
                <span>
                  {product.name} × {quantity}
                </span>
                <span>${lineTotal}</span>
              </li>
            ))}
          </ul>
          <dl className={styles.summaryTotals}>
            <div className={styles.summaryRow}>
              <dt>Subtotal</dt>
              <dd>${subtotal}</dd>
            </div>
            <div className={styles.summaryRow}>
              <dt>Shipping</dt>
              <dd>{shipping === 0 ? 'Free' : `$${shipping}`}</dd>
            </div>
            <div className={`${styles.summaryRow} ${styles.summaryGrand}`}>
              <dt>Total</dt>
              <dd>${total}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </main>
  )
}
