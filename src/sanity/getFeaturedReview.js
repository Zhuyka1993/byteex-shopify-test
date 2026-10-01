import { client } from './client'
import { featuredReviewQuery } from './queries'

export async function getFeaturedReview() {
  return client.fetch(featuredReviewQuery)
}