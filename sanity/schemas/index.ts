import { type SchemaTypeDefinition } from 'sanity'

// documents
import site from './documents/site-schema'
import home from './documents/home-schema'
import about from './documents/about-schema'
import work from './documents/work-schema'

// components
import sections from './components/page-builder-schema'
import textBlock from './components/text-block-schema'
import quoteBlock from './components/quote-block-schema'
import seo from './components/seo-schema'
import social from './components/social-schema'

// objects
import defaultImage from './objects/default-img-schema'
import cta from './objects/cta-schema'
import normalText from './objects/normal-text-schema'
import simpleText from './objects/simple-text-schema'
import route from './objects/route-schema'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    site,
    home,
    about,
    work,

    // components
    sections,
    textBlock,
    quoteBlock,
    seo,
    social,

    // objects
    defaultImage,
    cta,
    normalText,
    simpleText,
    route,

  ],
}
