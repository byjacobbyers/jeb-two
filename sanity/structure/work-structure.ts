import { PresentationIcon } from '@sanity/icons'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import type {
  StructureBuilder,
  StructureResolverContext,
} from 'sanity/structure'

const Work = (S: StructureBuilder, context: StructureResolverContext) => {
  return S.listItem()
    .title('Work')
    .icon(PresentationIcon)
    .child(
      S.list()
        .title('Work')
        .items([
          S.listItem({
            id: 'work',
            title: 'All work',
            schemaType: 'work',
            icon: PresentationIcon,
            child: () =>
              S.documentTypeList('work')
                .title('Work')
                .filter('_type == $type')
                .params({ type: 'work' })
                .defaultOrdering([
                  { field: '_createdAt', direction: 'desc' },
                ]),
          }),
          orderableDocumentListDeskItem({
            type: 'work',
            title: 'Order work',
            S,
            context,
          }),
        ]),
    )
}

export default Work