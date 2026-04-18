declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const meta: {
    title: string
    slug: string
    dek: string
    era: string
    cities: string[]
    tags: string[]
  }

  const MDXComponent: ComponentType<Record<string, never>>
  export default MDXComponent
}
