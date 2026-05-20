import type { WorkType } from '@/types/documents/work-type'

export function workLogoWidthClass(
	orientation: WorkType['orientation'] | undefined,
): string {
	switch (orientation) {
		case 'banner':
			return 'w-[16rem] lg:w-[30rem]'
		case 'long':
			return 'w-[32rem] lg:w-[60rem]'
		default:
			return 'w-[14rem] lg:w-[25rem]'
	}
}
