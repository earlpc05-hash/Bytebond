import mark from '../assets/bytebond-mark.jpg'
import { NAV_LINKS } from '../data/content'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <img src={mark} alt="" className="brand-mark" />
            <span className="brand-name">
              Byte<span>Bond</span>
            </span>
          </a>
          <p>Connecting Ideas. Building Together.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>

      <p className="footer-copy">
        © 2026 ByteBond. Built together, one idea at a time.
      </p>
    </footer>
  )
}

export default Footer
