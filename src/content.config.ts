import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const cases = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/cases",
  }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    period: z.string(),
    digit: z.string().optional(),
    overlay: z.string().optional(),
    summary: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

export const collections = {
  cases,
};
