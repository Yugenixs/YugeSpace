import { techCategories } from '../data/techStack'

export default function TechStack() {
  return (
    <section className="py-12 sm:py-16" id="tech">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-layer-group text-[#FFADEE] mr-2 sm:mr-3"></i>Tech Stack
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Yang sering dipake sehari-hari
      </p>
      <div className="space-y-6 sm:space-y-8">
        {techCategories.map((cat, ci) => (
          <div key={ci} className={`reveal ${cat.delay}`}>
            <h3 className="font-black text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 border-b-4 border-brutal pb-2" style={{ color: 'var(--text)' }}>
              <i className={`${cat.icon} mr-2`}></i>{cat.title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cat.items.map((item, ii) => (
                <span
                  key={ii}
                  className={`border-4 border-black rounded-xl px-3 sm:px-5 py-2 sm:py-3 font-bold text-[10px] sm:text-xs uppercase brutal-card ${item.textWhite ? 'text-white' : ''}`}
                  style={{ background: item.color }}
                >
                  <i className={`${item.icon} mr-1.5`}></i>{item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
