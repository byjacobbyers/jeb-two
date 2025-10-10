'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { SiteQuery } from '@/sanity/queries/documents/site-query'

const OrganizationJsonLd = () => {
  const [jsonLdContent, setJsonLdContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(SiteQuery)
      if (data && data.length > 0) {
        const siteData = data[0]

        const jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://jacobbyers.me/#organization',
          name: 'Jacob Byers - Freelance Frontend Development',
          alternateName: 'Jacob Byers Web Development',
          url: 'https://jacobbyers.me/',
          logo: 'https://cdn.sanity.io/images/w9zn3gtf/production/d9b9e38a3a52dd3cc051b0cf37e5e7e212f87e13-1200x630.jpg',
          image: 'https://cdn.sanity.io/images/w9zn3gtf/production/d9b9e38a3a52dd3cc051b0cf37e5e7e212f87e13-1200x630.jpg',
          description: 'Freelance frontend development services specializing in React, Next.js, and modern web applications.',
          foundingDate: '2020',
          founder: {
            '@type': 'Person',
            '@id': 'https://jacobbyers.me/#person',
            name: siteData.title || 'Jacob Byers',
            url: 'https://jacobbyers.me/'
          },
          employee: {
            '@type': 'Person',
            '@id': 'https://jacobbyers.me/#person',
            name: siteData.title || 'Jacob Byers',
            jobTitle: 'Frontend Engineer'
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteData.addressLocality,
            addressRegion: siteData.addressRegion,
            addressCountry: siteData.addressCountry,
          },
          contactPoint: {
            '@type': 'ContactPoint',
            email: siteData.email,
            contactType: 'business inquiry',
            availableLanguage: 'English'
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
            siteData.social?.snapchat,
            siteData.social?.patreon,
            siteData.social?.twitch,
            siteData.social?.threads,
          ].filter(Boolean),
          serviceArea: {
            '@type': 'Country',
            name: 'United States'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Web Development Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Frontend Development',
                  description: 'Custom React and Next.js applications'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Web Application Development',
                  description: 'Full-stack web applications with modern frameworks'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'UI/UX Implementation',
                  description: 'Converting designs into responsive, interactive web experiences'
                }
              }
            ]
          }
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
      id="organization-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  ) : null
}

export default OrganizationJsonLd