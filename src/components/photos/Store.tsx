'use client';

import { storePhoto } from '@/lib/db/store';
import MyButton from '@/stories/MyButton';
import { PhotoProps } from '@/types/photo';
import React from 'react';

const Store = ({ photo }: { photo: PhotoProps }) => {
  return (
    <form action={storePhoto}>
      <input type="hidden" name="id" defaultValue={photo.id} />
      <input type="hidden" name="title" defaultValue={photo.title} />
      <input
        type="hidden"
        name="thumbnailUrl"
        defaultValue={photo.thumbnailUrl}
      />

      <button className="bg-blue-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500">
        登録
      </button>
      <MyButton label={'登録します'} primary={true} />
    </form>
  );
};

export default Store;
