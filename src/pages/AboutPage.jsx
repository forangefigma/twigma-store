import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import styles from './AboutPage.module.css'

export function AboutPage() {
  const navigate = useNavigate()
  return (
    <main className="container">
      <article className={styles.article}>
        <p className={styles.eyebrow}>Our story</p>
        <h1 className={styles.title}>Twigma</h1>
        <p className={styles.lead}>
          We started in a small studio outside Portland, turning fallen branches and wind-pruned
          sprigs into jewelry you can actually wear every day.
        </p>
        <p className={styles.body}>
          Every piece is shaped by hand: sourced with care, finished with natural oils and waxes,
          and made to celebrate the irregular beauty of real wood and bark.
        </p>
        <Button size="lg" onClick={() => navigate('/')}>
          Shop the collection
        </Button>
        <p className={styles.back}>
          <Link to="/">← Back to shop</Link>
        </p>
      </article>
    </main>
  )
}
