export type ChangeKind = 'Launch' | 'Essay' | 'Policy' | 'Infra' | 'Correction'

export type ChangeItem = {
  date: string
  kind: ChangeKind
  title: string
  summary: string
  href?: string
  notes?: string[]
}

export const changelog: ChangeItem[] = [
  {
    date: '2026-04-18',
    kind: 'Launch',
    title: 'Launch edition を公開',
    summary:
      'SCENE/STITCH を初公開。Punk、Hip-Hop、Ura-Hara、Shibuya-kei、Visual Kei の5本を旗艦記事として公開し、About / Method / Sources を同時公開した。',
    href: '/scene',
    notes: ['思想を先に見せるため、百科事典型ではなく5本の看板記事で開始。', '世界史と東京ローカルを往復できるラインナップを初期軸に設定。'],
  },
  {
    date: '2026-04-18',
    kind: 'Infra',
    title: '共有基盤と検索エンジン向けの初期設定を整備',
    summary:
      'OG image、Twitter image、sitemap、robots、icon、manifest を実装し、共有とクロールの最低限を先に固めた。',
    href: '/method',
    notes: ['Launch 時点でリンク共有の見え方と canonical の一貫性を優先。'],
  },
  {
    date: '2026-04-18',
    kind: 'Policy',
    title: 'Method と corrections policy を公開',
    summary:
      '調査方法、公開基準、修正ルールを公開し、早く出しながら質を保つ前提をサイト内で明示した。',
    href: '/sources',
    notes: ['軽微な修正は即時反映。大きな変更は changelog 側で残す。'],
  },
] as const

export const latestChange = changelog[0]
export const changelogKinds: ChangeKind[] = ['Launch', 'Essay', 'Policy', 'Infra', 'Correction']
