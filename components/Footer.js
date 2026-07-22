export default function Footer() {
  return (
    <footer className="border-t-4 border-brutal py-6 sm:py-8 mt-4 sm:mt-6 text-center reveal">
      <div className="text-sm sm:text-base font-black bg-black text-white px-4 sm:px-5 py-2 rounded-xl border-4 border-black brutal-shadow inline-block mb-3 sm:mb-4 pulse-glow">
        <i className="fas fa-terminal mr-1.5"></i>YugeSpace
      </div>
      <p className="font-bold text-[10px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>&copy; YugeSpace &mdash; Data Science × Bot Automation</p>
    </footer>
  )
}
