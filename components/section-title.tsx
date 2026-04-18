export function SectionTitle({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <div className="mb-6">
      {eyebrow ? <p className="text-xs tracking-[0.16em] text-black/45 uppercase">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  )
}
