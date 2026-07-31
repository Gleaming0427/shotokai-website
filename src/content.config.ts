import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const techniques = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/techniques' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = { techniques };
