import Link from 'next/link'
import type { SceneSummary } from '@/lib/scenes'

export function SceneCard({ scene }: { scene: SceneSummary }) {
  const body = (
    <div className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/25">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{scene.title}</h3>
          <p className="mt-1 text-sm text-black/45">{scene.era}</p>
        </div>

        {!scene.published ? (
          <span className="rounded-full border border-black/10 px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-black/45">
            Draft
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-7 text-black/75">{scene.dek}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-black/55">
        {scene.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-black/10 px-2 py-1">
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-auto pt-5 text-sm text-black/55">{scene.cities.join(' / ')}</p>
    </div>
  )

  if (!scene.published) {
    return <div aria-disabled="true">{body}</div>
  }

  return <Link href={`/scene/${scene.slug}`}>{body}</Link>
}
