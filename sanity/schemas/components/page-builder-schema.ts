import { defineField } from 'sanity'
import PageBuilderInput from './page-builder-input'

const pageBuilder = defineField({
	title: 'Page sections',
	name: 'sections',
	type: 'array',
	group: 'pagebuilder',
	of: [
		{ type: 'textBlock' },
		{ type: 'quoteBlock' },
	],
	components: {
		input: PageBuilderInput,
	},
})

export default pageBuilder
