'use client'

// Tools
import { useState } from 'react'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'

// Types
import { PageType } from '@/types/documents/page-type'


// Components
import SanityImage from '../sanity-image'
import SimpleText from '../simple-text'


interface Props {
  page: PageType
}


export default function AboutSection({ page }: Props) {

  return (
    <section className="px-5 pt-[5rem] min-h-[calc(100vh-3.5rem)] flex flex-wrap w-full relative">
      <div className='flex items-end md:absolute md:bottom-5 w-full md:w-auto opacity-75 md:right-5'>
        {page.heroImage && (
          <SanityImage
            source={page.heroImage}
            alt={page.heroImage.alt}
            width={480}
            height={252}
            componentIndex={0}
            className='object-cover object-center'
            sizes='100vw'
          />
        )}
      </div>
      <div className='text-2xl md:text-4xl md:h-full w-full md:w-3/5 content-center leading-[3rem] md:ml-5 pt-10 md:pt-20'>
        <SimpleText content={page.heroText} />
      </div>
    </section>
  )
}