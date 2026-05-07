'use client'
// Tools

// Types
import { TextBlockType } from '@/types/components/text-block-type'

// Components
import SimpleText from '@/components/simple-text'

interface Props {
	data: TextBlockType
}

const TextBlock: React.FC<TextBlockType> = ({
	active,
	componentIndex,
	content,
}) => {



	if (active) {
		return (
			<section
				id={`${'text-block-' + componentIndex}`}
				className={`text-block flex w-full justify-center px-5`}
			>
				<div className='text-xl md:text-2xl flex flex-col w-full max-w-4xl '>
					<SimpleText content={content.text} />
				</div>
			</section>
		)
	}

	return null
}

export default TextBlock
