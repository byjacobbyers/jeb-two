// Tools
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client"
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Queries
import { SiteQuery } from '@/sanity/queries/documents/site-query'

// Components
import { urlFor } from '@/components/sanity-image/url'
import { metadata as defaultMetadata } from '@/app/(site)/layout'
import Footer from "@/components/footer"

// You would need to create a generic page query in Sanity
// This is a placeholder - adjust based on your Sanity schema
const PageQuery = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  content,
  seo
}`

const PagePathsQuery = `*[_type == "page" && defined(slug.current)][]{
  "slug": slug.current
}`

export async function generateStaticParams() {
  try {
    const pages = await client.fetch(PagePathsQuery)
    return pages
  } catch (error) {
    return []
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await params
    const { data: page } = await sanityFetch({
      query: PageQuery,
      params: resolvedParams,
    });
    const { data: global } = await sanityFetch({ query: SiteQuery });

    if (!page) {
      return notFound();
    }

    const result = {
      title: page.seo?.metaTitle || page.title || defaultMetadata.title,
      description: page.seo?.metaDesc || global?.[0]?.seo?.metaDesc || defaultMetadata.description,
      image: page.seo?.shareGraphic?.asset?.url || global?.[0]?.seo?.shareGraphic?.asset?.url,
    };

    return {
      metadataBase: defaultMetadata.metadataBase,
      generator: 'Next.js',
      applicationName: 'Jacob Byers | Frontend Engineer',
      publisher: 'Jacob Byers',
      title: `${result.title} | Jacob Byers`,
      description: result.description,
      openGraph: {
        title: `${result.title} | Jacob Byers`,
        description: result.description,
        images: result.image ? [
          {
            url: urlFor(result.image).width(1200).height(630).url(),
            width: 1200,
            height: 630,
            alt: result.title,
          },
        ] : [],
      },
      alternates: {
        canonical: `/${page.slug.current}`,
      },
    }
  } catch (error) {
    return notFound();
  }
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const resolvedParams = await params
    const { data: page } = await sanityFetch({
      query: PageQuery,
      params: resolvedParams,
    });

    // If no page found in Sanity, show 404
    if (!page) {
      notFound()
    }

    return (
      <>
        <main className='px-5 pt-20 min-h-[calc(100vh-3.5rem)]'>
          <h1 className='text-4xl font-bold mb-4'>{page.title}</h1>
          {/* Add your page content rendering here based on your Sanity schema */}
          <div>{page.content}</div>
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    notFound()
  }
}

