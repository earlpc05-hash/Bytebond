import { useEffect, useState } from 'react'
import logo from '../assets/ByteBondLogo.jpg'

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('bytebond-theme')
    return savedMode !== 'light'
  })

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode)

    localStorage.setItem(
      'bytebond-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src={logo} alt="ByteBond Logo" />
      </a>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#members">Members</a>
        <a href="#contact">Contact</a>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark and light mode"
          title={darkMode ? 'Light Mode' : 'Dark Mode'}
        >
          {darkMode ? '☀' : '☾'}
        </button>
      </nav>
    </header>
  )
}

export default Header