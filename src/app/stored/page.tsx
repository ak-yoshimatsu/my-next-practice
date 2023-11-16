import Delete from "@/components/photos/Delete";
import { deletePhoto } from "@/lib/db/delete";
import { getAllPhotos } from "@/lib/db/select";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'ああ',
  description: '写真の一覧',
}

export default async function Stored() {
  const photos = await getAllPhotos();

  return (
    <div>
      {photos.map((photo) => {
        return <Delete {...photo} key={photo.id} />
      })}
    </div>
  )
}