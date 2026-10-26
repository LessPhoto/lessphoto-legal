import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./site";

export type GuideArticle = CollectionEntry<"guides">;

export async function getGuideArticles(locale: Locale) {
  const articles = await getCollection(
    "guides",
    ({ data }) => !data.draft && data.locale === locale,
  );

  return articles.sort((left, right) =>
    left.data.order - right.data.order
    || right.data.publishedAt.localeCompare(left.data.publishedAt)
    || left.data.title.localeCompare(right.data.title),
  );
}

export async function getGuideArticle(locale: Locale, slug: string) {
  const articles = await getGuideArticles(locale);
  return articles.find((article) => article.data.slug === slug);
}

export async function getGuideNavigation(locale: Locale) {
  const articles = await getGuideArticles(locale);
  return articles.map((article) => ({
    path: `guides/${article.data.slug}`,
    label: article.data.title,
    publishedAt: article.data.publishedAt,
  }));
}
