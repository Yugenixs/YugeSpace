export default function AmbientIcons() {
  return (
    <>
      {/* walking bot icon */}
      <div className="walker-runner" aria-hidden="true">
        <svg width="46" height="40" viewBox="0 0 100 80" className="walker-body">
          <rect x="26" y="16" width="48" height="40" rx="8" fill="#FFADEE" stroke="#000" strokeWidth="3" />
          <circle cx="42" cy="36" r="6" fill="#150009" />
          <circle cx="58" cy="36" r="6" fill="#150009" />
          <rect x="38" y="46" width="24" height="4" rx="2" fill="#92003A" />
          <line x1="50" y1="16" x2="50" y2="4" stroke="#000" strokeWidth="3" />
          <circle cx="50" cy="4" r="4" fill="#F62477" stroke="#000" strokeWidth="2" />
          <rect x="10" y="58" width="8" height="18" rx="3" fill="#FFADEE" stroke="#000" strokeWidth="2.5" className="walker-leg" />
          <rect x="82" y="58" width="8" height="18" rx="3" fill="#FFADEE" stroke="#000" strokeWidth="2.5" className="walker-leg2" />
        </svg>
      </div>

      {/* walking database icon */}
      <div className="walker-runner-2 hidden sm:block" aria-hidden="true">
        <svg width="36" height="34" viewBox="0 0 80 70" className="walker2-body">
          <ellipse cx="40" cy="16" rx="26" ry="10" fill="#FFE185" stroke="#000" strokeWidth="2.5" />
          <path d="M14,16 L14,50 A26,10 0 0 0 66,50 L66,16" fill="#FFE185" stroke="#000" strokeWidth="2.5" />
          <ellipse cx="40" cy="33" rx="26" ry="10" fill="none" stroke="#000" strokeWidth="2" opacity="0.4" />
          <line x1="20" y1="56" x2="18" y2="66" stroke="#92003A" strokeWidth="2.5" className="walker2-leg" />
          <line x1="60" y1="56" x2="62" y2="66" stroke="#92003A" strokeWidth="2.5" className="walker2-leg2" />
        </svg>
      </div>
    </>
  )
}
