import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    author: z.enum(['self', 'ai', 'collab']).default('self'),
    tag: z.string().default('雑記'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
