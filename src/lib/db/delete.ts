'use server';

import { redirect } from "next/navigation";

import prisma from "./prisma";

export async function deletePhoto(id: number) {
  console.log(id);
  
  prisma.photos.delete({
    where: {
      id: id,
    },
  })
  .catch((err) => {
    console.error(err);
    throw new Error(err);
    
  })
  .finally(() => {
    redirect('/');
  });
}