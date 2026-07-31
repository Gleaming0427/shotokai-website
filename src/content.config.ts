import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dateSchema = z.union([z.string(), z.date()]).transform(v => {
  if (v instanceof Date) return v;
  const s = v.trim().split(' ')[0];
  if (s.includes('/')) {
    const d = s.split('/');
    return new Date(+d[2], +d[1] - 1, +d[0]);
  }
  return new Date(s);
});

const techniques = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/techniques' }),
  schema: z.object({
    title: z.string(),
    date: dateSchema,
    image: z.string().optional(),
  }),
});

const evenements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evenements' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    date: dateSchema,
    image: z.string().optional(),
  }),
});

export const collections = { techniques, evenements };
