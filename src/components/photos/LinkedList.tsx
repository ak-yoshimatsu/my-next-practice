import Link from 'next/link';
import React from 'react';
import Detail from './Detail';
import { PhotoProps } from '@/types/photo';

const LinkedList = ({ photo }: { photo: PhotoProps }) => {
  return (
    <Link href={`detail/${photo.id}`}>
      <div className="className='hover:bg-green-50'">
        <Detail photo={photo} />
      </div>
    </Link>
  );
};

export default LinkedList;