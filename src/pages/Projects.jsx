import { PROJECTS } from '../data/content'

function Projects() {
  // Makes the glow on a card follow the mouse
  const trackMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section id="projects" className="section projects">
      <div className="section-heading reveal">
        <p className="section-label">02 / What we build</p>
        <h2>Projects &amp; Activities</h2>
        <p>
          A collection of our programming projects and activities created
          while learning and developing our skills.
        </p>
      </div>

      <div className="project-grid">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className="project-card spotlight reveal"
            onMouseMove={trackMouse}
          >
            <div className="project-top">
              <span className="project-number">
                {String(p.id).padStart(2, '0')}
              </span>
              <span className="project-category">{p.category}</span>
            </div>

            <h3>{p.title}</h3>
            <p className="project-summary">{p.summary}</p>

            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <p className="project-author">
              {p.authors.length > 1 ? 'Authors' : 'Author'}:{' '}
              {p.authors.join(' & ')}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects