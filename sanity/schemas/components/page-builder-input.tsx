'use client'

import {
	ArrayOfObjectsInputProps,
	BooleanSchemaType,
	FileSchemaType,
	NumberSchemaType,
	ObjectSchemaType,
	ReferenceSchemaType,
	StringSchemaType,
} from 'sanity'
import { Grid, Stack, Button, Dialog, Box, Card, Heading } from '@sanity/ui'
import React, { useCallback, useState } from 'react'
import { AddIcon } from '@sanity/icons'
import { randomKey } from '@sanity/util/content'

type Schema =
	| BooleanSchemaType
	| FileSchemaType
	| NumberSchemaType
	| ObjectSchemaType
	| StringSchemaType
	| ReferenceSchemaType

const PageBuilderInput = (props: ArrayOfObjectsInputProps) => {
	const { onInsert } = props
	const [open, setOpen] = useState(false)
	const onClose = useCallback(() => setOpen(false), [])
	const onOpen = useCallback(() => setOpen(true), [])

	const onSelectItem = useCallback(
		(schema: Schema) => {
			const key = randomKey(12)
			onInsert({
				items: [
					{
						_type: schema.name,
						_key: key,
					} as any,
				],
				position: 'after',
				referenceItem: -1,
				open: true,
			})
			onClose()
		},
		[onClose, onInsert],
	)

	return (
		<>
			<Stack space={3}>
				{props.renderDefault({
					...props,
					arrayFunctions: () => {
						return (
							<Button
								onClick={onOpen}
								icon={AddIcon}
								mode='ghost'
								text='Add item'
							/>
						)
					},
				})}
			</Stack>

			{open && (
				<Dialog
					header='Select a section'
					id='dialog-example'
					width={4}
					onClose={onClose}
					zOffset={1000}
				>
					<Box padding={1}>
						<Grid
							autoCols={'auto'}
							columns={[1, 2, 2, 3, 4]}
							autoFlow={'row dense'}
							gap={[3]}
							padding={4}
						>
							{props.schemaType.of.map((schema, index) => {
								return (
									<PreviewCard
										key={`preview-${index}`}
										schema={schema}
										onClick={() => onSelectItem(schema)}
									/>
								)
							})}
						</Grid>
					</Box>
				</Dialog>
			)}
		</>
	)
}

type PreviewProps = {
	onClick: React.MouseEventHandler<HTMLDivElement> | undefined
	schema: Schema
}

function PreviewCard(props: PreviewProps) {
	const { onClick, schema } = props
	const [imageFailed, setImageFailed] = useState(false)
	const Icon = schema.icon
	const previewSrc = `/page-builder/${schema.name}.png`

	return (
		<Card
			role='button'
			shadow={1}
			padding={3}
			onClick={onClick}
			style={{ cursor: 'pointer' }}
		>
			<Stack padding={2} space={[3]}>
				<Heading as='h5' size={1}>
					{schema.title}
				</Heading>
				<Box
					style={{
						height: '150px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{!imageFailed ? (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'contain',
							}}
							src={previewSrc}
							alt={schema.title ?? schema.name}
							onError={() => setImageFailed(true)}
						/>
					) : Icon ? (
						<Box style={{ fontSize: 48, lineHeight: 0, opacity: 0.6 }}>
							<Icon />
						</Box>
					) : null}
				</Box>
			</Stack>
		</Card>
	)
}

export default PageBuilderInput
