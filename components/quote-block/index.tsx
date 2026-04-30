'use client'

// Types
import { QuoteBlockType } from '@/types/components/quote-block-type'

// Components
import SanityImage from '@/components/sanity-image'

const QuoteBlock: React.FC<QuoteBlockType> = ({
	active,
	componentIndex,
	quote,
	name,
	title,
	image,
}) => {
	if (!active) return null

	const hasImage = Boolean(image?.asset?.url)
	const hasCopy = Boolean(quote?.trim() || name?.trim() || title?.trim())
	if (!hasImage && !hasCopy) return null

	return (
		<section
			id={`quote-block-${componentIndex}`}
			className='quote-block text-block flex w-full justify-center px-5 pb-10 md:pb-20'
		>
			<div className='w-full max-w-4xl'>
				<div
					className='flex flex-col items-center gap-5 rounded-none py-10 md:py-5 p-5 shadow-lg md:flex-row md:items-center bg-[hsl(252deg_42%_16%)]'
				>
					{hasImage && image && (
						<div className='flex w-full justify-center md:w-1/4 md:justify-start'>
							<SanityImage
								source={image}
								alt={image.alt || ''}
								width={image.asset.metadata.dimensions.width}
								height={image.asset.metadata.dimensions.height}
								componentIndex={componentIndex}
								className='max-h-40 w-auto max-w-[12rem] object-contain md:max-h-none md:max-w-full'
								sizes='(max-width: 768px) 12rem, 25vw'
							/>
						</div>
					)}
					<div
						className={`flex w-full flex-col gap-2 text-center md:text-left items-center md:items-start ${hasImage ? 'md:w-3/4' : 'md:w-full'}`}
					>
						{quote ? (
							<p className='text-lg italic text-foreground pb-5'>{quote}</p>
						) : null}
						{name ? (
							<p className='text-base font-medium text-foreground'>{name}</p>
						) : null}
						{title ? (
							<p className='text-sm text-foreground/75'>{title}</p>
						) : null}
					</div>
				</div>
			</div>
		</section>
	)
}

export default QuoteBlock
