/**
 * Badge Component
 * Figma Component: Twigma/Badge
 * Code Connect: .figma/badge.figma.js
 */

import React from 'react'
import styles from './Badge.module.css'

/**
 * @param {'default' | 'new' | 'bestseller' | 'sale'} variant
 */
export function Badge({ children, variant = 'default' }) {
  if (!children) return null
  return (
    <span className={[styles.badge, styles[variant]].join(' ')}>
      {children}
    </span>
  )
}
