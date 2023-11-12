import { PhotoProps } from "@/types/photo";

export async function getPhotos() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`);
  const result: PhotoProps[] = await res.json();
  return result;
}

export async function getPhotoById(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}?albumId=1`);
  const result: PhotoProps = await res.json();
  return result;
}