import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { SceneCard } from '@/components/scene-card'
import { SectionTitle } from '@/components/section-title'
import { draftScenes, publishedScenes } from '@/lib/scenes'

export const metadata: Metadata = {
  title: 'Scenes',
  description: 'サブカルチャーの主要シーン一覧。',
}

export default function SceneIndexPage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="公開中のシーン" eyebrow="Scenes" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {publishedScenes.map((scene) => (
            <SceneCard key={scene.slug} scene={scene} />
          ))}
        </div>

        {draftScenes.length > 0 ? (
          <div className="mt-12 border-t border-black/10 pt-12">
            <SectionTitle title="これから公開するシーン" eyebrow="In progress" />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {draftScenes.map((scene) => (
                <SceneCard key={scene.slug} scene={scene} />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
