let productPagePromise
let cartPagePromise
let checkoutPagePromise
let aboutPagePromise
let orderPagePromise

export function prefetchProductPage() {
  productPagePromise ||= import('../pages/ProductPage.jsx')
}

export function prefetchCartPage() {
  cartPagePromise ||= import('../pages/CartPage.jsx')
}

export function prefetchCheckoutPage() {
  checkoutPagePromise ||= import('../pages/CheckoutPage.jsx')
}

export function prefetchAboutPage() {
  aboutPagePromise ||= import('../pages/AboutPage.jsx')
}

export function prefetchOrderPage() {
  orderPagePromise ||= import('../pages/OrderConfirmationPage.jsx')
}
