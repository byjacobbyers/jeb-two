import { groq } from 'next-sanity'
import { imageQuery } from '../objects/image-query'

export const WorkSiteMapQuery = groq`*[_type == "work"] | order(orderRank) {
  "slug": slug.current,
  _updatedAt
}`


export const WorkPathsQuery = groq`*[_type == "work" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`

export const WorksQuery = groq`
  *[_type == "work"] | order(orderRank) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    "slug": slug.current,
    thumbnail {
      ${imageQuery}
    },
    logo {
      ${imageQuery}
    },
    orientation,
    defaultImage {
      ${imageQuery}
    },
  }
`

export const WorkJSONQuery = groq`
    *[_type == "work"] | order(orderRank) {
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": slug.current,
      "image": seo.shareGraphic {
        ${imageQuery}
      },
      'description': seo.metaDesc,
    }
  `
export const WorkQuery = groq`
  *[_type == "work" && slug.current == $slug][0]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    "slug": slug.current,
    thumbnail {
      ${imageQuery}
    },
    url,
    releaseDate,
    stack[] {
      title,
      type
    },
    credits[] {
      job,
      name
    },
    logo {
      ${imageQuery}
    },
    orientation,
    defaultImage {
      ${imageQuery}
    },
    sections[] {
      ...,
      _type == 'ctaBlock' => {
        ...,
        image {
          ${imageQuery}
        },
      },
      _type == 'columnBlock' => {
        ...,
        rows[] {
          ...,
          columns[] {
            ...,
            image {
              ${imageQuery}
            },
            video {
              ${imageQuery}
              poster {
                ${imageQuery}
              }
            },
            content[] {
              ... // Rich text or other fields in content
            }
          }
        }
      },
      _type == 'reviewBlock' => {
        ...,
        reviews[]-> {
          ...,
          image {
            ${imageQuery}
          },
        },
        titles
      },
      _type == 'priceBlock' => {
        ...,
        columns[] {
          ...,
          image {
            ${imageQuery}
          }
        }
      },
      _type == 'videoColumnArray' => {
        ...,
        columns[] {
          ...,
          video {
            ${imageQuery}
            poster {
              ${imageQuery}
            }
          },
        }
      },
      _type == 'videoBlock' => {
        ...,
        video {
          ${imageQuery}
          poster {
            ${imageQuery}
          }
        },
      },
      _type == 'textBlock' => {
        ...,
      },
      _type == 'quoteBlock' => {
        ...,
        image {
          ${imageQuery}
        },
      }
    },
    seo {
      ...,
      shareGraphic {
        ${imageQuery}
      },
    }
  }
`