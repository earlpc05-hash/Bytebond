import earlProfile from '../assets/members/earlprof.jpg'
import azumiProfile from '../assets/members/azumiprof.jpg'
import { MEMBERS } from '../data/content'

// Match each member id to its imported photo
const PHOTOS = { earl: earlProfile, azumi: azumiProfile }

function Members() {
  return (
    <section id="members" className="section members">
      <div className="section-heading reveal">
        <p className="section-label">03 / The people behind ByteBond</p>
        <h2>Our Members</h2>
        <p>Two aspiring developers learning, creating, and growing together.</p>
      </div>

      <div className="members-grid">
        {/* The "bond" between the two cards (desktop only) */}
        <div className="bond-line" aria-hidden="true">
          <span />
        </div>

        {MEMBERS.map((m, i) => (
          <article key={m.id} className={`member-card reveal d${i + 1}`}>
            <span className="member-number">{m.number}</span>

            <div className="avatar">
              <img src={PHOTOS[m.id]} alt={m.name} />
            </div>

            <a href={`#contact-${m.id}`} className="member-name-link">
              <h3>{m.name}</h3>
            </a>
            <p className="member-role">{m.role}</p>

            <p className="member-bio">{m.bio}</p>

            <div className="member-block">
              <h4>Skills</h4>
              <p>{m.skills}</p>
            </div>

            <div className="member-block">
              <h4>Technologies</h4>
              <div className="tags">
                {m.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="member-links">
              <a href={m.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={m.facebook} target="_blank" rel="noopener noreferrer">
                Facebook ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Members
