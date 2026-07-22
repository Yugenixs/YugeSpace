'use client'
import { useState } from 'react'
const SOLANA_ADDRESS = 'Bzhb36V3gEKKqGQLtEcC2vkA2aBDYvkGdprTZQvUaJ5W'

export default function Donation() {
  const [showModal, setShowModal] = useState(false)
  const [copied, setCopied] = useState(false)

  const hasAddress = SOLANA_ADDRESS.trim().length > 0
  const qrUrl = hasAddress
    ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(`solana:${SOLANA_ADDRESS}`)}`
    : null

  const handleCopy = async () => {
    if (!hasAddress) return
    try {
      await navigator.clipboard.writeText(SOLANA_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
    }
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="bg-[var(--surface)] border-4 border-brutal rounded-xl brutal-shadow p-6 sm:p-10 lg:p-14 text-center reveal">
        <i className="fas fa-mug-hot text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4" style={{ color: 'var(--text)' }}></i>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter">
          Support <span className="bg-[#FFE185] px-2 sm:px-3 border-4 border-black brutal-shadow-sm inline-block">My Journey</span>
        </h2>
        <p className="font-bold text-[11px] sm:text-xs max-w-md mx-auto mt-3 sm:mt-4 mb-6 sm:mb-8" style={{ color: 'var(--text-sec)' }}>
          If you find my work valuable, consider supporting the continued development of open-source projects, AI experiments, and educational content. Every contribution is genuinely appreciated.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-block font-bold text-[10px] sm:text-xs uppercase bg-[#F62477] text-white border-4 border-black rounded-xl px-6 sm:px-8 py-3 sm:py-4 brutal-shadow-sm brutal-btn mb-6 sm:mb-8 flex items-center gap-1.5 mx-auto w-fit cursor-pointer"
        >
          <i className="fas fa-heart"></i> Make a Donation
        </button>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <span
            className="border-4 border-black rounded-xl px-3 sm:px-5 py-2 sm:py-3 font-bold text-[9px] sm:text-[10px] uppercase brutal-card flex items-center gap-1.5"
            style={{ background: '#FFE185', color: '#000', borderColor: '#000' }}
          >
            <i className="fab fa-solana"></i> Solana (SOL)
          </span>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[var(--surface)] border-4 border-black rounded-xl brutal-shadow p-6 sm:p-10 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-black text-white border-4 border-black rounded-xl flex items-center justify-center font-bold text-lg brutal-shadow-sm hover:scale-110 transition-transform"
            >
              <i className="fas fa-times"></i>
            </button>
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter mb-4 text-center flex items-center justify-center gap-2" style={{ color: 'var(--text)' }}>
              <i className="fab fa-solana"></i> Support via Solana (SOL)
            </h3>

            {hasAddress ? (
              <>
                <div className="w-full aspect-square rounded-xl border-4 border-black flex items-center justify-center p-4 bg-white">
                  <img src={qrUrl} alt="Solana donation address QR code" className="w-full h-full object-contain" />
                </div>
                <button
                  onClick={handleCopy}
                  className="w-full mt-4 font-bold text-[9px] sm:text-[10px] uppercase bg-[var(--muted)] border-4 border-black rounded-xl px-3 py-3 brutal-shadow-sm brutal-btn flex items-center justify-center gap-2 break-all"
                  style={{ color: 'var(--text)' }}
                >
                  <i className={copied ? 'fas fa-check' : 'fas fa-copy'}></i>
                  {copied ? 'Wallet address copied!' : SOLANA_ADDRESS}
                </button>
              </>
            ) : (
              <div
                className="w-full aspect-square rounded-xl border-4 border-black flex flex-col items-center justify-center gap-2 text-center p-4"
                style={{ background: 'var(--muted)', color: 'var(--text-sec)' }}
              >
                <i className="fab fa-solana text-4xl"></i>
                <p className="font-bold text-[10px] sm:text-xs uppercase">Donasi untuk sementara tidak tersedia.</p>
              </div>
            )}

            <p className="font-bold text-[9px] sm:text-[10px] text-center mt-4" style={{ color: 'var(--text-muted)' }}>
              Dukungan Anda membantu saya terus membangun open-source software, AI solutions, dan educational resource untuk komunitas. Terima kasih telah menjadi bagian dari perjalanan ini.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
