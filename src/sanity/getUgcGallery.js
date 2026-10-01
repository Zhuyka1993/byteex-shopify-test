import { client } from './client'
import { ugcGalleryQuery } from './queries'

export async function getUgcGallery() {
  return client.fetch(ugcGalleryQuery)
}