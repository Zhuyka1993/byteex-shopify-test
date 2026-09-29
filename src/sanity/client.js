import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '2l9b8cip',
  dataset: 'production',
  apiVersion: '2026-09-29',
  useCdn: true,
})