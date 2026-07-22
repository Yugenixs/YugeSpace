export default function About() {
  return (
    <section className="py-12 sm:py-16" id="tentang">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-user-circle text-[#F62477] mr-2 sm:mr-3"></i>Tentang
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Data Scientist & Bot Automation Developer — based in Lampung
      </p>
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-5 sm:p-7 lg:p-9 reveal reveal-d2">
          <p className="font-bold text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5" style={{ color: 'var(--text-sec)' }}>
            Saya <strong style={{ color: 'var(--text)' }}>YugeSpace</strong>, seorang <strong style={{ color: 'var(--text)' }}>Backend Engineer</strong> dari Lampung, Sumatra, yang berfokus pada pengembangan sistem backend, AI automation, dan data engineering. Saya membangun <strong style={{ color: 'var(--text)' }}>SaaS</strong>, bot Telegram, dashboard, serta platform automasi dengan memanfaatkan teknologi seperti <strong style={{ color: 'var(--text)' }}>TypeScript, Next.js, React, Node.js, Python, R</strong>, dan <strong style={{ color: 'var(--text)' }}>Telegram Bot API</strong>. Ketertarikan utama saya berada pada <strong style={{ color: 'var(--text)' }}>LLM Applications</strong>, AI Automation, Backend Architecture, serta Data Science untuk menciptakan solusi yang efisien, scalable, dan mudah dipelihara.
</p>
<p className="font-bold text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-sec)' }}>
  Saya adalah seorang developer <strong style={{ color: 'var(--text)' }}>otodidak</strong> yang belajar melalui dokumentasi resmi, eksplorasi teknologi, dan pengalaman membangun berbagai proyek nyata. Saya menerapkan <strong style={{ color: 'var(--text)' }}>AI-first development</strong> dan <strong style={{ color: 'var(--text)' }}>automation-first mindset</strong> dalam setiap proses pengembangan, dengan perhatian tinggi terhadap kualitas arsitektur, clean code, serta pengalaman pengguna agar setiap produk yang dibangun tidak hanya berfungsi dengan baik, tetapi juga memiliki fondasi yang kuat untuk berkembang di masa depan.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-[#F62477] text-white border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">15+</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-robot mr-1"></i>Project Dibuat</div>
          </div>
          <div className="bg-[#FFADEE] border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">5+</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-calendar mr-1"></i>Tahun Ngoding</div>
          </div>
          <div className="bg-[#92003A] text-white border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d4">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">∞</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-sync mr-1"></i>Vibecoding</div>
          </div>
          <div className="bg-[#FFE185] border-4 border-black rounded-xl brutal-shadow p-4 sm:p-6 text-center brutal-card reveal reveal-d4">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black">5</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase mt-1.5 tracking-wider"><i className="fas fa-star mr-1"></i>Problem Solver</div>
          </div>
        </div>
      </div>
    </section>
  )
}
