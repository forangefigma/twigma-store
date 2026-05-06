# Twigma Store 🌿

> A demo React ecommerce site for Figma sales demos.
> Built to showcase the **Code → Figma Design System** and **Design System → Scale** story.

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## Project Structure

```
twigma-store/
├── src/
│   ├── tokens/          # Design tokens (→ Figma Variables)
│   │   ├── color.js
│   │   ├── typography.js
│   │   └── spacing.js
│   ├── components/      # UI components (→ Figma Components)
│   │   ├── Button.jsx + Button.module.css
│   │   ├── Badge.jsx + Badge.module.css
│   │   ├── ProductCard.jsx + ProductCard.module.css
│   │   ├── ProductDetail.jsx + ProductDetail.module.css
│   │   ├── ProductIllustration.jsx
│   │   ├── Header.jsx + Header.module.css
│   │   └── Footer.jsx + Footer.module.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── ProductPage.jsx
│   ├── data/
│   │   └── products.js  # 3 products (+ Product #4 commented out)
│   └── index.css        # CSS Custom Properties from tokens
├── .figma/              # Code Connect mapping files
│   ├── button.figma.js
│   ├── badge.figma.js
│   ├── product-card.figma.js
│   ├── product-detail.figma.js
│   ├── header.figma.js
│   └── footer.figma.js
└── package.json
```

---

## 🎬 Demo Script

### ACT 1 — "You already have code. Let's make it a design system."

**Setup:** Have the repo open in VS Code or Cursor. Have Figma open in a separate window.

**Talking points:**

1. **Open `src/tokens/color.js`**
   > "Most teams already have colors defined somewhere — hex codes in a CSS file, a constants file, something. Here they're structured as design tokens. Each one of these maps directly to a Figma Variable."

2. **Open `src/tokens/typography.js` and `spacing.js`**
   > "Same for type and spacing. These are your design system — they just live in code right now. The goal is to get them into Figma so designers and developers are working from the same source of truth."

3. **Open `src/components/Button.jsx`**
   > "Here's a Button component. It has three variants — Primary, Secondary, Ghost — and three sizes. Notice the JSDoc comment at the top: it tells us the Figma component name and where the Code Connect file lives."

4. **Open `.figma/button.figma.js`**
   > "This is the Code Connect file. It maps each Figma property — Variant, Size, Label — to the React props. Once we run `figma connect publish`, any designer who selects a Button in Figma sees this exact React snippet in the Dev panel. No more translating from design to code."

5. **In Figma:** Show the MCP integration / use the Figma plugin to pull in the component
   > "Watch what happens when I [use the MCP / run the push]. It reads the tokens and components from the repo and scaffolds them directly into Figma. We now have a Variables panel with all of Twigma's colors, and a Component library with Button, Badge, ProductCard — all built from what was already in the codebase."

---

### ACT 2 — "Now let's use the design system to scale."

**Setup:** Design system is now live in both Figma and the codebase.

**Talking points:**

1. **In Figma:** Duplicate the ProductCard component, update the name to "Grove Pendant Necklace", set the badge to "Just Added"
   > "Let's say the business wants to launch a 4th product. A designer creates the new product page template in Figma using the existing components — they don't have to build anything from scratch."

2. **Back in VS Code:** Open `src/data/products.js`, scroll to the bottom
   > "On the code side, all I need to do is uncomment this entry."

3. **Uncomment the Grove Pendant product block**

4. **Save — show the browser auto-refresh**
   > "And instantly, the 4th product appears in the storefront. The card uses the same design tokens, the same components. Everything is consistent because it's all coming from the same system."

5. **Show the product detail page for Grove Pendant**
   > "And the detail page works immediately too — no new templates to build. This is the power of a connected design system. Adding a product used to mean design work, dev work, QA. Now it's an uncomment."

---

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Twigma storefront"
gh repo create twigma-store --public --push
```

---

## Product #4 — Grove Pendant Necklace

To reveal during Act 2, uncomment lines 62–78 in `src/data/products.js`:

```js
{
  id: 'twig-004',
  name: 'Grove Pendant Necklace',
  slug: 'grove-pendant-necklace',
  price: 95,
  badge: 'Just Added',
  ...
}
```

---

## Design Token → Figma Variable Mapping

| Token File        | Figma Collection       | Example Variable        |
|-------------------|------------------------|-------------------------|
| `color.js`        | `twigma/color`         | `color/brand/bark`      |
| `typography.js`   | `twigma/typography`    | `typography/fontSize/xl`|
| `spacing.js`      | `twigma/spacing`       | `spacing/space-4`       |

---

## Component → Figma Component Mapping

| Component          | Figma Component         | Code Connect File              |
|--------------------|-------------------------|--------------------------------|
| `Button.jsx`       | `Twigma/Button`         | `.figma/button.figma.js`       |
| `Badge.jsx`        | `Twigma/Badge`          | `.figma/badge.figma.js`        |
| `ProductCard.jsx`  | `Twigma/ProductCard`    | `.figma/product-card.figma.js` |
| `ProductDetail.jsx`| `Twigma/ProductDetail`  | `.figma/product-detail.figma.js`|
| `Header.jsx`       | `Twigma/Header`         | `.figma/header.figma.js`       |
| `Footer.jsx`       | `Twigma/Footer`         | `.figma/footer.figma.js`       |
