import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { marked } from "marked";
import { legalDocuments, type LegalPage, type Locale } from "../data/site";

export async function renderLegalDocument(locale: Locale, page: LegalPage) {
  const sourcePath = resolve(process.cwd(), legalDocuments[locale][page]);
  const source = await readFile(sourcePath, "utf8");
  return await marked.parse(source);
}
