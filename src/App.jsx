import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'
import { HomePage } from './pages/HomePage.jsx'

const ProductPage = lazy(async () => {
  const mod = await import('./pages/ProductPage.jsx')
  return { default: mod.ProductPage }
})

const CartPage = lazy(async () => {
  const mod = await import('./pages/CartPage.jsx')
  return { default: mod.CartPage }
})

const CheckoutPage = lazy(async () => {
  const mod = await import('./pages/CheckoutPage.jsx')
  return { default: mod.CheckoutPage }
})

const OrderConfirmationPage = lazy(async () => {
  const mod = await import('./pages/OrderConfirmationPage.jsx')
  return { default: mod.OrderConfirmationPage }
})

const AboutPage = lazy(async () => {
  const mod = await import('./pages/AboutPage.jsx')
  return { default: mod.AboutPage }
})

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order/:orderId" element={<OrderConfirmationPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
