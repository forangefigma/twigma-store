/**
 * ProductIllustration Component
 * Figma Component: Twigma/ProductIllustration
 * Code Connect: .figma/product-illustration.figma.js
 *
 * Renders an SVG illustration placeholder for each product type.
 * In a production app these would be real product images.
 */

import React from 'react'

const illustrations = {
  'birch-bracelet': ({ color, accent }) => (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill={color} rx="8"/>
      {/* Bracelet ring */}
      <circle cx="150" cy="150" r="80" fill="none" stroke={accent} strokeWidth="16" strokeLinecap="round" strokeDasharray="8 6"/>
      <circle cx="150" cy="150" r="64" fill="none" stroke="#fff" strokeWidth="4" opacity="0.3"/>
      {/* Copper wire wraps */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x = 150 + 80 * Math.cos(rad)
        const y = 150 + 80 * Math.sin(rad)
        return <circle key={i} cx={x} cy={y} r="5" fill={accent} opacity="0.9"/>
      })}
      <text x="150" y="260" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fill={accent} opacity="0.7">birch twig · copper wire</text>
    </svg>
  ),

  'willow-cuff': ({ color, accent }) => (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill={color} rx="8"/>
      {/* Woven band */}
      {Array.from({length: 12}).map((_, i) => (
        <rect key={i} x="60" y={110 + i * 8} width="180" height="5"
          fill={i % 2 === 0 ? accent : '#fff'} opacity={i % 2 === 0 ? 0.85 : 0.4} rx="2"/>
      ))}
      {/* Clasp */}
      <rect x="228" y="108" width="18" height="86" fill="#C0C0C0" rx="4"/>
      <rect x="54"  y="108" width="18" height="86" fill="#C0C0C0" rx="4"/>
      <text x="150" y="260" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fill={accent} opacity="0.8">willow shoot · sterling silver</text>
    </svg>
  ),

  'cedar-earrings': ({ color, accent }) => (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill={color} rx="8"/>
      {/* Left earring */}
      <line x1="105" y1="60" x2="105" y2="90" stroke="#C9A84C" strokeWidth="3"/>
      <ellipse cx="105" cy="115" rx="18" ry="30" fill={accent} opacity="0.9"/>
      <ellipse cx="98" cy="108" rx="6" ry="10" fill="#fff" opacity="0.2"/>
      <line x1="99" y1="100" x2="111" y2="130" stroke="#fff" strokeWidth="1" opacity="0.3"/>
      {/* Right earring */}
      <line x1="195" y1="60" x2="195" y2="90" stroke="#C9A84C" strokeWidth="3"/>
      <ellipse cx="195" cy="115" rx="18" ry="30" fill={accent} opacity="0.9"/>
      <ellipse cx="188" cy="108" rx="6" ry="10" fill="#fff" opacity="0.2"/>
      <line x1="189" y1="100" x2="201" y2="130" stroke="#fff" strokeWidth="1" opacity="0.3"/>
      <text x="150" y="260" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fill={accent} opacity="0.8">preserved cedar · gold-dipped</text>
    </svg>
  ),

  'grove-pendant': ({ color, accent }) => (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill={color} rx="8"/>
      {/* Chain */}
      {Array.from({length: 16}).map((_, i) => (
        <ellipse key={i} cx={150} cy={50 + i * 7} rx="4" ry="3"
          fill="none" stroke="#B8860B" strokeWidth="1.5" transform={`rotate(${i % 2 * 90}, 150, ${50 + i * 7})`}/>
      ))}
      {/* Pendant - oak gall */}
      <circle cx="150" cy="175" r="40" fill={accent}/>
      <circle cx="150" cy="175" r="40" fill="none" stroke="#fff" strokeWidth="1" opacity="0.15"
        strokeDasharray="3 3"/>
      <circle cx="138" cy="162" r="14" fill="#fff" opacity="0.12"/>
      <circle cx="155" cy="182" r="8" fill="#000" opacity="0.08"/>
      <text x="150" y="260" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fill={accent} opacity="0.8">oak gall · bio-resin · brass</text>
    </svg>
  ),
}

export function ProductIllustration({ productSlug, color, accentColor, size = 'md' }) {
  const sizes = { sm: 120, md: 260, lg: 400 }
  const px = sizes[size] || sizes.md
  const Illustration = illustrations[productSlug]

  if (!Illustration) {
    return (
      <div style={{ width: px, height: px, background: color, borderRadius: 8,
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: accentColor, fontFamily: 'Georgia, serif', fontSize: 13, opacity: 0.6 }}>
          {productSlug}
        </span>
      </div>
    )
  }

  return (
    <div style={{ width: px, height: px, borderRadius: 8, overflow: 'hidden' }}>
      <Illustration color={color} accent={accentColor} />
    </div>
  )
}
