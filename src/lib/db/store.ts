'use server';

import prisma from "./prisma";
import { redirect } from "next/navigation";
import z from "zod";

const schema = z.object({
  id: z.string(),
  title: z.string(),
  thumbnailUrl: z.string(),
  detail: z.string(),
});

export async function storePhoto(formData: FormData) {
  const parsed = schema.safeParse({
    id: formData.get('id'),
    title: formData.get('title'),
    detail: formData.get('detail'),
    thumbnailUrl: formData.get('thumbnailUrl'),
  });

  if (!parsed.success) {
    console.log('バリデーションエラー', parsed.error);
    return false
  }

  const input = {
    photoId: parseInt(formData.get('id') as string),
    title: formData.get('title') as string,
    thumbnail: formData.get('thumbnailUrl') as string,
  }

  await prisma.photos.create({
    data: input
  })
  .catch((err) => {
    console.error(err);
    throw new Error(err);
    
  })
  .finally(() => {
    redirect('/');
  });
}