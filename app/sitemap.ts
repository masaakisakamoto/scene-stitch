import type { MetadataRoute } from 'next'
import { publishedScenes } from '@/lib/scenes'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${site.url}/scenes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${site.url}/timeline`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${site.url}/city`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${site.url}/notes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${site.url}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${site.url}/method`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${site.url}/sources`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${site.url}/changelog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]

  const sceneRoutes: MetadataRoute.Sitemap = publishedScenes.map((scene) => ({
    url: `${site.url}/scene/${scene.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...sceneRoutes]
}
