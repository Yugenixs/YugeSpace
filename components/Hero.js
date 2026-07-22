export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-6 sm:gap-8 py-6 sm:py-8 items-center">
      <div className="reveal show relative">
        {/* floating chart icon above title */}
        <div className="icon-wander hidden sm:block">
          <svg width="40" height="36" viewBox="0 0 80 70">
            <rect x="8" y="10" width="64" height="52" rx="4" fill="var(--surface)" stroke="#000" strokeWidth="2.5" />
            <rect x="18" y="40" width="9" height="16" fill="#F62477" stroke="#000" strokeWidth="1.5" className="icon-bob" style={{ transformOrigin: '22.5px 56px' }} />
            <rect x="33" y="28" width="9" height="28" fill="#92003A" stroke="#000" strokeWidth="1.5" className="icon-bob" style={{ transformOrigin: '37.5px 56px', animationDelay: '0.2s' }} />
            <rect x="48" y="34" width="9" height="22" fill="#FFADEE" stroke="#000" strokeWidth="1.5" className="icon-bob" style={{ transformOrigin: '52.5px 56px', animationDelay: '0.4s' }} />
            <path d="M18,26 L33,18 L48,22 L57,14" fill="none" stroke="#FFE185" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5">
          <span className="inline-block bg-[#F62477] text-white border-4 border-black rounded-xl px-4 sm:px-5 py-1.5 sm:py-2 font-bold text-[10px] sm:text-xs uppercase brutal-shadow-sm float-loop">
            <i className="fas fa-chart-line mr-1.5"></i>Data Scientist
          </span>
          <span className="inline-block bg-[#FFADEE] border-4 border-black rounded-xl px-4 sm:px-5 py-1.5 sm:py-2 font-bold text-[10px] sm:text-xs uppercase brutal-shadow-sm float-loop" style={{ animationDelay: '0.3s' }}>
            <i className="fas fa-robot mr-1.5"></i>Bot Automation
          </span>
          <span className="inline-block bg-[#92003A] text-white border-4 border-black rounded-xl px-4 sm:px-5 py-1.5 sm:py-2 font-bold text-[10px] sm:text-xs uppercase brutal-shadow-sm float-loop" style={{ animationDelay: '0.5s' }}>
            <i className="fas fa-map-pin mr-1.5"></i>Lampung, Sumatra
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1] tracking-tighter relative">
          <span className="typing-cursor">YugeSpace</span>
        </h1>
        <div className="text-sm sm:text-base lg:text-lg font-bold mt-2 sm:mt-3 text-[#F62477]">
          &lt; Data Science × Bot Automation /&gt;
        </div>
        <p className="text-xs sm:text-sm lg:text-base font-bold mt-3 sm:mt-5 max-w-md leading-relaxed" style={{ color: 'var(--text-sec)' }}>
          Membangun sistem otomasi Telegram bot dan pipeline analisis data — dari eksplorasi data mentah sampai deployment production.
        </p>
        <div className="flex gap-2 sm:gap-3 mt-5 sm:mt-8 flex-wrap">
          <a href="#proyek" className="font-bold text-[10px] sm:text-xs uppercase bg-[#F62477] text-white border-4 border-black rounded-xl px-5 sm:px-7 py-3 sm:py-4 brutal-shadow-sm brutal-btn flex items-center gap-1.5">
            <i className="fas fa-folder-open"></i> Lihat Proyek
          </a>
          <a href="https://github.com/Yugenixs" target="_blank" rel="noopener noreferrer" className="font-bold text-[10px] sm:text-xs uppercase bg-[var(--surface)] border-4 border-black rounded-xl px-5 sm:px-7 py-3 sm:py-4 brutal-shadow-sm brutal-btn flex items-center gap-1.5" style={{ color: 'var(--text)' }}>
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://t.me/KontolBahlil" target="_blank" rel="noopener noreferrer" className="font-bold text-[10px] sm:text-xs uppercase bg-[var(--surface)] border-4 border-black rounded-xl px-5 sm:px-7 py-3 sm:py-4 brutal-shadow-sm brutal-btn flex items-center gap-1.5" style={{ color: 'var(--text)' }}>
            <i className="fab fa-telegram-plane text-[#26A5E4]"></i> Telegram
          </a>
          <a href="https://twitter.com/Yugenixs" target="_blank" rel="noopener noreferrer" className="font-bold text-[10px] sm:text-xs uppercase bg-[var(--surface)] border-4 border-black rounded-xl px-5 sm:px-7 py-3 sm:py-4 brutal-shadow-sm brutal-btn flex items-center gap-1.5" style={{ color: 'var(--text)' }}>
            <i className="fab fa-x-twitter"></i> Twitter
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end reveal show reveal-d2 mt-4 lg:mt-0 relative">
        {/* floating terminal icon above profile */}
        <div className="float-orbit hidden sm:block">
          <svg width="38" height="32" viewBox="0 0 70 60">
            <rect x="4" y="6" width="62" height="48" rx="5" fill="#150009" stroke="#000" strokeWidth="2.5" />
            <circle cx="14" cy="16" r="2.2" fill="#F62477" />
            <circle cx="22" cy="16" r="2.2" fill="#FFE185" />
            <circle cx="30" cy="16" r="2.2" fill="#FFADEE" />
            <path d="M12,30 L22,38 L12,46" fill="none" stroke="#FFADEE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="28" y1="46" x2="46" y2="46" stroke="#FFE185" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full border-4 border-black brutal-shadow bg-[#F62477] relative float-loop overflow-hidden">
          <img
            src="/avatar.jpg"
            alt="YugeSpace"
            className="w-full h-full object-cover rounded-[inherit]"
          />
        </div>
      </div>
    </section>
  )
}
