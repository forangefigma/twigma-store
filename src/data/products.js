/**
 * Twigma Product Catalog
 *
 * DEMO NOTE (Act 2):
 * To demonstrate "Add Product #4" during the demo, uncomment the Grove Pendant
 * entry at the bottom of this file. This simulates a designer adding a new
 * product in Figma and syncing it back to code via the design system.
 */

export const products = [
  {
    id: 'twig-001',
    name: 'Birch Bundle Bracelet',
    slug: 'birch-bundle-bracelet',
    price: 48,
    badge: 'Bestseller',
    shortDescription: 'Hand-wrapped birch twigs, copper wire finish.',
    description:
      'Each Birch Bundle Bracelet is handcrafted from sustainably harvested birch twigs, carefully selected for their smooth bark and subtle silver-white tones. Bound with hand-spun copper wire, no two are exactly alike. Wear alone or stack with the Willow Cuff for a layered forest look.',
    materials: ['Birch twig', 'Copper wire', 'Beeswax finish'],
    dimensions: '6.5" circumference, adjustable',
    color: '#C8B9A2',
    accentColor: '#B5762A',
    inStock: true,
    images: {
      primary: 'birch-bracelet',
      alt: 'Birch Bundle Bracelet on natural linen background',
    },
  },
  {
    id: 'twig-002',
    name: 'Willow Weave Cuff',
    slug: 'willow-weave-cuff',
    price: 72,
    badge: 'New',
    shortDescription: 'Woven willow with sterling silver clasp.',
    description:
      'The Willow Weave Cuff is our most intricate piece — a tightly woven band of young willow shoots, steam-bent and dried to a perfect arc. A sterling silver clasp anchors each end, adding a refined contrast to the organic texture. Inspired by traditional basket-weaving techniques from the Pacific Northwest.',
    materials: ['Willow shoot', 'Sterling silver', 'Linseed oil finish'],
    dimensions: '1.5" wide, 7" circumference',
    color: '#8FAF7E',
    accentColor: '#5A7A52',
    inStock: true,
    images: {
      primary: 'willow-cuff',
      alt: 'Willow Weave Cuff on a mossy stone surface',
    },
  },
  {
    id: 'twig-003',
    name: 'Cedar Sprig Earrings',
    slug: 'cedar-sprig-earrings',
    price: 36,
    badge: null,
    shortDescription: 'Miniature cedar sprigs, gold-dipped stems.',
    description:
      'These dainty Cedar Sprig Earrings bring a bit of the forest to every outfit. Real cedar sprigs are preserved with a proprietary plant resin, then mounted on gold-dipped sterling silver hooks. Lightweight enough to wear all day, striking enough to be noticed.',
    materials: ['Preserved cedar', 'Gold-dipped sterling silver', 'Plant resin'],
    dimensions: '1.2" drop length',
    color: '#7B9E6A',
    accentColor: '#3D2B1F',
    inStock: true,
    images: {
      primary: 'cedar-earrings',
      alt: 'Cedar Sprig Earrings hanging from a wooden branch',
    },
  },

  // ─── ACT 2 DEMO: Uncomment to add Product #4 ────────────────────────────────
  // {
  //   id: 'twig-004',
  //   name: 'Grove Pendant Necklace',
  //   slug: 'grove-pendant-necklace',
  //   price: 95,
  //   badge: 'Just Added',
  //   shortDescription: 'Encased oak gall on a 16" brass chain.',
  //   description:
  //     'The Grove Pendant is our most statement piece yet. A single oak gall — nature\'s perfect sphere — is encased in hand-poured bio-resin and suspended from a 16" solid brass chain. Each gall is unique in texture and tone, making every pendant a one-of-a-kind wearable artifact.',
  //   materials: ['Oak gall', 'Bio-resin', 'Solid brass chain'],
  //   dimensions: '1" pendant diameter, 16" chain',
  //   color: '#B8693A',
  //   accentColor: '#3D2B1F',
  //   inStock: true,
  //   images: {
  //     primary: 'grove-pendant',
  //     alt: 'Grove Pendant Necklace on aged parchment',
  //   },
  // },
]

export const productsById = new Map(products.map(product => [product.id, product]))
export const productsBySlug = new Map(products.map(product => [product.slug, product]))
