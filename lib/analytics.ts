const trim = (value?: string | null) => value?.trim() || null

export const analytics = {
  googleAnalyticsId: trim(process.env.NEXT_PUBLIC_GA_ID),
  enableVercelAnalytics: process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === 'true',
} as const

export const measurementPriorities = [
  'どの記事が最初の入口になっているか',
  'トップから Scene 記事への遷移が起きているか',
  'About / Method にどれくらい読者が流れているか',
  'どの参照元が継続的に質の高い読者を連れてくるか',
] as const
