import { getAllPhotos } from "@/lib/db/select";
import Image from "next/image";

export default async function Stored() {
  const photos = await getAllPhotos();

  return (
    <div>
      {photos.map(photo => {
        return (
          <div className="m-5" key={photo.id}>
            <Image
              src={photo.thumbnail}
              alt="thumbnail"
              width={150}
              height={150}
              priority={true}
            />
            <p>{photo.title}</p>
            <p>{photo.created_at.toLocaleDateString()}</p>
          </div>
        )
      })}
    </div>
  )
}