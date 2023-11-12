'use server';

import prisma from "./prisma"
import { redirect } from "next/navigation";

export async function storePhoto(formData: any) {
  const input = {
    photoId: parseInt(formData.get('id')),
    title: formData.get('title'),
    thumbnail: formData.get('thumbnailUrl'),
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