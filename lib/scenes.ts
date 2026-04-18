export type SceneMeta = {
  title: string
  slug: string
  dek: string
  era: string
  cities: string[]
  tags: string[]
}

export type CountryCode = 'JP' | 'US' | 'UK' | 'FR' | 'BR' | 'KR' | 'DE' | 'GLOBAL'

export type SceneTrack = 'bridge-essay' | 'japan-pillar' | 'next-wave'

export type SceneDomain =
  | 'music'
  | 'fashion'
  | 'participation'
  | 'play'
  | 'place'
  | 'dance'
  | 'media'
  | 'body'

export type SceneScore = {
  globalEntry: number
  japaneseTransformation: number
  reverseInfluence: number
  sceneRichness: number
  archiveRichness: number
  bridgeValue: number
  total: number
}

export type SceneSummary = SceneMeta & {
  published: boolean
  featured: boolean
  startHere?: boolean
  socialSubtitle?: string

  track: SceneTrack
  domains: SceneDomain[]

  overseasThreads: string[]
  japaneseTransformation: string
  reverseInfluence?: string
  relatedCountries: CountryCode[]

  keyPlaces: string[]
  keyMedia: string[]
  keyPractices: string[]
  keyObjects: string[]
  relatedScenes: string[]

  score: SceneScore
}

function makeScore(
  globalEntry: number,
  japaneseTransformation: number,
  reverseInfluence: number,
  sceneRichness: number,
  archiveRichness: number,
  bridgeValue: number
): SceneScore {
  return {
    globalEntry,
    japaneseTransformation,
    reverseInfluence,
    sceneRichness,
    archiveRichness,
    bridgeValue,
    total:
      globalEntry +
      japaneseTransformation +
      reverseInfluence +
      sceneRichness +
      archiveRichness +
      bridgeValue,
  }
}

export const countryLabels: Record<CountryCode, string> = {
  JP: 'Japan',
  US: 'United States',
  UK: 'United Kingdom',
  FR: 'France',
  BR: 'Brazil',
  KR: 'Korea',
  DE: 'Germany',
  GLOBAL: 'Global internet',
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

    track: 'bridge-essay',
    domains: ['music', 'fashion', 'media', 'body'],
    overseasThreads: ['New York punk', 'London punk', 'DIY press culture'],
    japaneseTransformation:
      'Japanese punk / hardcore、Harajuku punk styling、Visual Kei 周辺の身体表現へ接続する橋。',
    reverseInfluence:
      '日本の punk / hardcore と street styling は、ニッチな海外シーンにも参照点を返している。',
    relatedCountries: ['US', 'UK', 'JP'],
    keyPlaces: ['CBGB', 'SEX', 'London', 'New York'],
    keyMedia: ['zines', 'flyers', 'record sleeves'],
    keyPractices: ['DIY publishing', 'custom clothing', 'livehouse culture'],
    keyObjects: ['safety pin', 'leather jacket', 'damaged T-shirt'],
    relatedScenes: ['visual-kei', 'harajuku-street-fashion', 'lolita-gothic-lolita'],
    score: makeScore(5, 4, 3, 5, 5, 5),
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

    track: 'bridge-essay',
    domains: ['music', 'fashion', 'dance', 'body', 'media'],
    overseasThreads: ['Bronx hip-hop', 'DJ culture', 'breaking', 'sneaker culture'],
    japaneseTransformation:
      'Japanese hip-hop、street dance、Ura-Hara、Tokyo club culture へ流れ込む起点。',
    reverseInfluence:
      '日本の DJ / dance / streetwear scene は、アジア圏や海外コレクター文化にも返っている。',
    relatedCountries: ['US', 'JP', 'KR', 'GLOBAL'],
    keyPlaces: ['Bronx', 'block parties', 'clubs'],
    keyMedia: ['mixtapes', 'music videos', 'street magazines'],
    keyPractices: ['DJing', 'breaking', 'sampling', 'street styling'],
    keyObjects: ['sneakers', 'tracksuits', 'boombox'],
    relatedScenes: ['ura-hara', 'games-arcades-character-play', 'gyaru-kogyaru-ganguro'],
    score: makeScore(5, 5, 4, 5, 5, 5),
  },
  {
    title: 'Harajuku Street Fashion',
    slug: 'harajuku-street-fashion',
    dek: '東京の路上が、世界で最も観察されたスタイル実験場になった。',
    era: '1980s-2000s',
    cities: ['Tokyo'],
    tags: ['street snap', 'Harajuku', 'kawaii'],
    socialSubtitle: 'Tokyo street style as a world-facing laboratory of looks.',
    published: true,
    featured: true,

    track: 'japan-pillar',
    domains: ['fashion', 'place', 'media', 'body'],
    overseasThreads: ['London street style', 'club culture', 'global youth fashion'],
    japaneseTransformation:
      'Harajuku の路上、FRUiTS 的 street snap、ショップ回遊、自己演出が一体化した独自の scene。',
    reverseInfluence:
      'Harajuku は world fashion media によって繰り返し再解釈され、世界中の若いスタイルに影響した。',
    relatedCountries: ['JP', 'UK', 'US', 'FR', 'GLOBAL'],
    keyPlaces: ['Harajuku', 'Takeshita Street', 'Omotesando'],
    keyMedia: ['FRUiTS', 'STREET', 'street snaps'],
    keyPractices: ['street styling', 'photography', 'shop-hopping'],
    keyObjects: ['layered accessories', 'custom garments', 'platform shoes'],
    relatedScenes: ['ura-hara', 'lolita-gothic-lolita', 'gyaru-kogyaru-ganguro'],
    score: makeScore(5, 5, 5, 5, 5, 5),
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

    track: 'japan-pillar',
    domains: ['fashion', 'music', 'place', 'media'],
    overseasThreads: ['US streetwear', 'skate culture', 'hip-hop'],
    japaneseTransformation:
      '原宿の裏通り、小規模店、限定流通、雑誌の編集感覚が streetwear を別の文化装置に変えた。',
    reverseInfluence:
      'BAPE や裏原の流通感覚は、世界の streetwear business と collector culture に返った。',
    relatedCountries: ['JP', 'US', 'UK', 'GLOBAL'],
    keyPlaces: ['Harajuku backstreets', 'NOWHERE', 'boutiques'],
    keyMedia: ['Last Orgy 2', 'FRUiTS', 'street magazines'],
    keyPractices: ['limited drops', 'shop circulation', 'brand community building'],
    keyObjects: ['graphic tees', 'camo', 'sneakers'],
    relatedScenes: ['hip-hop', 'harajuku-street-fashion', 'games-arcades-character-play'],
    score: makeScore(5, 5, 5, 5, 5, 5),
  },
  {
    title: 'Lolita / Gothic Lolita',
    slug: 'lolita-gothic-lolita',
    dek: '英国的な装飾と日本の kawaii が、Harajuku で別の品位へ変わった。',
    era: '1990s-2000s',
    cities: ['Tokyo'],
    tags: ['victorian', 'kawaii', 'gothic'],
    socialSubtitle: 'Victorian echoes, kawaii discipline, and Harajuku reinvention.',
    published: false,
    featured: true,

    track: 'japan-pillar',
    domains: ['fashion', 'body', 'place', 'media'],
    overseasThreads: ['Victorian dress', 'goth', 'punk'],
    japaneseTransformation:
      'Harajuku の street style と kawaii の文脈で、modesty と theatricality を両立する独自の装いへ変形した。',
    reverseInfluence:
      '海外の Lolita communities は、日本のブランド、雑誌、イベントを起点に広がった。',
    relatedCountries: ['JP', 'UK', 'FR', 'US', 'GLOBAL'],
    keyPlaces: ['Harajuku', 'boutiques', 'fashion walks'],
    keyMedia: ['KERA', 'street snaps', 'brand lookbooks'],
    keyPractices: ['coordinating', 'meetups', 'self-styling'],
    keyObjects: ['petticoat', 'headpiece', 'lace blouse'],
    relatedScenes: ['harajuku-street-fashion', 'visual-kei', 'punk'],
    score: makeScore(5, 5, 4, 5, 5, 5),
  },
  {
    title: 'Gyaru / Kogyaru / Ganguro',
    slug: 'gyaru-kogyaru-ganguro',
    dek: '90s–2000s の女子ストリートは、規範からズレること自体をスタイルにした。',
    era: '1990s-2000s',
    cities: ['Tokyo', 'Shibuya'],
    tags: ['youth style', 'rebellion', 'street fashion'],
    socialSubtitle: 'A youth style that turned deviation itself into a look.',
    published: false,
    featured: true,

    track: 'japan-pillar',
    domains: ['fashion', 'body', 'place', 'media'],
    overseasThreads: ['California glamour', 'club fashion', 'street youth style'],
    japaneseTransformation:
      'Shibuya の女子ストリートと media environment の中で、日焼け肌、盛った hair/makeup、制服の変形が独自の記号になった。',
    reverseInfluence:
      '極端な Japanese youth style の象徴として、海外メディアや internet fashion communities で参照された。',
    relatedCountries: ['JP', 'US', 'KR', 'GLOBAL'],
    keyPlaces: ['Shibuya', '109', 'street corners'],
    keyMedia: ['fashion magazines', 'purikura', 'TV variety coverage'],
    keyPractices: ['makeup styling', 'group styling', 'photo culture'],
    keyObjects: ['platform sandals', 'bleached hair', 'decorated phones'],
    relatedScenes: ['harajuku-street-fashion', 'hip-hop', 'games-arcades-character-play'],
    score: makeScore(4, 5, 3, 5, 4, 4),
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

    track: 'japan-pillar',
    domains: ['music', 'media', 'place', 'fashion'],
    overseasThreads: ['British retro-pop', 'French pop', 'American pop', 'bossa nova'],
    japaneseTransformation:
      '渋谷の record shop、graphic design、boutique culture が、輸入ポップを東京的編集感覚に変えた。',
    reverseInfluence:
      '海外の indie listeners、crate-diggers、reissue culture が日本の編集感覚を再発見した。',
    relatedCountries: ['JP', 'UK', 'US', 'FR', 'BR'],
    keyPlaces: ['Shibuya', 'record shops', 'cafés'],
    keyMedia: ['CD shops', 'music magazines', 'graphic design'],
    keyPractices: ['record digging', 'sampling', 'curation'],
    keyObjects: ['CDs', 'vinyl', 'magazine graphics'],
    relatedScenes: ['city-pop-record-culture', 'harajuku-street-fashion', 'ura-hara'],
    score: makeScore(5, 5, 4, 5, 5, 5),
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

    track: 'japan-pillar',
    domains: ['music', 'fashion', 'body', 'media'],
    overseasThreads: ['glam rock', 'punk', 'new wave', 'goth'],
    japaneseTransformation:
      '日本の live house culture、fan magazines、hair/makeup practices が、音を身体表現の総合芸術へ拡張した。',
    reverseInfluence:
      '海外ファンコミュニティと convention culture の中で、日本発の aesthetic category として受容された。',
    relatedCountries: ['JP', 'UK', 'US', 'FR', 'GLOBAL'],
    keyPlaces: ['live houses', 'Tokyo', 'Osaka'],
    keyMedia: ['Fool’s Mate', 'SHOXX', 'fan magazines'],
    keyPractices: ['hair styling', 'makeup', 'costume-making', 'live performance'],
    keyObjects: ['teased hair', 'makeup kits', 'stage costume'],
    relatedScenes: ['punk', 'lolita-gothic-lolita', 'harajuku-street-fashion'],
    score: makeScore(5, 5, 4, 5, 5, 5),
  },
  {
    title: 'Akihabara / Otaku Culture',
    slug: 'akihabara-otaku-culture',
    dek: '電気街は、アニメ・ゲーム・フィギュア・メイド文化の国際ハブへ変わった。',
    era: '1990s-present',
    cities: ['Tokyo'],
    tags: ['otaku', 'anime', 'games'],
    socialSubtitle: 'From electric town to a global hub of fandom and play.',
    published: false,
    featured: true,

    track: 'japan-pillar',
    domains: ['participation', 'play', 'place', 'media'],
    overseasThreads: ['science fiction fandom', 'gaming culture', 'collector culture'],
    japaneseTransformation:
      '電気街、アニメショップ、game centers、maid cafés、figure culture が密集する都市型 fandom hub になった。',
    reverseInfluence:
      'Akihabara は世界の otaku imagination における定番地名となり、巡礼先の役割も持つ。',
    relatedCountries: ['JP', 'US', 'FR', 'KR', 'GLOBAL'],
    keyPlaces: ['Akihabara', 'shops', 'arcades', 'cafés'],
    keyMedia: ['anime magazines', 'game magazines', 'photoblogs'],
    keyPractices: ['collecting', 'shopping', 'pilgrimage', 'arcade play'],
    keyObjects: ['figures', 'retro games', 'character goods'],
    relatedScenes: ['doujinshi-comiket', 'cosplay-world-cosplay-summit', 'games-arcades-character-play'],
    score: makeScore(5, 5, 4, 5, 5, 5),
  },
  {
    title: 'Doujinshi / Comiket',
    slug: 'doujinshi-comiket',
    dek: '日本のサブカルは、消費するだけでなく、自分で作って流通させる文化でもある。',
    era: '1970s-present',
    cities: ['Tokyo'],
    tags: ['self-publishing', 'fandom', 'events'],
    socialSubtitle: 'A culture of making, circulating, and gathering around fan works.',
    published: false,
    featured: true,

    track: 'japan-pillar',
    domains: ['participation', 'media', 'place'],
    overseasThreads: ['zine culture', 'fan communities', 'small press traditions'],
    japaneseTransformation:
      'doujinshi 即売会、二次創作、匿名性のある創作参加、巨大即売会という独特の流通回路を発達させた。',
    reverseInfluence:
      'fan convention culture と self-publishing discourse の中で、Comiket は特異な参照点として語られている。',
    relatedCountries: ['JP', 'US', 'FR', 'GLOBAL'],
    keyPlaces: ['Comiket', 'event halls', 'Akihabara'],
    keyMedia: ['doujinshi', 'catalogs', 'fanbooks'],
    keyPractices: ['self-publishing', 'selling at events', 'fan creation'],
    keyObjects: ['doujinshi books', 'catalogs', 'booth displays'],
    relatedScenes: ['akihabara-otaku-culture', 'cosplay-world-cosplay-summit', 'games-arcades-character-play'],
    score: makeScore(5, 5, 4, 5, 5, 5),
  },
  {
    title: 'Cosplay / World Cosplay Summit',
    slug: 'cosplay-world-cosplay-summit',
    dek: 'キャラクターへの愛着が、国境を越える身体表現と祭りになった。',
    era: '1990s-present',
    cities: ['Nagoya', 'Tokyo'],
    tags: ['performance', 'fandom', 'costume'],
    socialSubtitle: 'Character love turned into international performance and festival culture.',
    published: false,
    featured: true,

    track: 'japan-pillar',
    domains: ['participation', 'fashion', 'body', 'place'],
    overseasThreads: ['convention cosplay', 'costume fandom', 'performance culture'],
    japaneseTransformation:
      'anime / manga / game fandom と結びつき、イベント、撮影、ステージ、国際大会まで含む参加文化へ広がった。',
    reverseInfluence:
      '日本起点の cosplay vocabulary とイベント感覚は、世界中の fandom gatherings に浸透した。',
    relatedCountries: ['JP', 'US', 'FR', 'BR', 'KR', 'GLOBAL'],
    keyPlaces: ['World Cosplay Summit', 'conventions', 'event venues'],
    keyMedia: ['event photography', 'fan sites', 'social platforms'],
    keyPractices: ['costume-making', 'posing', 'performance', 'community gathering'],
    keyObjects: ['costumes', 'props', 'wigs'],
    relatedScenes: ['doujinshi-comiket', 'akihabara-otaku-culture', 'visual-kei'],
    score: makeScore(5, 5, 5, 5, 4, 5),
  },
  {
    title: 'Games / Arcades / Character Play',
    slug: 'games-arcades-character-play',
    dek: '日本の遊びは、ゲーム機・ゲームセンター・キャラクターを通じて文化の基盤になった。',
    era: '1970s-present',
    cities: ['Tokyo', 'Kyoto', 'Osaka'],
    tags: ['games', 'arcades', 'characters'],
    socialSubtitle: 'How games, arcades, and characters became cultural infrastructure.',
    published: false,
    featured: true,

    track: 'japan-pillar',
    domains: ['play', 'participation', 'place', 'media'],
    overseasThreads: ['arcade culture', 'console gaming', 'toy and character industries'],
    japaneseTransformation:
      '家庭用ゲーム、arcades、character economy、Akihabara 的な collector culture が密接に結びついた。',
    reverseInfluence:
      'Nintendo、arcade design、character play は世界の遊び方そのものに強く影響してきた。',
    relatedCountries: ['JP', 'US', 'UK', 'FR', 'GLOBAL'],
    keyPlaces: ['arcades', 'Akihabara', 'Kyoto'],
    keyMedia: ['game magazines', 'TV game programs', 'guidebooks'],
    keyPractices: ['arcade play', 'collecting', 'character attachment'],
    keyObjects: ['consoles', 'controllers', 'capsule toys'],
    relatedScenes: ['akihabara-otaku-culture', 'doujinshi-comiket', 'hip-hop'],
    score: makeScore(5, 5, 5, 5, 5, 4),
  },
]

export const startHereScenes = scenes.filter((scene) => scene.startHere)
export const featuredScenes = scenes.filter((scene) => scene.featured)
export const publicFeaturedScenes = scenes.filter((scene) => scene.featured && scene.published)
export const publishedScenes = scenes.filter((scene) => scene.published)
export const draftScenes = scenes.filter((scene) => !scene.published)

export const bridgeEssays = scenes.filter((scene) => scene.track === 'bridge-essay')
export const japanPillars = scenes.filter((scene) => scene.track === 'japan-pillar')
export const nextWaveScenes = scenes.filter((scene) => scene.track === 'next-wave')

export const publishedBridgeEssays = bridgeEssays.filter((scene) => scene.published)
export const plannedBridgeEssays = bridgeEssays.filter((scene) => !scene.published)

export const publishedJapanPillars = japanPillars.filter((scene) => scene.published)
export const plannedJapanPillars = japanPillars.filter((scene) => !scene.published)

export const flagshipTwelve = [...bridgeEssays, ...japanPillars]

export const nextWaveCandidates = [
  'Tokyo club / rave / techno / house',
  'Vocaloid / Niconico / internet-born scenes',
  'City Pop / record digging / reissue culture',
  'Japanese punk / hardcore',
  'BL / fujoshi / Otome Road',
  'Gunpla / sofubi / gacha / figure culture',
  'Kawaii as concept',
  'Jazz kissaten / record shop culture',
  'Para Para / Wotagei',
  'Skate / BMX / street sports',
  'Bosozoku / yankii / vehicle fringe',
  'Purikura / keitai / mobile media culture',
] as const

export function getSceneSummary(slug: string) {
  return scenes.find((scene) => scene.slug === slug) ?? null
}

export function getScenesByCountry(country: CountryCode) {
  return scenes.filter((scene) => scene.relatedCountries.includes(country))
}

const sceneModules = {
  punk: () => import('@/content/scenes/punk.mdx'),
  'hip-hop': () => import('@/content/scenes/hip-hop.mdx'),
  'ura-hara': () => import('@/content/scenes/ura-hara.mdx'),
  'shibuya-kei': () => import('@/content/scenes/shibuya-kei.mdx'),
  'visual-kei': () => import('@/content/scenes/visual-kei.mdx'),
  'harajuku-street-fashion': () => import('@/content/scenes/harajuku-street-fashion.mdx'),
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
