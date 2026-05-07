'use client'

// Types
import { WorkType } from "@/types/documents/work-type"

// Components
import Footer from "@/components/footer"
import WorkSection from "@/components/work-section"
import Sections from "@/components/sections"

// Stop Caching
export const fetchCache = 'force-no-store'

interface WorkPageProps {
  page: WorkType
}

export default function WorkPage({ page }: WorkPageProps) {


  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <WorkSection page={page} />
        <div className="w-full flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
          <Sections body={page.sections} />
        </div>
      </main>
      <Footer />
    </>
  )
}