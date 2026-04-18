import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { SectionTitle } from '@/components/section-title'
import { noteIdeas } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Notes',
  description: '短い考察やメモの置き場。',
}

export default function NotesPage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="短い考察" eyebrow="Notes" />
        <div className="grid gap-4 md:grid-cols-3">
          {noteIdeas.map((note) => (
            <article key={note.slug} className="rounded-3xl border border-black/10 bg-white p-5">
              <h3 className="text-lg font-semibold tracking-tight">{note.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/75">{note.dek}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
