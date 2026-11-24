import { ABOUT } from '../data/content'

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-heading reveal">
        <p className="section-label">01 / Who we are</p>
        <h2>About ByteBond</h2>
        <p>
          A small organization built around learning, connection, and
          growing together.
        </p>
      </div>

      {/* Bento grid: the first card is wide, the values card spans two rows */}
      <div className="bento">
        <article className="card bento-why reveal">
          <span className="card-icon">01</span>
          <h3>Why We Started</h3>
          <p>{ABOUT.why}</p>
        </article>

        <article className="card bento-values reveal d1">
          <span className="card-icon">04</span>
          <h3>Our Values</h3>
          <ul className="chips">
            {ABOUT.values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </article>

        <article className="card reveal d1">
          <span className="card-icon">02</span>
          <h3>Our Mission</h3>
          <p>{ABOUT.mission}</p>
        </article>

        <article className="card reveal d2">
          <span className="card-icon">03</span>
          <h3>Our Vision</h3>
          <p>{ABOUT.vision}</p>
        </article>
      </div>
    </section>
  )
}

export default About
