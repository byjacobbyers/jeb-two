import { SeoType } from '../components/seo-type'
import { DefaultImageType } from '../objects/default-img-type'

export type WorkType = {
  _id: string
  _createdAt: Date
  _updatedAt: Date
  title: string
  slug: string
  thumbnail: DefaultImageType
  url?: string
  releaseDate?: Date
  stack?: {
    title: string
    type: string
  }[]
  credits?: {
    job: string
    name: string
  }[]
  logo: DefaultImageType
  orientation: 'badge' | 'button' | 'banner' | 'long'
  defaultImage: DefaultImageType
  sections?: any // Replace `any` with the appropriate type if available
  seo: SeoType
}