import { techCategories } from '../data/techStack'

const items = techCategories.flatMap((cat) =>
  cat.items.map((item) => ({ icon: item.icon, color: item.color, label: item.label }))
)

export default function MarqueeSection() {
  const doubled = [...items, ...items]
  return (
    <div className="border-4 border-brutal rounded-xl brutal-shadow bg-[var(--surface)] overflow-hidden my-6 sm:my-10">
      <div className="flex gap-8 sm:gap-12 py-3 sm:py-4 px-4 sm:px-6 marquee text-[10px] sm:text-[11px] font-bold uppercase tracking-wide" style={{ color: 'var(--text-sec)' }}>
        {doubled.map((item, i) => (
          <span key={i}>
            <i className={`${item.icon}`} style={{ color: item.color, marginRight: '0.375rem' }}></i>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
