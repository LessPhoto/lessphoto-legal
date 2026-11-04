import { readFile, writeFile } from "node:fs/promises";
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
console.log("Created dist/sitemap.xml from dist/sitemap-0.xml");
