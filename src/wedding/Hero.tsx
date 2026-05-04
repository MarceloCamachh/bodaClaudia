import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

type HeroProps = {
  heroImage: string
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n))
}

function getViewportHeight() {
  if (typeof window === 'undefined') return 0
  const visualHeight = window.visualViewport?.height ?? 0
  return Math.max(window.innerHeight, visualHeight)
}

export function Hero({ heroImage }: HeroProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  const [progress, setProgress] = useState(0)
  const [maxTranslate, setMaxTranslate] = useState(0)
  const [stageHeight, setStageHeight] = useState(0)

  const measureShift = useCallback(() => {
    const hero = heroRef.current
    const img = imgRef.current
    if (!hero || !img) return
    const imgHeight = img.getBoundingClientRect().height
    const heroHeight = hero.getBoundingClientRect().height
    const max = Math.max(0, imgHeight - heroHeight)
    setMaxTranslate(max)
    setStageHeight(getViewportHeight() + max + 24)
  }, [])

  useLayoutEffect(() => {
    measureShift()
    const img = imgRef.current
    if (!img) return
    if (!img.complete) {
      img.addEventListener('load', measureShift, { once: true })
    }
    window.addEventListener('resize', measureShift)
    window.visualViewport?.addEventListener('resize', measureShift)
    return () => {
      window.removeEventListener('resize', measureShift)
      window.visualViewport?.removeEventListener('resize', measureShift)
    }
  }, [measureShift, heroImage])

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const tick = () => {
      const el = stageRef.current
      if (!el) return

      if (prefersReduced) {
        setProgress(1)
        return
      }

      const rect = el.getBoundingClientRect()
      const elTop = rect.top + window.scrollY
      const H = el.offsetHeight
      const vh = getViewportHeight()
      const range = Math.max(1, H - vh)
      const p = (window.scrollY - elTop) / range
      setProgress(clamp01(p))
    }

    tick()
    window.addEventListener('scroll', tick, { passive: true })
    window.addEventListener('resize', tick)
    return () => {
      window.removeEventListener('scroll', tick)
      window.removeEventListener('resize', tick)
    }
  }, [])

  const translateY = -progress * maxTranslate

  return (
    <div
      ref={stageRef}
      className="hero-scroll-stage"
      style={stageHeight ? { height: `${stageHeight}px` } : undefined}
    >
      <div className="hero-scroll-sticky">
        <div ref={heroRef} className="hero hero--scrub">
          <img
            ref={imgRef}
            className="hero-bg"
            src={heroImage}
            alt=""
            style={{
              transform:
                maxTranslate > 0
                  ? `translate3d(0, ${translateY}px, 0)`
                  : undefined,
            }}
            decoding="async"
          />
          <div className="hero-veil" aria-hidden />
          <div className="hero-content">
            <p
              className="hero-eyebrow"
              style={{
                transform: `scale(${1 + progress * 0.80})`,
                transformOrigin: 'center',
              }}
            >
              Invitación
            </p>
            <h1 className="hero-names">
              <em>Claudia Isela</em>
              <span className="hero-ampersand">&amp;</span>
              <em>Juan Carlos</em>
            </h1>
            <span className="hero-ornament" />
            <p className="hero-date">
              18 &nbsp;·&nbsp; Julio &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; Santa Cruz
            </p>
          </div>
          <div className="scroll-hint">
            <span>Desliza</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
