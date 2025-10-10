'use client'

// Tools
import { useState } from 'react'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'

// Types
import { WorkType } from '@/types/documents/work-type'
import { PageType } from '@/types/documents/page-type'


// Components
import SanityImage from '../sanity-image'
import SimpleText from '../simple-text'


interface Props {
  projects: WorkType[]
  page: PageType
}

export default function HomeSection({ projects, page }: Props) {
  const [current, setCurrent] = useState(0)
  const [greeting, setGreeting] = useState(true)

  return (
    <section className="px-5 pt-20 min-h-[calc(100vh-3.5rem)] flex flex-wrap w-full gap-y-10">
      {/* Left Panel */}
      <div className="md:w-3/5 w-full bg-gray-900 rounded-lg overflow-hidden h-[calc(100vh-26rem)] md:h-[calc(100vh-10rem)]">
        {greeting ? (
          <div className="text-2xl md:text-4xl h-full w-full p-5 grid content-center leading-[3rem] transition-opacity duration-700 opacity-100">
            <SimpleText content={page.content} />
          </div>
        ) : (
          <div className="w-full h-full relative">
            <div className="absolute z-30 w-full h-full grid content-center justify-center">
            {projects[current].logo ? (
              <div
                key={projects[current]._id} 
                className="animate-slide-in-top"
              >
                <SanityImage
                  source={projects[current].logo}
                  alt={projects[current].logo?.alt || ''}
                  width={projects[current].logo?.asset.metadata.dimensions.width}
                  height={projects[current].logo?.asset.metadata.dimensions.height}
                  componentIndex={0}
                  className={
                    projects[current].orientation === 'banner'
                      ? 'w-[16rem] md:w-[30rem]'
                      : 'w-[14rem] md:w-[25rem]'
                  }
                  sizes="100vw"
                />
              </div>
            ) : (
              <div className="text-2xl md:text-4xl h-full w-full p-5 grid content-center leading-[3rem] transition-opacity duration-700 opacity-100">
                {/* fallback content */}
              </div>
            )}
            </div>
            <div className="w-full bg-black">
              {projects[current].defaultImage ? (
                <SanityImage
                  source={projects[current].defaultImage}
                  alt={projects[current].defaultImage?.alt}
                  width={1512}
                  height={1073}
                  componentIndex={0}
                  fill
                  className='object-cover object-center opacity-20'
                  sizes='100vw'
                />
              ) : ( 
                <div className="text-2xl md:text-4xl h-full w-full p-5 grid items-center leading-[3rem] transition-opacity duration-700 opacity-100">
                  
                </div>  
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right Panel */}
      <div className="md:w-2/5 w-full md:pl-5 md:h-[calc(100vh-10rem)] flex flex-col">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 uppercase tracking-wide text-white flex-shrink-0">
          Projects
        </h2>
        <div className="overflow-y-auto overflow-x-hidden flex-1 pr-2 flex flex-col justify-center [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-full">
        {projects.map((item, i) => (
          <Link 
            href={`/work/${item.slug}`} 
            key={i}
            onMouseEnter={() => !isMobile && (setCurrent(i), setGreeting(false))}
            onMouseLeave={() => !isMobile && (setCurrent(0), setGreeting(true))}  
          >
            <div className="p-2 border-b overflow-hidden border-white text-2xl md:text-4xl w-full mb-2 hover:cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex gap-x-2 items-center">
                <div className='w-6 h-6'>
                  <SanityImage
                    source={item.thumbnail}
                    alt={item.thumbnail.alt}
                    width={item.thumbnail.asset.metadata.dimensions.width}
                    height={item.thumbnail.asset.metadata.dimensions.height}
                    componentIndex={0}
                    className='object-contain object-center w-6 h-6'
                    sizes='100vw'
                  />
                </div>
                {item.title}
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  )
}
