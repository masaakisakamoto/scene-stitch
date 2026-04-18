export function RelationList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="rounded-3xl border border-black/10 bg-white p-5 text-sm leading-7 text-black/75">
          {item}
        </li>
      ))}
    </ul>
  )
}
