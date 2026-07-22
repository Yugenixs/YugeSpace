'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Terminal from '@/components/Terminal'
import MarqueeSection from '@/components/MarqueeSection'
import About from '@/components/About'
import TechStack from '@/components/TechStack'

import Projects from '@/components/Projects'
import Donation from '@/components/Donation'
import Contact from '@/components/Contact'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
import AmbientIcons from '@/components/AmbientIcons'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const saved = localStorage.getItem('theme')
    if (!saved || saved === 'light') {
      document.documentElement.classList.remove('dark')
    } else if (saved === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    const els = document.querySelectorAll('.reveal')
    const check = () => {
      const h = window.innerHeight
      els.forEach(el => {
        if (el.getBoundingClientRect().top < h - 80) el.classList.add('show')
      })
    }
    window.addEventListener('scroll', check)
    check()
    return () => window.removeEventListener('scroll', check)
  }, [mounted])

  return (
    <>
      <div className="sparkle-container">
        {[...Array(10)].map((_, i) => <div key={i} className="sparkle" />)}
      </div>

      <AmbientIcons />

      <div className="max-w-6xl mx-auto px-4 sm:px-5 relative z-10">
        <Navbar />
        <Hero />
        <Terminal />
        <MarqueeSection />
        <About />
        <TechStack />
        <Projects />
        <Donation />
        <Contact />
        <Stats />
        <Footer />
      </div>
    </>
  )
}
