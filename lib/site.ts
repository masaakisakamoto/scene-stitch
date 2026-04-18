const DEFAULT_LOCAL_URL = 'http://localhost:3000'

function normalizeSiteUrl(value?: string | null) {
  if (!value) return null

  const trimmed = value.trim().replace(/\/$/, '')

  if (!trimmed) return null
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  if (trimmed.startsWith('localhost') || trimmed.startsWith('127.0.0.1')) {
    return `http://${trimmed}`
  }

  return `https://${trimmed}`
}

const resolvedSiteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL) ??
  DEFAULT_LOCAL_URL

const author = process.env.NEXT_PUBLIC_SITE_AUTHOR ?? 'SCENE/STITCH'

export const site = {
  name: 'SCENE/STITCH',
  author,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? null,
  description: '音と服の交差点から、サブカルチャーの歴史を読むアーカイブ。',
  descriptionEn: 'A subculture archive that reads history through music, fashion, cities, people, and scenes.',
  url: resolvedSiteUrl,
  socialLinks: [
    {
      label: 'GitHub',
      href: process.env.NEXT_PUBLIC_GITHUB_URL,
    },
    {
      label: 'Instagram',
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    },
    {
      label: 'X',
      href: process.env.NEXT_PUBLIC_X_URL,
    },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href)),
} as const

export const navigation = [
  { href: '/scenes', label: 'Scenes' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/city', label: 'Cities' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
] as const

export const relationPreview = [
  'Punk → DIY → Zine → Boutique',
  'Hip-Hop → Sneakers → Streetwear → Tokyo',
  'Shibuya-kei → Record Shop → Graphic Design → Boutique Culture',
] as const

export const noteIdeas = [
  {
    slug: 'anti-fashion',
    title: 'なぜ反ファッションは何度も流行するのか',
    dek: 'Punk、Grunge、Normcore に通底する「整えすぎない」美学を考える。',
  },
  {
    slug: 'record-shop',
    title: 'レコードショップはなぜ文化の核だったのか',
    dek: 'ただの販売店ではなく、出会いと編集の場としての店を整理する。',
  },
  {
    slug: 'black-style',
    title: '黒はどうして思想になるのか',
    dek: 'Goth、Post-Punk、Mode における「黒」の意味を並べて読む。',
  },
] as const

export const cities = [
  {
    slug: 'london',
    name: 'London',
    dek: 'Punk、Mods、Boutique culture が交差した都市。',
  },
  {
    slug: 'new-york',
    name: 'New York',
    dek: 'CBGB、Hip-Hop、Downtown の実験が同時多発した都市。',
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    dek: 'Shibuya-kei、Visual Kei、Ura-Hara の編集都市。',
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    dek: 'Nightlife と electronic culture の磁場。',
  },
  {
    slug: 'seattle',
    name: 'Seattle',
    dek: 'Grunge が都市の空気とともに可視化された場所。',
  },
] as const

export const timeline = [
  {
    era: '1950s',
    labels: ['Rockabilly', 'Youth culture', 'Leather jacket'],
  },
  {
    era: '1960s',
    labels: ['Mods', 'Boutique', 'London'],
  },
  {
    era: '1970s',
    labels: ['Punk', 'DIY', 'Zine'],
  },
  {
    era: '1980s',
    labels: ['Hip-Hop', 'Sneakers', 'Club culture'],
  },
  {
    era: '1990s',
    labels: ['Grunge', 'Shibuya-kei', 'Streetwear'],
  },
  {
    era: '2000s',
    labels: ['Ura-Hara legacy', 'Internet scene', 'Archive fashion'],
  },
] as const
