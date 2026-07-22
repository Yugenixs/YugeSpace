'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setNavOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    )
  }

  return (
    <>
      {mounted && navOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setNavOpen(false)} />
      )}
      <nav className="flex items-center justify-between py-4 sm:py-6 gap-3 reveal show relative z-40">
        <a href="#" className="flex items-center gap-2 sm:gap-3 bg-black text-white px-3 sm:px-5 py-2 sm:py-3 rounded-xl border-4 border-black brutal-shadow pulse-glow no-underline shrink-0">
          <i className="fas fa-terminal text-sm sm:text-lg"></i>
          <span className="font-black text-sm sm:text-lg tracking-tight">YugeSpace</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="theme-btn text-sm sm:text-base bg-[#FFE185] dark:bg-[#2a2540] dark:text-white border-4 border-black rounded-xl px-3 sm:px-4 py-2 sm:py-3 brutal-shadow-sm brutal-btn"
            aria-label="Toggle theme"
          >
            <i className="fas fa-sun dark:hidden block"></i>
            <i className="fas fa-moon hidden dark:block"></i>
          </button>

          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-xl sm:text-2xl bg-black text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-4 border-black brutal-shadow-sm lg:hidden brutal-btn relative z-50"
            aria-label="Menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul
          className={`fixed lg:static right-4 top-20 w-64 bg-[var(--surface)] border-4 border-brutal rounded-2xl brutal-shadow p-5 flex-col gap-2 list-none z-50 lg:z-auto lg:flex lg:flex-row lg:items-center lg:w-auto lg:bg-transparent lg:border-0 lg:rounded-none lg:shadow-none lg:p-0 transition-all duration-200 ${mounted ? (navOpen ? 'flex' : 'hidden lg:flex') : 'hidden lg:flex'}`}
        >
          <li><a href="#tentang" onClick={() => setNavOpen(false)} className="block font-bold text-xs uppercase bg-[#F62477] text-white border-4 border-black rounded-xl px-4 sm:px-5 py-2 sm:py-3 brutal-shadow-sm brutal-btn text-center"><i className="fas fa-user mr-1.5"></i>About</a></li>
          <li><a href="#tech" onClick={() => setNavOpen(false)} className="block font-bold text-xs uppercase bg-[#FFADEE] border-4 border-black rounded-xl px-4 sm:px-5 py-2 sm:py-3 brutal-shadow-sm brutal-btn text-center"><i className="fas fa-layer-group mr-1.5"></i>Stack</a></li>
          <li><a href="#proyek" onClick={() => setNavOpen(false)} className="block font-bold text-xs uppercase bg-[#92003A] text-white border-4 border-black rounded-xl px-4 sm:px-5 py-2 sm:py-3 brutal-shadow-sm brutal-btn text-center"><i className="fas fa-code-branch mr-1.5"></i>Projects</a></li>
          <li><a href="#kontak" onClick={() => setNavOpen(false)} className="block font-bold text-xs uppercase bg-[#FFE185] border-4 border-black rounded-xl px-4 sm:px-5 py-2 sm:py-3 brutal-shadow-sm brutal-btn text-center"><i className="fas fa-paper-plane mr-1.5"></i>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}
