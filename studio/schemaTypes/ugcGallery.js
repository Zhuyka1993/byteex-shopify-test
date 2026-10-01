export default {
  name: 'ugcGallery',
  title: 'UGC Gallery',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}