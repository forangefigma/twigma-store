import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrderById } from '../utils/orders.js'
import { Button } from '../components/Button.jsx'
import styles from './OrderConfirmationPage.module.css'

export function OrderConfirmationPage() {
  const navigate = useNavigate()
  const { orderId } = useParams()
  const order = useMemo(() => (orderId ? getOrderById(orderId) : null), [orderId])

  if (!order) {
    return (
      <main className="container">
        <h1 className={styles.title}>Order not found</h1>
        <p className={styles.muted}>We could not find that order in this browser.</p>
        <Button size="lg" onClick={() => navigate('/')}>
          Back to shop
        </Button>
      </main>
    )
  }

  const date = new Date(order.createdAt)
  const formatted = date.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  return (
    <main className="container">
      <div className={styles.card}>
        <p className={styles.eyebrow}>Thank you</p>
        <h1 className={styles.title}>Your order is confirmed</h1>
        <p className={styles.orderId}>
          Order <strong>{order.id}</strong>
        </p>
        <p className={styles.meta}>Confirmation sent to {order.email} · {formatted}</p>

        <h2 className={styles.sectionTitle}>Shipping to</h2>
        <address className={styles.address}>
          {order.shipping.fullName}
          <br />
          {order.shipping.address1}
          <br />
          {order.shipping.city}, {order.shipping.state} {order.shipping.zip}
        </address>

        <h2 className={styles.sectionTitle}>Items</h2>
        <ul className={styles.items}>
          {order.items.map(item => (
            <li key={`${item.productId}-${item.quantity}`} className={styles.itemRow}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>${item.lineTotal}</span>
            </li>
          ))}
        </ul>

        <dl className={styles.totals}>
          <div className={styles.totalRow}>
            <dt>Subtotal</dt>
            <dd>${order.subtotal}</dd>
          </div>
          <div className={styles.totalRow}>
            <dt>Shipping</dt>
            <dd>{order.shippingCost === 0 ? 'Free' : `$${order.shippingCost}`}</dd>
          </div>
          <div className={`${styles.totalRow} ${styles.grand}`}>
            <dt>Total</dt>
            <dd>${order.total}</dd>
          </div>
        </dl>

        <p className={styles.note}>
          This is a demo checkout. No payment was charged and nothing will be shipped.
        </p>

        <div className={styles.actions}>
          <Button size="lg" onClick={() => navigate('/')}>
            Continue shopping
          </Button>
        </div>
      </div>
    </main>
  )
}
