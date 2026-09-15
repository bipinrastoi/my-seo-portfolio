import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'image', title: 'Project Screenshot', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ 
      name: 'caseStudyPdf', 
      title: 'Case Study PDF Document', 
      type: 'file', 
      options: { accept: '.pdf' } 
    }),
    defineField({ name: 'authorityBadge', title: 'Authority Badge (e.g. Verified SEO)', type: 'string' }),
    defineField({ name: 'metric', title: 'Metric (e.g. +140% Traffic)', type: 'string' }),
    defineField({ name: 'techStack', title: 'Tech Stack / Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'liveUrl', title: 'Live URL', type: 'url' }),
  ],
});