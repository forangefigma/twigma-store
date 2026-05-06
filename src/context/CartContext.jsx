import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { productsById } from '../data/products.js'

const STORAGE_KEY = 'twigma-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      line => line && typeof line.productId === 'string' && typeof line.quantity === 'number' && line.quantity > 0
    )
  } catch {
    return []
  }
}

function saveCart(lines) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  } catch {
    /* ignore quota / private mode */
  }
}

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [lines, setLines] = useState(loadCart)

  useEffect(() => {
    saveCart(lines)
  }, [lines])

  const addItem = useCallback((product, quantity = 1) => {
    if (!product?.id || !product.inStock) return
    const q = Math.max(1, Math.min(99, Math.floor(Number(quantity)) || 1))
    setLines(prev => {
      const i = prev.findIndex(l => l.productId === product.id)
      if (i >= 0) {
        const next = [...prev]
        const merged = Math.min(99, next[i].quantity + q)
        next[i] = { ...next[i], quantity: merged }
        return next
      }
      return [...prev, { productId: product.id, quantity: q }]
    })
  }, [])

  const setLineQuantity = useCallback((productId, quantity) => {
    const q = Math.floor(Number(quantity))
    if (q < 1) {
      setLines(prev => prev.filter(l => l.productId !== productId))
      return
    }
    setLines(prev =>
      prev.map(l => (l.productId === productId ? { ...l, quantity: Math.min(99, q) } : l))
    )
  }, [])

  const removeLine = useCallback(productId => {
    setLines(prev => prev.filter(l => l.productId !== productId))
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const resolvedLines = useMemo(() => {
    return lines
      .map(line => {
        const product = productsById.get(line.productId)
        if (!product) return null
        return {
          ...line,
          product,
          lineTotal: product.price * line.quantity,
        }
      })
      .filter(Boolean)
  }, [lines])

  const itemCount = useMemo(
    () => resolvedLines.reduce((sum, l) => sum + l.quantity, 0),
    [resolvedLines]
  )

  const subtotal = useMemo(
    () => resolvedLines.reduce((sum, l) => sum + l.lineTotal, 0),
    [resolvedLines]
  )

  const value = useMemo(
    () => ({
      lines: resolvedLines,
      itemCount,
      subtotal,
      addItem,
      setLineQuantity,
      removeLine,
      clearCart,
    }),
    [resolvedLines, itemCount, subtotal, addItem, setLineQuantity, removeLine, clearCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
