export function RoseDecor({ position = 'top-left', size = 'md' }: { position?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = {
    sm: 'w-24 h-32',
    md: 'w-32 h-40',
    lg: 'w-48 h-56'
  }[size]

  const positionClass = {
    'top-left': 'absolute top-4 left-4',
    'top-right': 'absolute top-4 right-4',
    'bottom-left': 'absolute bottom-4 left-4',
    'bottom-right': 'absolute bottom-4 right-4',
    'center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  }[position] || 'relative'

  return (
    <svg
      className={`${sizeClass} ${positionClass} opacity-80 pointer-events-none`}
      viewBox="0 0 150 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Long graceful stems */}
      <path d="M 75 200 Q 70 230 65 250" stroke="#6b9d6b" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 75 200 Q 80 230 85 250" stroke="#6b9d6b" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 75 200 Q 72 240 60 250" stroke="#7aaa7a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M 75 200 Q 78 240 90 250" stroke="#7aaa7a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

      {/* Main rose - top center */}
      <circle cx="75" cy="50" r="16" fill="#d85a7f" opacity="0.95" />
      <ellipse cx="60" cy="45" rx="12" ry="20" fill="#e67a96" opacity="0.9" transform="rotate(-35 60 45)" />
      <ellipse cx="90" cy="45" rx="12" ry="20" fill="#e67a96" opacity="0.9" transform="rotate(35 90 45)" />
      <ellipse cx="65" cy="60" rx="11" ry="18" fill="#eb8fa8" transform="rotate(-50 65 60)" />
      <ellipse cx="85" cy="60" rx="11" ry="18" fill="#eb8fa8" transform="rotate(50 85 60)" />
      <circle cx="75" cy="52" r="10" fill="#c9487a" />

      {/* Left side rose clusters */}
      <circle cx="40" cy="90" r="10" fill="#d85a7f" opacity="0.85" />
      <ellipse cx="32" cy="88" rx="8" ry="14" fill="#e67a96" transform="rotate(-40 32 88)" opacity="0.8" />
      <circle cx="35" cy="110" r="8" fill="#d85a7f" opacity="0.8" />
      <ellipse cx="28" cy="108" rx="6" ry="11" fill="#e67a96" transform="rotate(-35 28 108)" opacity="0.75" />

      {/* Right side rose clusters */}
      <circle cx="110" cy="90" r="10" fill="#d85a7f" opacity="0.85" />
      <ellipse cx="118" cy="88" rx="8" ry="14" fill="#e67a96" transform="rotate(40 118 88)" opacity="0.8" />
      <circle cx="115" cy="110" r="8" fill="#d85a7f" opacity="0.8" />
      <ellipse cx="122" cy="108" rx="6" ry="11" fill="#e67a96" transform="rotate(35 122 108)" opacity="0.75" />

      {/* Long flowing leaves - left side */}
      <path
        d="M 50 100 Q 35 120 25 150 Q 20 165 28 170"
        fill="#7a9b5f"
        opacity="0.85"
      />
      <path
        d="M 45 95 Q 25 115 15 140"
        stroke="#6b8e5e"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 55 110 Q 40 140 35 165 Q 33 175 42 178"
        fill="#8ab070"
        opacity="0.8"
      />

      {/* Long flowing leaves - right side */}
      <path
        d="M 100 100 Q 115 120 125 150 Q 130 165 122 170"
        fill="#7a9b5f"
        opacity="0.85"
      />
      <path
        d="M 105 95 Q 125 115 135 140"
        stroke="#6b8e5e"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 95 110 Q 110 140 115 165 Q 117 175 108 178"
        fill="#8ab070"
        opacity="0.8"
      />

      {/* Small accent leaves throughout */}
      <ellipse cx="68" cy="130" rx="6" ry="15" fill="#9ab88a" opacity="0.75" transform="rotate(-25 68 130)" />
      <ellipse cx="82" cy="135" rx="6" ry="15" fill="#9ab88a" opacity="0.75" transform="rotate(25 82 135)" />
      <ellipse cx="60" cy="150" rx="5" ry="12" fill="#7a9b5f" opacity="0.7" transform="rotate(-40 60 150)" />
      <ellipse cx="90" cy="155" rx="5" ry="12" fill="#7a9b5f" opacity="0.7" transform="rotate(40 90 155)" />

      {/* Tiny accent roses */}
      <circle cx="50" cy="140" r="6" fill="#e67a96" opacity="0.7" />
      <circle cx="100" cy="145" r="6" fill="#e67a96" opacity="0.7" />
    </svg>
  )
}
