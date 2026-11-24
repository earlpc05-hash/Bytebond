import { useEffect } from 'react'

// Adds the "in" class to every .reveal element once it scrolls into view.
export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')

    // Older browsers: just show everything.
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
