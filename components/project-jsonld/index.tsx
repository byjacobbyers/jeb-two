'use client'

import Script from 'next/script'

interface Props {
  project: {
    title: string
    slug?: string
    url?: string
    seo?: {
      metaDesc?: string
      metaTitle?: string
      shareGraphic?: {
        asset?: {
          url?: string
        }
      }
    }
    _createdAt: string
    releaseDate?: string
    defaultImage?: {
      asset?: {
        url?: string
      }
      alt?: string
    }
    credits?: { name: string; job?: string }[]
  }
}

const ProjectJsonLd = ({ project }: Props) => {
  if (!project) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `https://www.jacobbyers.me/work/${project.slug}#creativework`,
    name: project.seo?.metaTitle || project.title,
    url: `https://www.jacobbyers.me/work/${project.slug || ''}`,
    image:
      project.seo?.shareGraphic?.asset?.url ||
      project.defaultImage?.asset?.url ||
      undefined,
    description: project.seo?.metaDesc,
    dateCreated: project._createdAt,
    datePublished: project.releaseDate || project._createdAt,
    creator: project.credits?.length
      ? project.credits.map((credit) => ({
          '@type': 'Person',
          name: credit.name,
          jobTitle: credit.job || undefined,
        }))
      : {
          '@type': 'Person',
          '@id': 'https://www.jacobbyers.me/#person',
          name: 'Jacob Byers',
          url: 'https://www.jacobbyers.me/'
        },
    publisher: {
      '@type': 'Person',
      '@id': 'https://www.jacobbyers.me/#person',
      name: 'Jacob Byers',
      url: 'https://www.jacobbyers.me/'
    },
    mainEntity: {
      '@type': 'WebPage',
      '@id': `https://www.jacobbyers.me/work/${project.slug}#webpage`,
      name: project.seo?.metaTitle || project.title,
      url: `https://www.jacobbyers.me/work/${project.slug || ''}`,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.jacobbyers.me/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Work',
            item: 'https://www.jacobbyers.me/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: `https://www.jacobbyers.me/work/${project.slug}`,
          },
        ],
      },
    },
    inLanguage: 'en-US'
  }

  return (
    <Script
      id="project-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default ProjectJsonLd