import { readFile, unlink, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const generatedSitemapPath = resolve("dist/sitemap-0.xml");
const directSitemapPath = resolve("dist/sitemap.xml");

const generatedSitemap = await readFile(generatedSitemapPath, "utf8");

// The generated sitemap contains no extension elements. Remove the unused
// namespace declarations so the experimental direct sitemap stays minimal.
const directSitemap = generatedSitemap.replace(
  /\s+xmlns:(news|xhtml|image|video)="[^"]*"/g,
  "",
);

await writeFile(directSitemapPath, directSitemap, "utf8");

// Keep only the direct sitemap as the public entry point. The two Astro
// intermediate files are build-time inputs and are not published.
await unlink(generatedSitemapPath);
await unlink(resolve("dist/sitemap-index.xml"));

console.log("Created dist/sitemap.xml and removed intermediate sitemap files");
