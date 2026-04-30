import { defineType, defineField } from 'sanity'
import { BlockquoteIcon } from '@sanity/icons'

const quoteBlock = defineType({
	title: 'Quote Block',
	type: 'object',
	icon: BlockquoteIcon,
	name: 'quoteBlock',
	fields: [
		defineField({
			title: 'Active?',
			name: 'active',
			type: 'boolean',
			description:
				'Set to false if you need to remove from page but not delete',
			initialValue: true,
		}),
		defineField({
			title: 'Quote',
			name: 'quote',
			type: 'text',
			rows: 5,
		}),
		defineField({
			title: 'Name',
			name: 'name',
			type: 'string',
		}),
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
		}),
		defineField({
			title: 'Image',
			name: 'image',
			type: 'defaultImage',
		}),
	],
	preview: {
		select: {
			active: 'active',
			quote: 'quote',
			name: 'name',
			title: 'title',
		},
		prepare(selection) {
			const { quote, name, title, active } = selection
			const excerpt =
				typeof quote === 'string' && quote.length > 60
					? `${quote.slice(0, 60)}…`
					: quote || 'Quote'
			return {
				title: name || excerpt,
				subtitle: `${active ? 'Active' : 'Not Active'}${title ? ` · ${title}` : ''}`,
			}
		},
	},
})

export default quoteBlock
