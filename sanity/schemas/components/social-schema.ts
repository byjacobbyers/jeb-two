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
			title: 'GitHub',
			name: 'github',
			type: 'url',
		}),
		defineField({
			title: 'LinkedIn',
			name: 'linkedin',
			type: 'url',
		}),
		defineField({
			title: 'X (Twitter)',
			name: 'twitter',
			type: 'url',
		}),
		defineField({
			title: 'Instagram',
			name: 'instagram',
			type: 'url',
		}),
		defineField({
			title: 'Facebook',
			name: 'facebook',
			type: 'url',
		}),
		defineField({
			title: 'YouTube',
			name: 'youtube',
			type: 'url',
		}),
		defineField({
			title: 'TikTok',
			name: 'tiktok',
			type: 'url',
		}),
		defineField({
			title: 'Pinterest',
			name: 'pinterest',
			type: 'url',
		}),
		defineField({
			title: 'Reddit',
			name: 'reddit',
			type: 'url',
		}),
		defineField({
			title: 'Snapchat',
			name: 'snapchat',
			type: 'url',
		}),
		defineField({
			title: 'Patreon',
			name: 'patreon',
			type: 'url',
		}),
		defineField({
			title: 'Twitch',
			name: 'twitch',
			type: 'url',
		}),
		defineField({
			title: 'Threads',
			name: 'threads',
			type: 'url',
		}),
	],
})

export default social
