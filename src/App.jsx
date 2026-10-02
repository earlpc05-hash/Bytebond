import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Members from './pages/Members'
import Contact from './pages/Contact'

function App() {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <Header />

      <main>
        <Home />
        <About />
        <Projects />
        <Members />
        <Contact />
      </main>

      <Footer />

      {showTopButton && (
        <button
          className="back-to-top"
          type="button"
          onClick={backToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App