import { client } from './client'
import { talkAboutYouQuery } from './queries'

export async function getTalkAboutYou() {
  return client.fetch(talkAboutYouQuery)
}