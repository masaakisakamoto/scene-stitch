export const brand = {
  name: 'SCENE/STITCH',
  mark: 'S/S',
  tagline: 'Sound, Style, Subculture',
  socialByline: 'Music, fashion, cities, people, and magazines.',
  colors: {
    paper: '#f5f2eb',
    ink: '#111111',
    muted: '#5e5a54',
    line: '#d7d0c6',
    soft: '#ebe5db',
  },
} as const

export const ogDefaults = {
  size: {
    width: 1200,
    height: 630,
  },
  contentType: 'image/png',
} as const

export const ogCopy = {
  home: {
    eyebrow: 'Subculture archive',
    title: 'SCENE/STITCH',
    subtitle: 'Sound, Style, Subculture',
    metaLine: 'Music • Fashion • Cities • People • Magazines',
    label: 'Launch edition',
  },
  about: {
    eyebrow: 'Editorial archive',
    title: 'Why scenes matter',
    subtitle: 'A subculture archive built around relations, not isolated genres.',
    metaLine: 'About • Editorial stance • Archive',
    label: 'About',
  },
  method: {
    eyebrow: 'Research method',
    title: 'How SCENE/STITCH is made',
    subtitle: 'Research-driven, editorial, and released early without lowering the bar.',
    metaLine: 'Sources • Method • Release rhythm',
    label: 'Method',
  },
  changelog: {
    eyebrow: 'Release log',
    title: 'What changed, and why',
    subtitle: 'A public changelog for launches, corrections, structural updates, and editorial shifts.',
    metaLine: 'Changelog • Corrections • Release rhythm',
    label: 'Changelog',
  },
} as const
