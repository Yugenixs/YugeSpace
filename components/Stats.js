export default function Stats() {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-2 sm:mb-4 reveal">
        <i className="fas fa-chart-simple mr-2 sm:mr-3" style={{ color: 'var(--text)' }}></i>Development Analytics
      </h2>
      <p className="text-center font-bold text-[10px] sm:text-xs max-w-lg mx-auto mb-6 sm:mb-10 reveal reveal-d1 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        Cuplikan aktivitas development, riwayat kontribusi, dan stack yang saya gunakan.
      </p>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 reveal reveal-d2">
        <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-3 sm:p-5 flex items-center justify-center brutal-card card-glow">
          <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Yugenixs&theme=github_dark" alt="GitHub profile statistics" className="w-full max-w-sm" />
        </div>
        <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-3 sm:p-5 flex items-center justify-center brutal-card card-glow">
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=Yugenixs&theme=radical" alt="GitHub Contribution Streak" className="w-full max-w-sm" />
        </div>
      </div>
      <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-3 sm:p-5 mt-4 sm:mt-6 flex items-center justify-center reveal reveal-d3 brutal-card card-glow">
        <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Yugenixs&theme=github_dark" alt="Most frequently used programming languages" className="w-full max-w-md" />
      </div>
      <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-3 sm:p-5 mt-4 sm:mt-6 flex items-center justify-center reveal reveal-d4 brutal-card card-glow">
        <img src="https://ghchart.rshah.org/F62477/Yugenixs" alt="GitHub Contributions Calendar" className="w-full" />
      </div>
    </section>
  )
}
