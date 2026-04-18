export type SceneMeta = {
  title: string
  slug: string
  dek: string
  era: string
  cities: string[]
  tags: string[]
}

export type SceneSummary = SceneMeta & {
  published: boolean
  featured: boolean
  startHere?: boolean
  socialSubtitle?: string
}

export const scenes: SceneSummary[] = [
  {
    title: 'Punk',
    slug: 'punk',
    dek: '破壊と DIY の美学が、音を服へ変えた。',
    era: '1970s',
    cities: ['New York', 'London'],
    tags: ['DIY', 'anti-fashion', 'zine'],
    socialSubtitle: 'DIY, anti-fashion, and the look of refusal.',
    published: true,
    featured: true,
    startHere: true,
  },
  {
    title: 'Hip-Hop',
    slug: 'hip-hop',
    dek: 'ブロックパーティーから世界的なストリートウェアへ。',
    era: '1970s-1990s',
    cities: ['New York'],
    tags: ['streetwear', 'sneakers', 'logomania'],
    socialSubtitle: 'From block parties to global streetwear.',
    published: true,
    featured: true,
    startHere: true,
  },
  {
    title: 'Ura-Hara',
    slug: 'ura-hara',
    dek: '東京の店・雑誌・音楽が作った独自の回路。',
    era: '1990s-2000s',
    cities: ['Tokyo'],
    tags: ['boutique', 'magazine', 'streetwear'],
    socialSubtitle: 'Tokyo backstreets, boutiques, magazines, and sound.',
    published: true,
    featured: true,
    startHere: true,
  },
  {
    title: 'Mods',
    slug: 'mods',
    dek: '洗練はなぜサブカルになったのか。',
    era: '1960s',
    cities: ['London'],
    tags: ['tailoring', 'scooter', 'modernism'],
    socialSubtitle: 'Tailoring, scooters, and modernist cool.',
    published: false,
    featured: true,
  },
  {
    title: 'Goth',
    slug: 'goth',
    dek: '黒はなぜ思想になるのか。',
    era: '1980s',
    cities: ['London', 'Leeds'],
    tags: ['black', 'post-punk', 'romanticism'],
    socialSubtitle: 'When black became a philosophy of style.',
    published: false,
    featured: true,
  },
  {
    title: 'Rave',
    slug: 'rave',
    dek: '夜の制服としてのファッション。',
    era: '1980s-1990s',
    cities: ['Manchester', 'Berlin'],
    tags: ['club', 'acid house', 'neon'],
    socialSubtitle: 'Nightlife, uniform, and the afterimage of the club.',
    published: false,
    featured: true,
  },
  {
    title: 'Grunge',
    slug: 'grunge',
    dek: '反ファッションがファッションになるまで。',
    era: '1990s',
    cities: ['Seattle'],
    tags: ['flannel', 'distortion', 'anti-style'],
    socialSubtitle: 'How anti-style became style again.',
    published: false,
    featured: true,
  },
  {
    title: 'Visual Kei',
    slug: 'visual-kei',
    dek: '髪、メイク、衣装まで含めて、音を身体の作品へ変えた。',
    era: '1980s-2000s',
    cities: ['Tokyo', 'Osaka'],
    tags: ['androgyny', 'makeup', 'theatricality'],
    socialSubtitle: 'When music became body, hair, makeup, and costume.',
    published: true,
    featured: true,
  },
  {
    title: 'Shibuya-kei',
    slug: 'shibuya-kei',
    dek: '東京の編集感覚はどう生まれたか。',
    era: 'late 1980s-2000s',
    cities: ['Tokyo'],
    tags: ['record shop', 'design', 'sampling'],
    socialSubtitle: 'Tokyo pop built from records, shops, design, and editing.',
    published: true,
    featured: true,
  },
]

export const startHereScenes = scenes.filter((scene) => scene.startHere)
export const featuredScenes = scenes.filter((scene) => scene.featured)
export const publicFeaturedScenes = scenes.filter((scene) => scene.featured && scene.published)
export const publishedScenes = scenes.filter((scene) => scene.published)
export const draftScenes = scenes.filter((scene) => !scene.published)

export function getSceneSummary(slug: string) {
  return scenes.find((scene) => scene.slug === slug) ?? null
}

const sceneModules = {
  punk: () => import('@/content/scenes/punk.mdx'),
  'hip-hop': () => import('@/content/scenes/hip-hop.mdx'),
  'ura-hara': () => import('@/content/scenes/ura-hara.mdx'),
  'shibuya-kei': () => import('@/content/scenes/shibuya-kei.mdx'),
  'visual-kei': () => import('@/content/scenes/visual-kei.mdx'),
}

export function getSceneSlugs() {
  return Object.keys(sceneModules)
}

export async function getScenePage(slug: string) {
  const loader = sceneModules[slug as keyof typeof sceneModules]

  if (!loader) {
    return null
  }

  const mod = await loader()

  return {
    Component: mod.default,
    meta: mod.meta as SceneMeta,
  }
}
