import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    venue: z.string().optional(),
    upcoming: z.boolean().default(false),
    registrationUrl: z.string().url().optional(),
    registrationMessage: z.string().optional(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
    accentColor: z.string().default('#0070f3'),
    heroGradient: z.string().optional(),
    tags: z.array(z.string()).default([]),
    github: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    group: z.enum(['faculty', 'core']).default('core'),
    weight: z.enum(['solid', 'pale', 'neutral']).default('pale'),
    quote: z.string().optional(),
    photo: z.string().optional(),
    bio: z.string().optional(),
    workingCommunity: z.array(z.string()).default([]),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    instagram: z.string().url().optional(),
    email: z.string().email().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { events, team };
