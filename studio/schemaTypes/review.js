export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Avatar',
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
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: 'text',
      title: 'Review text',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
  ],
}