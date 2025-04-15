'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function revalidateTagHelper(tag: string) {
  revalidateTag(tag);
}

export async function revalidatePathHelper(path: string) {
  revalidatePath(path);
}
