import type {StructureResolver} from 'sanity/structure'
import Global from './global-structure'
import Home from './home-structure'
import About from './about-structure'
import Work from './work-structure'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      Home(S),
      About(S),
      Work(S, context),
      Global(S),
    ])
