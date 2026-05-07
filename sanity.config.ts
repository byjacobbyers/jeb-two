'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {structure} from './sanity/structure'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemas'
import JebLogo from '@/components/logo'

export default defineConfig({
  basePath: '/studio',
  title: 'JEB Studio',
  projectId,
  dataset,
  icon: JebLogo,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({
			structure: structure,
		}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    media(),
  ],
})
