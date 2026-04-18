import { timeline } from '@/lib/site'

export function TimelineRail() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max gap-4">
        {timeline.map((item) => (
          <div key={item.era} className="w-56 rounded-3xl border border-black/10 bg-white p-5">
            <p className="text-lg font-semibold tracking-tight">{item.era}</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-black/70">
              {item.labels.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
