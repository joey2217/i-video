import { useEffect, useState } from 'react'

let ticking = false

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const onScroll = (e: Event) => {
      const y = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(function () {
          setScrollPosition(Math.round(y))
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return { scrollPosition }
}
