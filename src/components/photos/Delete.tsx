'use client';

import { deletePhoto } from "@/lib/db/delete";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  thumbnail: string;
  created_at: Date;
}

export default function Delete(photo: Props) {
  return (
    <div className="m-5">
      <Image
        src={photo.thumbnail}
        alt="thumbnail"
        width={150}
        height={150}
        priority={true}
      />
      <p>{photo.title}</p>
      <p>{photo.created_at.toLocaleDateString()}</p>
      <hr />
      <button
        className="bg-red-600 text-white rounded px-4 py-2 mr-2 hover:bg-red-500"
        onClick={() => deletePhoto(photo.id)}
      >削除</button>
    </div>
  );
}
