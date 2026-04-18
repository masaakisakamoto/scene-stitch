import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { SectionTitle } from '@/components/section-title'
import { cities } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cities',
  description: '都市からサブカルチャーを読むための入口。',
}

export default function CityPage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="都市一覧" eyebrow="Cities" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cities.map((city) => (
            <div key={city.slug} className="rounded-3xl border border-black/10 bg-white p-5">
              <h3 className="text-lg font-semibold tracking-tight">{city.name}</h3>
              <p className="mt-3 text-sm leading-7 text-black/75">{city.dek}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
