import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./site";

export type BlogArticle = CollectionEntry<"blog">;

export async function getBlogArticles(locale: Locale) {
  const articles = await getCollection(
    "blog",
    ({ data }) => !data.draft && data.locale === locale,
  );

  return articles.sort((left, right) =>
    right.data.publishedAt.localeCompare(left.data.publishedAt)
    || left.data.order - right.data.order
    || left.data.title.localeCompare(right.data.title),
  );
}

export async function getBlogArticle(locale: Locale, slug: string) {
  const articles = await getBlogArticles(locale);
  return articles.find((article) => article.data.slug === slug);
}

export async function getBlogNavigation(locale: Locale) {
  const articles = await getBlogArticles(locale);
  return articles.map((article) => ({
    path: `blog/${article.data.slug}`,
    label: article.data.title,
    publishedAt: article.data.publishedAt,
  }));
}
