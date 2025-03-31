import { z } from 'zod';

// Define Zod schema
export const projectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  category: z.string().min(10, 'Category must be at least 10 characters'),
  coverImage: z.string().url('Cover image must be a valid URL'),
  summary: z.string().min(10, 'Summary must be at least 10 characters'),
  body: z.string().min(20, 'Body must be at least 20 characters'),
  published: z.boolean().default(false),
});

// Define TypeScript type from schema
export type ProjectFormData = z.infer<typeof projectSchema>;
