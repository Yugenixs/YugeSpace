export default function Terminal() {
  return (
    <div className="border-4 border-brutal rounded-xl brutal-shadow bg-[var(--surface)] overflow-hidden my-6 sm:my-8 reveal">
      <div className="flex items-center gap-1.5 sm:gap-2 border-b-4 border-brutal px-4 sm:px-5 py-2.5 sm:py-3" style={{ background: 'var(--muted)' }}>
        <span className="w-3 h-3 rounded-full border-2 border-black bg-[#92003A]"></span>
        <span className="w-3 h-3 rounded-full border-2 border-black bg-[#FFE185]"></span>
        <span className="w-3 h-3 rounded-full border-2 border-black bg-[#FFADEE]"></span>
        <span className="font-bold text-[9px] sm:text-[10px] uppercase ml-1.5 tracking-wider" style={{ color: 'var(--text-sec)' }}>terminal — yugespace.sh</span>
      </div>
      <div className="px-4 sm:px-6 py-4 sm:py-5 font-bold text-xs sm:text-sm leading-loose" style={{ color: 'var(--text)' }}>
        <span className="text-[#F62477]">$</span> <span>whoami</span><br />
        <span className="text-[#FFADEE]">⟹ YugeSpace — Data Scientist &amp; Automation Developer</span><br />
        <span className="text-[#F62477]">$</span> <span>python3 -c &quot;import pandas as pd; df.head()&quot;</span><br />
        <span className="text-[#FFADEE]">⟹ [4 rows x 6 columns] loaded</span><br />
        <span className="text-[#F62477]">$</span> <span>echo $STACK</span><br />
        <span className="text-[#FFADEE]">⟹ Python · SQL · Node.js · Telegram Bot API</span><br />
        <span className="text-[#F62477]">$</span> <span>echo $MOTTO</span><br />
        <span className="text-[#FFADEE]">⟹ &ldquo;Per aspera ad astra&rdquo;</span><br />
        <span className="text-[#F62477]">$</span> <span className="animate-pulse inline-block">_</span>
      </div>
    </div>
  )
}
