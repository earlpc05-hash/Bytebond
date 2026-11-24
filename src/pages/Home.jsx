import mark from '../assets/bytebond-mark.jpg'
import { STATS, TECH } from '../data/content'

function Home() {
  return (
    <section id="home" className="hero">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow reveal">
            <span className="dot" /> Student organization · Est. 2026
          </p>

          <h1 className="reveal d1">
            Connecting <span className="grad">Ideas.</span>
            <br />
            Building <span className="grad">Together.</span>
          </h1>

          <p className="hero-description reveal d2">
            ByteBond is a student organization built around connection,
            collaboration, and learning. We are two aspiring developers
            exploring programming, web development, and technology.
          </p>

          <div className="hero-actions reveal d3">
            <a href="#projects" className="btn btn-primary">
              See our work <span aria-hidden="true">→</span>
            </a>
            <a href="#about" className="btn btn-ghost">
              Discover ByteBond
            </a>
          </div>

          <div className="stats reveal d4">
            {STATS.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal d2">
          <div className="logo-glow" aria-hidden="true" />
          <img src={mark} alt="ByteBond logo" className="hero-logo" />

          <div className="code-card" aria-hidden="true">
            <div className="code-bar">
              <i /> <i /> <i />
              <span>bytebond.js</span>
            </div>
            <pre>
              <span className="c-k">const</span> <span className="c-v">bytebond</span> = {'{'}
              {'\n'}  members: [<span className="c-s">'Earl'</span>, <span className="c-s">'Azumi'</span>],
              {'\n'}  motto: <span className="c-s">'Build together'</span>,
              {'\n'}  learning: <span className="c-k">true</span>,
              {'\n'}{'}'}
            </pre>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...TECH, ...TECH].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
