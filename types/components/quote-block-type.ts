import { DefaultImageType } from '../objects/default-img-type'

export type QuoteBlockType = {
	_key: string
	_type: string
	active: boolean
	componentIndex: number
	quote?: string
	name?: string
	title?: string
	image?: DefaultImageType
}
