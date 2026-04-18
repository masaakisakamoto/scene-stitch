import { brand, ogCopy, ogDefaults } from '@/lib/brand'
import { createOgImage } from '@/lib/og'

export const alt = `${brand.name} method page share image`
export const size = ogDefaults.size
export const contentType = ogDefaults.contentType

export default function Image() {
  return createOgImage(ogCopy.method)
}
