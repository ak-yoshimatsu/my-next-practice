import Detail from '@/components/photos/Detail';
import Store from '@/components/photos/Store';
import { getPhotoById } from '@/lib/api/photos/getter';

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