import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Keep the sitemap's update signal aligned with the latest site content release.
// Update this date when a release contains meaningful page or SEO content changes.
const siteLastModified = new Date("2026-10-30T00:00:00.000Z");

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
