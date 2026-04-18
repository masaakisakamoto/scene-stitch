import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { analytics } from '@/lib/analytics'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author }],
  creator: site.author,
  publisher: site.name,
  keywords: [
    'subculture',
    'music history',
    'fashion history',
    'punk',
    'hip-hop',
    'ura-hara',
    'shibuya-kei',
    'visual kei',
  ],
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: '/',
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    url: site.url,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f2eb',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {analytics.enableVercelAnalytics ? <VercelAnalytics /> : null}
      </body>
      {analytics.googleAnalyticsId ? <GoogleAnalytics gaId={analytics.googleAnalyticsId} /> : null}
    </html>
  )
}
