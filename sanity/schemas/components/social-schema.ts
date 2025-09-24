import { defineType, defineField } from 'sanity'

const social = defineType({
	title: 'Social',
	name: 'social',
	type: 'object',
	options: {
		collapsible: true,
		collapsed: true,
	},
	fields: [
		defineField({
			title: 'Github',
			name: 'github',
			type: 'url',
		}),
		defineField({
			title: 'LinkedIn',
			name: 'linkedin',
			type: 'url',
		}),
		defineField({
			title: 'Twitter',
			name: 'twitter',
			type: 'url',
		}),
		defineField({
			title: 'Instagram',
			name: 'instagram',
			type: 'url',
		}),
	],
})

export default social
