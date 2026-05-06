/**
 * Header Component
 * Figma Component: Twigma/Header
 * Code Connect: .figma/header.figma.js
 */

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { prefetchAboutPage, prefetchCartPage } from '../utils/routePrefetch.js'
import styles from './Header.module.css'

export function Header() {
  const location = useLocation()
  const { itemCount } = useCart()

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoText}>Twigma</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Shop</Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? styles.active : ''}
            onMouseEnter={prefetchAboutPage}
            onFocus={prefetchAboutPage}
            onTouchStart={prefetchAboutPage}
          >
            About
          </Link>
        </nav>
        <div className={styles.actions}>
          <Link
            to="/cart"
            className={styles.cartBtn}
            aria-label={`Cart${itemCount ? `, ${itemCount} items` : ''}`}
            onMouseEnter={prefetchCartPage}
            onFocus={prefetchCartPage}
            onTouchStart={prefetchCartPage}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span className={`${styles.cartCount} ${itemCount === 0 ? styles.cartCountEmpty : ''}`}>
              {itemCount > 99 ? '99+' : itemCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
