import { useEffect, useRef } from 'react'

/** Adds class `visible` to `<section>` elements when they enter the viewport (matches original HTML behavior). */
export function useRevealSections() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const sections = root.querySelectorAll('section')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 },
    )

    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return containerRef
}
