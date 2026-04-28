import { defineType, defineField } from 'sanity'
import { TargetIcon, BoltIcon } from '@sanity/icons'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'defaultImage',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    }),
    defineField({
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: TargetIcon,
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'type', title: 'Type', type: 'string' },
          ],
          preview: {
            select: {
              title: 'title',
              type: 'type',
            },
            prepare(selection) {
              const { title, type } = selection
              return {
                title: `${title}`,
                subtitle: `${type}`,
              }
            },
          },
        },
      ],
      
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: BoltIcon,
          fields: [
            { name: 'job', title: 'Job', type: 'string' },
            { name: 'name', title: 'Name', type: 'string' },
          ],
          preview: {
            select: {
              title: 'job',
              name: 'name',
            },
            prepare(selection) {
              const { title, name } = selection
              return {
                title: `${title}`,
                subtitle: `${name}`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'defaultImage',
    }),
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          { title: 'Badge', value: 'badge' },
          { title: 'Button', value: 'button' },
          { title: 'Banner', value: 'banner' },
        ],
      },
    }),
    defineField({
      name: 'defaultImage',
      title: 'Background Image',
      type: 'defaultImage',
    }),
    defineField({
			name: 'sections',
			type: 'sections',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
		}),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    orderRankField({ type: 'work' }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'thumbnail',
    },
    prepare(selection) {
      const { title, image } = selection
      return {
        title: `${title}`,
        media: image,
      }
    },
  },
})