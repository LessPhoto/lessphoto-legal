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
- `src/components/ContentFrame.astro`: shared visual frame with separate blog-article and legal/support directory models
- `src/data/site.ts`: localized website copy and route helpers
- `src/content/blog/<slug>/<locale>.md`: published blog articles, grouped with their translations and local images
- `src/content/templates/blog.md`: unpublished Markdown blog template
- `blog/大纲/`: shallow Chinese-first blog writing area; draft filenames use `YYYYMMDD-name.md`
- `src/content.config.ts`: blog metadata schema and content collection configuration
- `docs/`: current legal and support source documents
- `public/config/`: remote JSON configuration consumed by the iOS app

Artwork placeholders use `data-artwork-slot` attributes so final product images can be inserted without changing page structure.

## Blog drafting

Start new Chinese blog ideas in `blog/大纲/` by copying `20261029-博客文章大纲-范本.md`. These drafts are intentionally outside `src/content/`, so they are not published by Astro until they are reviewed and converted into the formal blog content structure.

App Store campaign parameters remain optional. Once App Store Connect campaign links are available, pass their provider and campaign tokens to `AppStoreButton`.

## Publishing a blog article

1. Copy `src/content/templates/blog.md` into a new `src/content/blog/<slug>/` directory.
2. Create `en.md`, `zh-hans.md`, and `zh-hant.md` in that directory with the same `slug` and `translationKey`.
3. Keep article-specific images beside the Markdown files and reference them with relative Markdown image paths.
4. Set `draft: false`, then run `npm run build`. The content schema validates required metadata before publishing.
