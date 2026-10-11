type CarTopViewProps = { className?: string };

/**
 * Self-contained orange top-view sports car illustration.
 * Its horizontal silhouette intentionally follows the orientation of the reference car.
 */
export function CarTopView({ className }: CarTopViewProps) {
  return (
    <svg className={className} viewBox="0 0 500 180" role="img" aria-label="Orange sports car viewed from above" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="orangePaint" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#ff9a2f" />
          <stop offset=".48" stopColor="#f57918" />
          <stop offset="1" stopColor="#d95a0c" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#5d6266" />
          <stop offset=".5" stopColor="#161719" />
          <stop offset="1" stopColor="#3c4146" />
        </linearGradient>
        <filter id="carShadow" x="-15%" y="-45%" width="130%" height="190%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <ellipse cx="252" cy="92" rx="226" ry="65" fill="#000" opacity=".38" filter="url(#carShadow)" />
      {/* Wheels */}
      <path d="M45 28 Q22 32 18 53 L18 68 Q20 79 44 80 L70 69 76 42Z" fill="#171719" stroke="#555" strokeWidth="2"/>
      <path d="M45 100 Q22 104 18 125 L18 140 Q20 151 44 152 L70 141 76 114Z" fill="#171719" stroke="#555" strokeWidth="2"/>
      <path d="M455 28 Q478 32 482 53 L482 68 Q480 79 456 80 L430 69 424 42Z" fill="#171719" stroke="#555" strokeWidth="2"/>
      <path d="M455 100 Q478 104 482 125 L482 140 Q480 151 456 152 L430 141 424 114Z" fill="#171719" stroke="#555" strokeWidth="2"/>
      {/* Body */}
      <path d="M47 60 70 39 Q84 24 113 21 L173 10 Q200 4 231 7 L358 7 Q393 7 419 25 L448 46 Q465 59 469 82 L469 98 Q465 121 448 134 L419 155 Q393 173 358 173 L231 173 Q200 176 173 170 L113 159 Q84 156 70 141 L47 120 Q35 108 35 90 Q35 72 47 60Z" fill="url(#orangePaint)" stroke="#a84a0a" strokeWidth="2"/>
      <path d="M60 62 89 43 151 27 174 29 127 49 89 68Z" fill="#ffa43b" opacity=".8"/>
      <path d="M60 118 89 137 151 153 174 151 127 131 89 112Z" fill="#bd4d0b" opacity=".65"/>
      {/* Front / rear detailing */}
      <path d="M39 76 74 67 91 77 91 102 74 113 39 104Z" fill="#191a1b" stroke="#5b3016" strokeWidth="2"/>
      <path d="M39 80 68 78 78 90 68 102 39 100Z" fill="#2a2b2c"/>
      <path d="M466 75 440 68 423 77 423 103 440 112 466 105Z" fill="#252729" stroke="#7c3510" strokeWidth="2"/>
      <path d="M444 79 463 82 463 99 444 102 434 90Z" fill="#171819"/>
      {/* Cabin and windscreen */}
      <path d="M151 40 Q181 22 216 21 L338 21 Q370 23 395 44 L418 62 413 117 395 136 Q370 157 338 159 L216 159 Q181 158 151 140 L129 118 129 62Z" fill="#282a2c" stroke="#a64a11" strokeWidth="3"/>
      <path d="M167 45 Q190 31 218 30 L326 30 Q352 31 374 48 L394 65 388 115 373 130 Q352 146 326 148 L218 148 Q190 147 167 133 L147 115 147 65Z" fill="url(#glass)" stroke="#5b5b5b" strokeWidth="2"/>
      <path d="M247 31 247 148M328 31 328 148" stroke="#898989" strokeOpacity=".42" strokeWidth="2"/>
      <path d="M152 61 184 45 228 42 228 136 184 132 152 116Z" fill="#121314" opacity=".82"/>
      <path d="M344 43 370 58 377 90 370 122 344 137Z" fill="#111213" opacity=".82"/>
      {/* Vents, mirrors, highlights */}
      <path d="M93 48 115 37 137 35 121 50 99 57ZM93 132 115 143 137 145 121 130 99 123Z" fill="#252729" stroke="#a84a0a" strokeWidth="1.5"/>
      <path d="M201 13 214 6 233 5 239 13M201 167 214 174 233 175 239 167" fill="#f78a24" stroke="#a84a0a" strokeWidth="1.5"/>
      <path d="M47 74 72 80 77 90 72 100 47 106" stroke="#fff0c9" strokeWidth="3" strokeLinecap="round"/>
      <path d="M462 74 438 80 433 90 438 100 462 106" stroke="#d93618" strokeWidth="3" strokeLinecap="round"/>
      <path d="M100 64 130 53M100 116 130 127M405 54 432 69M405 126 432 111" stroke="#ffbd68" strokeWidth="2" strokeLinecap="round" opacity=".75"/>
      <path d="M70 90H430" stroke="#f8b25e" strokeWidth="1" opacity=".25"/>
    </svg>
  );
}
