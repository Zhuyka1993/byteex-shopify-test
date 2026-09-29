import { client } from './client'
import { reviewsQuery } from './queries'

export async function getReviews() {
  return client.fetch(reviewsQuery)
}