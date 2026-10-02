import { useState } from 'react'

function Projects() {
  const [openProject, setOpenProject] = useState(null)

  const toggleProject = (projectNumber) => {
    setOpenProject(
      openProject === projectNumber ? null : projectNumber
    )
  }

  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <p className="section-label">WHAT WE BUILD</p>

        <h1>Projects & Activities</h1>

        <p>
          A collection of our programming projects and activities
          created while learning and developing our skills.
        </p>
      </div>

      <div className="project-grid">

        <div className="project-card">
          <div className="project-number">01</div>

          <div className="project-content">
            <h2>Library Management System</h2>

            <p>
              A Python-based library management system created
              to practice programming concepts and system development.
            </p>

            <span className="project-status">PYTHON</span>
            <span className="project-link">Library System</span>

            <p className="project-author">
              Author: Azumi Gajutos
            </p>

            <button
              className="project-details-button"
              onClick={() => toggleProject(1)}
            >
              {openProject === 1
                ? 'Hide Details ↑'
                : 'View Details →'}
            </button>

            {openProject === 1 && (
              <div className="project-details">
                <h3>Project Overview</h3>

                <p>
                  A library management project created using
                  Python to practice programming and system
                  development concepts.
                </p>

                <h3>Technology</h3>

                <p>Python</p>

                <h3>Author</h3>

                <p>Azumi Gajutos</p>
              </div>
            )}
          </div>
        </div>


        <div className="project-card">
          <div className="project-number">02</div>

          <div className="project-content">
            <h2>Bank Account Encapsulation</h2>

            <p>
              A Python OOP project demonstrating encapsulation
              through a simple bank account program.
            </p>

            <span className="project-status">OOPROG</span>
            <span className="project-link">Python</span>

            <p className="project-author">
              Authors: Earl Kenneth Panuncial & Azumi Gajutos
            </p>

            <button
              className="project-details-button"
              onClick={() => toggleProject(2)}
            >
              {openProject === 2
                ? 'Hide Details ↑'
                : 'View Details →'}
            </button>

            {openProject === 2 && (
              <div className="project-details">
                <h3>Project Overview</h3>

                <p>
                  An OOPROG project created to demonstrate
                  encapsulation using a simple bank account program.
                </p>

                <h3>Technology</h3>

                <p>Python</p>

                <h3>Authors</h3>

                <p>
                  Earl Kenneth Panuncial & Azumi Gajutos
                </p>
              </div>
            )}
          </div>
        </div>


        <div className="project-card">
          <div className="project-number">03</div>

          <div className="project-content">
            <h2>Text Extractor</h2>

            <p>
              A Python project that extracts text from images
              using optical character recognition.
            </p>

            <span className="project-status">PYTHON</span>
            <span className="project-link">OCR</span>

            <p className="project-author">
              Authors: Earl Kenneth Panuncial & Azumi Gajutos
            </p>

            <button
              className="project-details-button"
              onClick={() => toggleProject(3)}
            >
              {openProject === 3
                ? 'Hide Details ↑'
                : 'View Details →'}
            </button>

            {openProject === 3 && (
              <div className="project-details">
                <h3>Project Overview</h3>

                <p>
                  A Python project that uses OCR technology
                  to extract text from images.
                </p>

                <h3>Technology</h3>

                <p>Python · OCR</p>

                <h3>Authors</h3>

                <p>
                  Earl Kenneth Panuncial & Azumi Gajutos
                </p>
              </div>
            )}
          </div>
        </div>


        <div className="project-card">
          <div className="project-number">04</div>

          <div className="project-content">
            <h2>Pixel Maker</h2>

            <p>
              A Python image project that creates a
              pixel-style version of an image.
            </p>

            <span className="project-status">PYTHON</span>
            <span className="project-link">
              Image Processing
            </span>

            <p className="project-author">
              Authors: Earl Kenneth Panuncial & Azumi Gajutos
            </p>

            <button
              className="project-details-button"
              onClick={() => toggleProject(4)}
            >
              {openProject === 4
                ? 'Hide Details ↑'
                : 'View Details →'}
            </button>

            {openProject === 4 && (
              <div className="project-details">
                <h3>Project Overview</h3>

                <p>
                  A Python image-processing project that
                  transforms images into a pixel-style appearance.
                </p>

                <h3>Technology</h3>

                <p>Python · Image Processing</p>

                <h3>Authors</h3>

                <p>
                  Earl Kenneth Panuncial & Azumi Gajutos
                </p>
              </div>
            )}
          </div>
        </div>


        <div className="project-card">
          <div className="project-number">05</div>

          <div className="project-content">
            <h2>Background Remover</h2>

            <p>
              A Python project that processes images
              and removes their backgrounds.
            </p>

            <span className="project-status">PYTHON</span>
            <span className="project-link">
              Image Processing
            </span>

            <p className="project-author">
              Authors: Earl Kenneth Panuncial & Azumi Gajutos
            </p>

            <button
              className="project-details-button"
              onClick={() => toggleProject(5)}
            >
              {openProject === 5
                ? 'Hide Details ↑'
                : 'View Details →'}
            </button>

            {openProject === 5 && (
              <div className="project-details">
                <h3>Project Overview</h3>

                <p>
                  A Python project designed to process an image
                  and remove its background.
                </p>

                <h3>Technology</h3>

                <p>Python · Image Processing</p>

                <h3>Authors</h3>

                <p>
                  Earl Kenneth Panuncial & Azumi Gajutos
                </p>
              </div>
            )}
          </div>
        </div>


        <div className="project-card">
          <div className="project-number">06</div>

          <div className="project-content">
            <h2>Personal Portfolio</h2>

            <p>
              A personal portfolio created for PLTECH using
              HTML, featuring GitHub and social media connections.
            </p>

            <span className="project-status">PLTECH</span>
            <span className="project-link">HTML</span>

            <p className="project-author">
              Authors: Earl Kenneth Panuncial & Azumi Gajutos
            </p>

            <button
              className="project-details-button"
              onClick={() => toggleProject(6)}
            >
              {openProject === 6
                ? 'Hide Details ↑'
                : 'View Details →'}
            </button>

            {openProject === 6 && (
              <div className="project-details">
                <h3>Project Overview</h3>

                <p>
                  A personal portfolio created for PLTECH
                  using HTML, with GitHub and social media
                  connections.
                </p>

                <h3>Technology</h3>

                <p>HTML</p>

                <h3>Authors</h3>

                <p>
                  Earl Kenneth Panuncial & Azumi Gajutos
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects