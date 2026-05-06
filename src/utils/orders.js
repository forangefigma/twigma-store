const ORDERS_KEY = 'twigma-orders'
const MAX_STORED = 40

export function persistOrder(order) {
  try {
    const raw = localStorage.getItem(ORDERS_KEY)
    const list = raw ? JSON.parse(raw) : []
    const next = Array.isArray(list) ? [order, ...list] : [order]
    localStorage.setItem(ORDERS_KEY, JSON.stringify(next.slice(0, MAX_STORED)))
  } catch {
    /* ignore */
  }
}

export function getOrderById(id) {
  try {
    const raw = localStorage.getItem(ORDERS_KEY)
    const list = raw ? JSON.parse(raw) : []
    if (!Array.isArray(list)) return null
    return list.find(o => o && o.id === id) || null
  } catch {
    return null
  }
}

export function makeOrderId() {
  const part = Date.now().toString(36).toUpperCase()
  return `TWG-${part}`
}
