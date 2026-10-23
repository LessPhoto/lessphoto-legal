# LessPhoto Website

Static marketing, support, and legal website for LessPhoto. The site uses Astro and builds to plain HTML for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The generated website is written to `dist/`.

## Content structure

- `src/components/HomePage.astro`: marketing-page structure and content sections
- `src/components/Header.astro`: shared desktop and mobile navigation
- `src/components/ContentFrame.astro`: shared visual frame with separate guide-article and legal/support directory models
- `src/data/site.ts`: localized website copy and route helpers
- `src/content/guides/article-template.md`: unpublished SEO guide template
- `docs/`: current legal and support source documents
- `public/config/`: remote JSON configuration consumed by the iOS app

Artwork placeholders use `data-artwork-slot` attributes so final product images can be inserted without changing page structure.

App Store campaign parameters remain optional. Once App Store Connect campaign links are available, pass their provider and campaign tokens to `AppStoreButton`.
