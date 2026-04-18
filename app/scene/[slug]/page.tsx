import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/container'
import { getScenePage, getSceneSlugs } from '@/lib/scenes'
import { site } from '@/lib/site'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getSceneSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getScenePage(slug)

  if (!page) {
    return {
      title: 'Not found',
    }
  }

  return {
    title: page.meta.title,
    description: page.meta.dek,
    alternates: {
      canonical: `/scene/${slug}`,
    },
    openGraph: {
      title: page.meta.title,
      description: page.meta.dek,
      url: `${site.url}/scene/${slug}`,
      type: 'article',
    },
    twitter: {
      title: page.meta.title,
      description: page.meta.dek,
      card: 'summary_large_image',
    },
  }
}

export default async function ScenePage({ params }: PageProps) {
  const { slug } = await params
  const page = await getScenePage(slug)

  if (!page) {
    notFound()
  }

  const { Component, meta } = page

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-black/45">Scene</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{meta.title}</h1>
          <p className="mt-5 text-base leading-8 text-black/70">{meta.dek}</p>

          <dl className="mt-8 grid gap-4 rounded-3xl border border-black/10 bg-white p-5 text-sm md:grid-cols-3">
            <div>
              <dt className="text-black/45">年代</dt>
              <dd className="mt-1 font-medium text-black">{meta.era}</dd>
            </div>
            <div>
              <dt className="text-black/45">都市</dt>
              <dd className="mt-1 font-medium text-black">{meta.cities.join(' / ')}</dd>
            </div>
            <div>
              <dt className="text-black/45">タグ</dt>
              <dd className="mt-1 font-medium text-black">{meta.tags.join(' / ')}</dd>
            </div>
          </dl>

          <article className="mt-10">
            <Component />
          </article>
        </div>
      </Container>
    </section>
  )
}
