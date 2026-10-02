function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading">
        <p className="section-label">WHO WE ARE</p>
        <h1>About ByteBond</h1>
        <p>
          A small organization built around learning, connection,
          and growing together.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h2>Why We Started</h2>
          <p>
            ByteBond started from a shared interest in programming,
            technology, and learning together. We wanted to create
            a space where ideas can be shared and explored.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to learn, collaborate, experiment, and
            develop our skills as aspiring IT professionals.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We aim to grow together by turning what we learn into
            creative and meaningful ideas.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Values</h2>
          <ul>
            <li>Connection</li>
            <li>Collaboration</li>
            <li>Curiosity</li>
            <li>Growth</li>
            <li>Creativity</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About