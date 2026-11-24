import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Members from './pages/Members'
import Contact from './pages/Contact'
import useReveal from './hooks/useReveal'

function App() {
  const [showTopButton, setShowTopButton] = useState(false)
  const [progress, setProgress] = useState(0)

  // Scroll reveal animations
  useReveal()

  // Track scroll position for the progress bar and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      setShowTopButton(window.scrollY > 500)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="bg-grid" aria-hidden="true" />

      <Header />

      <main>
        <Home />
        <About />
        <Projects />
        <Members />
        <Contact />
      </main>

      <Footer />

      <button
        className={`back-to-top ${showTopButton ? 'show' : ''}`}
        type="button"
        onClick={backToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </button>
    </div>
  )
}

export default App
