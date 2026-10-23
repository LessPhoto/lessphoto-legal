import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

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
  integrations: [sitemap()],
});
