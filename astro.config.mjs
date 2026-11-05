import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Sitemap release checklist: update this date when adding pages or shipping meaningful
// content/SEO changes. This value is applied to every URL in public /sitemap.xml.
const siteLastModified = new Date("2026-11-05T00:00:00.000Z");

export default defineConfig({
  site: "https://lessphoto.cc",
  output: "static",
  trailingSlash: "always",
  devToolbar: {
    enabled: false,
  },
  redirects: {
    "/features/photo-video-compressor": "/features/photo-compressor",
    "/zh-hans/features/photo-video-compressor": "/zh-hans/features/photo-compressor",
    "/zh-hant/features/photo-video-compressor": "/zh-hant/features/photo-compressor",
  },
  integrations: [
    mdx(),
    sitemap({ lastmod: siteLastModified }),
  ],
});
