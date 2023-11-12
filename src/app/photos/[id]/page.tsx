import Detail from '@/components/photos/Detail';
import Store from '@/components/photos/Store';
import { getPhotoById } from '@/lib/api/getter';
import React from 'react';

type Props = {
  params: { id: number }
}

const PhotoDetail = async ({ params }: Props) => {
  const photo = await getPhotoById(params.id)
  
  return (
    <div>
      <Detail photo={photo} />
      <hr />
      <Store photo={photo} />
    </div>
  );
};

export default PhotoDetail;