import earlProfile from '../assets/members/earlprof.jpg'
import azumiProfile from '../assets/members/azumiprof.jpg'

function Members() {
  return (
    <section id="members" className="members">
      <div className="section-heading">
        <p className="section-label">THE PEOPLE BEHIND BYTEBOND</p>

        <h1>Our Members</h1>

        <p>
          Two aspiring developers learning, creating, and growing
          together.
        </p>
      </div>

      <div className="members-grid">

        <div className="member-card">
          <div className="member-number">01</div>

          <img
            src={earlProfile}
            alt="Earl Kenneth Panuncial"
            className="member-profile"
          />

          <a href="#contact-earl" className="member-name-link">
            <h2>Earl Kenneth Panuncial</h2>
          </a>

          <h3>Aspiring Game & Web Developer</h3>

          <p>
            Interested in game development, web development,
            and programming.
          </p>

          <p>
            <strong>Skills:</strong> Problem-solving, basic software
            development, web development, creative thinking,
            programming fundamentals, and team collaboration.
          </p>

          <p>
            <strong>Technologies:</strong> Python, JavaScript, HTML, CSS.
          </p>
        </div>

        <div className="member-card">
          <div className="member-number">02</div>

          <img
            src={azumiProfile}
            alt="Azumi Gajutos"
            className="member-profile"
          />

          <a href="#contact-azumi" className="member-name-link">
            <h2>Azumi Gajutos</h2>
          </a>

          <h3>Aspiring Web Developer</h3>

          <p>
            Interested in programming, technology, learning,
            coding, and problem-solving.
          </p>

          <p>
            <strong>Skills:</strong> Basic web development,
            problem-solving, web design, creative thinking,
            programming fundamentals, and collaboration.
          </p>

          <p>
            <strong>Technologies:</strong> HTML, CSS, Python,
            Basic JavaScript.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Members