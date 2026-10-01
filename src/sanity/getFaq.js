import { client } from './client'
import { faqQuery } from './queries'

export async function getFaq() {
  return client.fetch(faqQuery)
}