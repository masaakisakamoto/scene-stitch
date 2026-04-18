import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { SectionTitle } from '@/components/section-title'
import { timeline } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Timeline',
  description: '年代ごとにサブカルチャーの流れを眺める。',
}

export default function TimelinePage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="年代からたどる" eyebrow="Timeline" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.era} className="rounded-3xl border border-black/10 bg-white p-5">
              <h3 className="text-lg font-semibold tracking-tight">{item.era}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-black/75">
                {item.labels.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
