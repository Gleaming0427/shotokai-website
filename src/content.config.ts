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
    url: z.string().optional(),
  }),
});

const evenements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evenements' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    date: dateSchema,
    image: z.string().optional(),
    url: z.string().optional(),
  }),
});

const karateShotokai = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/karate-shotokai' }),
  schema: z.object({
    title: z.string(),
    date: dateSchema,
    image: z.string().optional(),
    url: z.string().optional(),
  }),
});

const iaijutsu = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/iaijutsu' }),
  schema: z.object({
    title: z.string(),
    date: dateSchema,
    image: z.string().optional(),
    url: z.string().optional(),
  }),
});

const reprise = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reprise' }),
  schema: z.object({
    label: z.string().optional(),
    title: z.string(),
    date: dateSchema,
    heure: z.string().optional(),
  }),
});

const tarifs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tarifs' }),
  schema: z.object({
    lignes: z.array(z.object({
      public: z.string(),
      age: z.string().optional(),
      horaire: z.string(),
      activite: z.string(),
      tarif: z.string(),
      detail: z.string().optional(),
    })),
    note: z.string().optional(),
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/contact' }),
  schema: z.object({
    telephone: z.string(),
    telephone_affiche: z.string(),
    telephone_nom: z.string().optional(),
    adresse_titre: z.string(),
    adresse_rue: z.string(),
    adresse_ville: z.string(),
  }),
});

export const collections = { techniques, evenements, 'karate-shotokai': karateShotokai, iaijutsu, reprise, tarifs, contact };
