import { defineType, defineField } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Articles / Blogs',
  type: 'document',
  fields: [
    // Core fields
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'updatedAt', title: 'Updated At', type: 'datetime' }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'summary', title: 'Summary / Excerpt', type: 'text' }),

    // Metadata fields
    defineField({ name: 'author', title: 'Author', type: 'string', initialValue: 'Bipin Raskoti' }),
    defineField({ name: 'readingTime', title: 'Reading Time (mins)', type: 'number' }),

    // SEO Fields
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),

    // Main content body (updated to support inline images & proof)
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          title: 'Inline Image / Proof',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text (SEO)',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption / Proof Description',
            },
          ],
        },
      ],
    }),
  ],
});