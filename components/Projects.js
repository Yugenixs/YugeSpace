import { projects, tagColors } from '../data/projects'

export default function Projects() {
  return (
    <section className="py-12 sm:py-16" id="proyek">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-code-branch text-[#92003A] mr-2 sm:mr-3"></i>Projects
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Data pipeline, bot automation, dan produk web yang saya kembangkan
      </p>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`border-4 border-black rounded-xl brutal-shadow p-4 sm:p-5 brutal-card card-glow reveal ${p.delay}`}
            style={{ background: p.bg, color: p.text }}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-4 border-black bg-[#F62477] flex items-center justify-center text-white text-base sm:text-lg shrink-0 brutal-shadow-sm">
                <i className={p.icon}></i>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-black uppercase tracking-tight mb-1" style={{ color: p.heading }}>{p.title}</h3>
                <p className="font-bold text-[10px] sm:text-xs leading-relaxed" style={{ color: p.text }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className={`border-2 border-black rounded-lg px-2 sm:px-2.5 py-0.5 text-[8px] sm:text-[9px] font-bold ${tagColors[t] || 'bg-gray-200 text-black'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 font-bold text-[8px] sm:text-[9px] uppercase bg-black text-white border-2 border-black rounded-lg px-3 py-1.5 brutal-shadow-sm brutal-btn"
                >
                  <i className="fas fa-arrow-up-right-from-square"></i> Lihat Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
