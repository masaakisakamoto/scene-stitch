import Link from 'next/link'
import { Container } from '@/components/container'
import { CtaButton } from '@/components/cta-button'
import { RelationList } from '@/components/relation-list'
import { SceneCard } from '@/components/scene-card'
import { SectionTitle } from '@/components/section-title'
import { TimelineRail } from '@/components/timeline-rail'
import { cities, noteIdeas, relationPreview } from '@/lib/site'
import { publicFeaturedScenes, publishedScenes, startHereScenes } from '@/lib/scenes'

export default function HomePage() {
  return (
    <>
      <section className="border-b border-black/10 py-20 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-black/45">Subculture archive</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              音と服から読むサブカルの歴史
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/70 md:text-lg">
              都市、人物、レコード、ブランド、雑誌。サブカルチャーは、ひとつの作品ではなく、
              複数の関係が重なったときに生まれる。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/scenes">シーンから読む</CtaButton>
              <CtaButton href="/timeline" secondary>
                年代から読む
              </CtaButton>
              <CtaButton href="/city" secondary>
                都市から読む
              </CtaButton>
            </div>
            <div className="mt-8 max-w-2xl rounded-3xl border border-black/10 bg-white p-5 text-sm leading-7 text-black/70">
              <p>
                現在公開中の旗艦記事は <strong>{publishedScenes.length}本</strong>。
                最初は狭く出し、公開後に深く育てる。SCENE/STITCH は、その方針で更新していく。
              </p>
              <p className="mt-2">
                詳しい考え方は <Link href="/about" className="underline underline-offset-4">About</Link> と{' '}
                <Link href="/method" className="underline underline-offset-4">Method</Link> へ。
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <SectionTitle title="最初に読む3つのシーン" eyebrow="Start here" />
          <div className="grid gap-4 md:grid-cols-3">
            {startHereScenes.map((scene) => (
              <SceneCard key={scene.slug} scene={scene} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 py-14 md:py-20">
        <Container>
          <SectionTitle title="年代からたどる" eyebrow="Timeline" />
          <TimelineRail />
        </Container>
      </section>

      <section className="border-t border-black/10 py-14 md:py-20">
        <Container>
          <SectionTitle title="主要シーン" eyebrow="Featured scenes" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {publicFeaturedScenes.map((scene) => (
              <SceneCard key={scene.slug} scene={scene} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 py-14 md:py-20">
        <Container>
          <SectionTitle title="都市がつくったカルチャー" eyebrow="Cities" />
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

      <section className="border-t border-black/10 py-14 md:py-20">
        <Container>
          <SectionTitle title="シーンはどうつながっているか" eyebrow="Relation map preview" />
          <RelationList items={relationPreview} />
        </Container>
      </section>

      <section className="border-t border-black/10 py-14 md:py-20">
        <Container>
          <SectionTitle title="短い考察" eyebrow="New essays / notes" />
          <div className="grid gap-4 md:grid-cols-3">
            {noteIdeas.map((note) => (
              <div key={note.slug} className="rounded-3xl border border-black/10 bg-white p-5">
                <h3 className="text-lg font-semibold tracking-tight">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/75">{note.dek}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
