'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function revalidateServerTag(tag: string) {
  revalidateTag(tag);
}

export async function revalidateServerPath(path: string) {
  revalidatePath(path);
}
