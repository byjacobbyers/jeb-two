'use client'

// Tools
import Link from 'next/link'
import { usePlausible } from 'next-plausible'

// Types
import { WorkType } from '@/types/documents/work-type'


// Components
import SanityImage from '../sanity-image'


interface Props {
  page: WorkType
}


export default function WorkSection({ page }: Props) {
  const plausible = usePlausible()

  return (
    <section className="px-5 pt-[5rem] min-h-[calc(100vh-3.5rem)] flex flex-wrap w-full relative gap-y-10">
      <div className='w-full md:w-3/5 bg-gray-900 rounded-lg overflow-hidden block group relative min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-8rem)]'>
        <div className="absolute z-30 w-full h-full grid content-center justify-center">
          {page.logo && (
            <div
              key={page._id}
              className="animate-slide-in-top"
            >
              <SanityImage
                source={page.logo}
                alt={page.logo?.alt || ''}
                width={page.logo?.asset.metadata.dimensions.width}
                height={page.logo?.asset.metadata.dimensions.height}
                componentIndex={0}
                className={
                  page.orientation === 'banner'
                    ? 'w-[16rem] md:w-[30rem]'
                    : 'w-[14rem] md:w-[25rem]'
                }
                sizes="100vw"
              />
            </div>
          )}
        </div>
        <div className="absolute bottom-5 z-30 w-full flex justify-between px-5">
          <h1 className="text-xl md:text-[30px]">{page.title}</h1>
          {page.url && (
            <Link 
              href={page.url} className='hover:underline no-underline text-xl md:text-[30px]'
              onClick={() => plausible('Project Site Click', { props: { project: page.title } })}
            >
              Visit Site
            </Link>
          )}
        </div>
        <div className='w-full'>
          {page.defaultImage && (
            <SanityImage
              source={page.defaultImage}
              alt={page.defaultImage.alt}
              width={1512}
              height={1073}
              componentIndex={0}
              fill
              className='object-cover object-center opacity-20'
              sizes='100vw'
            />
          )}
        </div>
      </div>
      <div className='w-full md:w-2/5 grid md:pl-5 content-center'>
        <h2 className='w-full border-b border-white text-white/75'>The Tech Stack</h2>
        {page.stack?.map((item, i) => {
          return (
            <div className="p-2 border-b overflow-hidden border-white w-full mb-2 items-end" key={`tech-${i}`}>
              <div
                className="flex place-content-between w-full"
              >
                <span className="text-2xl md:text-4xl">{item.title}</span>
                <span className="text-large md:text-2xl text-white/75">{item.type}</span>
              </div>
            </div>
          )
        })}
        {page.credits && (<h2 className='w-full border-b border-white mt-8 text-white/75'>Special Thanks</h2>)}
        {page.credits?.map((item, i) => {
          return (
            <div className="p-2 border-b overflow-hidden border-white w-full mb-2 items-end" key={`job-${i}`}>
              <div
                className="flex place-content-between items-center w-full"
              >
                <span className="text-2xl md:text-4xl">{item.job}</span>
                <span className="text-large md:text-2xl text-white/75">{item.name}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}