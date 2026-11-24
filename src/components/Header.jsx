import { useEffect, useState } from 'react'
import mark from '../assets/bytebond-mark.jpg'
import { NAV_LINKS } from '../data/content'

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('bytebond-theme') !== 'light'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  // Apply and save the theme
  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode)
    localStorage.setItem('bytebond-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Shrink the header after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link of the section currently on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close the mobile menu with the Escape key, or when the window becomes desktop-sized
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 820) setMenuOpen(false)
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
        <img src={mark} alt="" className="brand-mark" />
        <span className="brand-name">
          Byte<span>Bond</span>
        </span>
      </a>

      <nav id="main-nav" className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark and light mode"
          title={darkMode ? 'Light Mode' : 'Dark Mode'}
        >
          {darkMode ? '☀' : '☾'}
        </button>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span />
          <span />
        </button>
      </div>
    </header>

    {/* Tapping outside the menu closes it (only shown while the menu is open on mobile) */}
    {menuOpen && (
      <div className="nav-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
    )}
    </>
  )
}

export default Header
