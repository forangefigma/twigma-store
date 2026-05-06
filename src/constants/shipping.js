export const FREE_SHIPPING_MIN_USD = 60
export const FLAT_SHIPPING_USD = 8

export function shippingForSubtotal(subtotal) {
  if (subtotal <= 0) return 0
  return subtotal >= FREE_SHIPPING_MIN_USD ? 0 : FLAT_SHIPPING_USD
}
