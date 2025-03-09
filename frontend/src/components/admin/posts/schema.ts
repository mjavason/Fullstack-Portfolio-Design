import { z } from 'zod';

// Define Zod schema
export const postSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  categories: z.string().min(1, 'Categories are required'),
  summary: z.string().min(10, 'Summary must be at least 10 characters'),
  body: z.string().min(20, 'Body must be at least 20 characters'),
  published: z.boolean().optional(),
});

// Define TypeScript type from schema
export type PostFormData = z.infer<typeof postSchema>;
