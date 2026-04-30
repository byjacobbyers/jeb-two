import { TextBlockType } from './text-block-type'
import { QuoteBlockType } from './quote-block-type'

export type PageBuilderType = (TextBlockType | QuoteBlockType)[]
