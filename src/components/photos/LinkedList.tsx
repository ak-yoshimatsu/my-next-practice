import Link from 'next/link';
import React from 'react';
import Detail from './Detail';
import { PhotoProps } from '@/types/photo';

const LinkedList = ({ photo }: { photo: PhotoProps }) => {
  return (
    <Link href={`photos/${photo.id}`}>
      <div className="group hover:bg-sky-500 hover:rounded-lg">
        <Detail photo={photo} />
      </div>
    </Link>
  );
};

export default LinkedList;