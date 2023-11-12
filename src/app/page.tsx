import LinkedList from '@/components/photos/LinkedList';
import { getPhotos } from '@/lib/api/getter'
import Image from 'next/image'

export const dynamic = 'force-daynamic';

export default async function Home() {
  const photos = await getPhotos()

  return (
    <main>
      {photos.map(photo => {
        return <LinkedList photo={photo} key={photo.id} />
      })}
    </main>
  )
}
