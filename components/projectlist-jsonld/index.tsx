'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { WorkJSONQuery } from '@/sanity/queries/documents/work-query'

const ProjectListJsonLd = () => {
  const [jsonLdContent, setJsonLdContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(WorkJSONQuery)

      if (data && data.length > 0) {
        const itemList = data.map((item: any, index: number) => ({
          '@type': 'CreativeWork',
          position: index + 1,
          name: item.title,
          url: `https://www.jacobbyers.me/work/${item.slug}`,
          description: item.description,
          image: item.image?.asset?.url || undefined,
        }))

        const jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Projects',
          url: 'https://www.jacobbyers.me/',
          description: 'A curated list of frontend development projects by Jacob Byers.',
          itemListElement: itemList,
        }

        setJsonLdContent(JSON.stringify(jsonLd))
      } else {
        console.log('No project data found')
      }
    }

    fetchData()
  }, [])

  return jsonLdContent ? (
    <Script
      id="project-list-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  ) : null
}

export default ProjectListJsonLd
