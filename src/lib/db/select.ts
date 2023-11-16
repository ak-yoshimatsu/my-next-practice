'use server';

import prisma from "./prisma";

export async function getAllPhotos() {
  const allPhotos = await prisma.photos.findMany({
    orderBy: {
      id: 'desc',
    },
    select: {
      id: true,
      photoId: false,
      title: true,
      thumbnail: true,
      created_at: true,
    }
  });

  return allPhotos;
}
