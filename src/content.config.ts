import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
    generateId: ({ data }) => `${data.locale}-${data.slug}`,
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    locale: z.enum(["en", "zh-hans", "zh-hant"]),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    translationKey: z.string().min(1),
    category: z.string().min(1),
    readingTime: z.string().min(1),
    publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    order: z.number().int().positive(),
    kind: z.enum(["calculator"]).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
