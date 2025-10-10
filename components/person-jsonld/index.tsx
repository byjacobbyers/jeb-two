'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { SiteQuery } from '@/sanity/queries/documents/site-query'

const PersonJsonLd = () => {
  const [jsonLdContent, setJsonLdContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(SiteQuery)
      if (data && data.length > 0) {
        const siteData = data[0]

        const jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://www.jacobbyers.me/#person',
          name: siteData.title || 'Jacob Byers',
          alternateName: siteData.altTitle,
          givenName: 'Jacob',
          familyName: 'Byers',
          jobTitle: 'Frontend Engineer',
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
            '@id': 'https://www.jacobbyers.me/#organization'
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
            siteData.social?.patreon,
            siteData.social?.twitch,
            siteData.social?.threads,
          ].filter(Boolean),
          description: 'Jacob Byers is a senior freelance web developer who specializes in high-performance, scalable websites built with modern tools like Next.js, Sanity.io, and Vercel. He partners with marketing teams to craft composable, future-proof digital experiences that evolve with their business. With a background in both design systems and technical SEO, Jacob combines clean code with strategic thinking to help brands move faster, iterate easier, and stay ahead of the curve.',
          knowsAbout: [
            'Frontend Development',
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Web Development',
            'User Experience',
            'Responsive Design'
          ],
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Frontend Engineer',
            description: 'Specializes in building user-friendly web applications using modern frameworks and technologies.'
          },
          alumniOf: {
            '@type': 'Organization',
            name: 'Arizona State University'
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
      id="person-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  ) : null
}

export default PersonJsonLd
