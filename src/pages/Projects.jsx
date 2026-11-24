import { useState } from 'react'
import { PROJECTS, PROJECT_FILTERS } from '../data/content'

function Projects() {
  const [openProject, setOpenProject] = useState(null)
  const [filter, setFilter] = useState('All')

  const visible = PROJECTS.filter(
    (p) => filter === 'All' || p.category === filter
  )

  const toggleProject = (id) => {
    setOpenProject(openProject === id ? null : id)
  }

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

      <div className="filters reveal" role="tablist" aria-label="Filter projects">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={filter === f ? 'active' : ''}
            onClick={() => {
              setFilter(f)
              setOpenProject(null)
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visible.map((p) => {
          const isOpen = openProject === p.id

          return (
            <article
              key={p.id}
              className={`project-card spotlight reveal ${isOpen ? 'open' : ''}`}
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

              <button
                className="details-btn"
                type="button"
                onClick={() => toggleProject(p.id)}
                aria-expanded={isOpen}
              >
                {isOpen ? 'Hide details' : 'View details'}
                <span aria-hidden="true">{isOpen ? '↑' : '→'}</span>
              </button>

              {/* Expanding panel: height is animated with a CSS grid trick */}
              <div className="details-wrap">
                <div className="details-inner">
                  <h4>Project Overview</h4>
                  <p>{p.summary}</p>
                  <h4>Technology</h4>
                  <p>{p.tags.join(' · ')}</p>
                  <h4>{p.authors.length > 1 ? 'Authors' : 'Author'}</h4>
                  <p>{p.authors.join(' & ')}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
