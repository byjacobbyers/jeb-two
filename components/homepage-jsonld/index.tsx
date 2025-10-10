'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { SiteQuery } from '@/sanity/queries/documents/site-query'

const HomePageJsonLd = () => {
  const [jsonLdContent, setJsonLdContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(SiteQuery)
      if (data && data.length > 0) {
        const siteData = data[0]

        const jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': 'https://www.jacobbyers.me/#webpage',
          name: 'Jacob Byers | Frontend Engineer',
          url: 'https://www.jacobbyers.me/',
          description: siteData.seo?.metaDesc || 'Portfolio of Jacob Byers, a frontend engineer with a passion for building user-friendly web applications.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.jacobbyers.me/',
              },
            ],
          },
          mainEntity: {
            '@type': 'Person',
            '@id': 'https://www.jacobbyers.me/#person',
            name: siteData.title || 'Jacob Byers',
            alternateName: siteData.altTitle,
            jobTitle: 'Frontend Engineer',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance'
            },
            image: 'https://cdn.sanity.io/images/w9zn3gtf/production/d9b9e38a3a52dd3cc051b0cf37e5e7e212f87e13-1200x630.jpg',
            url: 'https://www.jacobbyers.me/',
            address: {
              '@type': 'PostalAddress',
              addressLocality: siteData.addressLocality,
              addressRegion: siteData.addressRegion,
              addressCountry: siteData.addressCountry,
            },
            contactPoint: {
              '@type': 'ContactPoint',
              email: siteData.email,
              contactType: 'business inquiry'
            },
            sameAs: [
              siteData.social?.linkedin,
              siteData.social?.github,
              siteData.social?.twitter,
              siteData.social?.instagram,
              siteData.social?.facebook,
              siteData.social?.youtube,
              siteData.social?.tiktok,
              siteData.social?.pinterest,
              siteData.social?.reddit,
              siteData.social?.patreon,
              siteData.social?.twitch,
              siteData.social?.threads,
            ].filter(Boolean),
            description: siteData.seo?.metaDesc || 'Frontend engineer specializing in React, Next.js, and modern web development.',
          },
          inLanguage: 'en-US'
        }

        setJsonLdContent(JSON.stringify(jsonLd))
      } else {
        console.log('No data received from fetch')
      }
    }

    fetchData()
  }, [])

  return jsonLdContent ? (
    <Script
      id="homepage-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  ) : null
}

export default HomePageJsonLd
