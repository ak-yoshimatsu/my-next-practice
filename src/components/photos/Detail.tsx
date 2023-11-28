import Image from 'next/image';
import React from 'react';
import { PhotoProps } from '@/types/photo';
import Link from 'next/link';

const Detail = ({ photo }: { photo: PhotoProps }) => {
  return (
    <div className="flex w-full mb-4">
      <div>
        <Image
          src={photo.thumbnailUrl}
          alt="thumbnail"
          width={150}
          height={150}
          priority={true}
        />
      </div>
      <div>
        <ul className="list-none text-black ml-4 group-hover:text-white">
          <li>{photo.id && photo.id + '.'}</li>
          <li>title: {photo.title}</li>
          <li>URL: {photo.url}</li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
