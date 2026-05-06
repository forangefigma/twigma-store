/**
 * Button Component
 * Figma Component: Twigma/Button
 * Code Connect: .figma/button.figma.js
 */

import React from 'react'
import styles from './Button.module.css'

/**
 * @param {'primary' | 'secondary' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg'} size
 * @param {boolean} fullWidth
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
