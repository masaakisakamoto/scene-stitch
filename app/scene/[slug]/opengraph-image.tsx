import { brand, ogDefaults } from '@/lib/brand'
import { createOgImage } from '@/lib/og'
import { getSceneSummary } from '@/lib/scenes'

export const alt = `${brand.name} scene share image`
export const size = ogDefaults.size
export const contentType = ogDefaults.contentType

type ImageProps = {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params
  const scene = getSceneSummary(slug)

  if (!scene) {
    return createOgImage({
      eyebrow: 'Scene archive',
      title: brand.name,
      subtitle: brand.tagline,
      metaLine: 'Scene not found',
      label: 'Archive',
    })
  }

  return createOgImage({
    eyebrow: 'Scene archive',
    title: scene.title,
    subtitle: scene.socialSubtitle ?? scene.dek,
    metaLine: `${scene.era} • ${scene.cities.join(' / ')}`,
    label: 'Scene',
  })
}
