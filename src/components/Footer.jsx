/**
 * Footer Component
 * Figma Component: Twigma/Footer
 * Code Connect: .figma/footer.figma.js
 */

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoText}>Twigma</span>
          <p className={styles.tagline}>Nature, worn with intention.</p>
        </div>
        <nav className={styles.links}>
          <Link to="/">Shop</Link>
          <Link to="/about">About</Link>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} Twigma. All rights reserved.</p>
      </div>
    </footer>
  )
}
