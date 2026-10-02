import { useState } from 'react'

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('bytebond2@gmail.com')

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const sendMessage = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value

    const subject = `Message from ${name}`

    const body = `Name: ${name}
Email: ${email}

Message:
${message}`

    window.location.href =
      `mailto:bytebond2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <p className="section-label">GET IN TOUCH</p>

        <h1>Let's Connect</h1>

        <p>
          Have an idea, question, or something you want to
          explore with us? Feel free to connect with ByteBond.
        </p>
      </div>

      <div className="contact-grid">

        <div className="contact-info">
          <h2>Connect With Us</h2>

          <p className="contact-description">
            We are always open to learning, sharing ideas,
            and discovering new opportunities together.
          </p>

          <div className="contact-group">
            <h3>Email</h3>

            <div className="email-row">
              <a href="mailto:bytebond2@gmail.com">
                bytebond2@gmail.com
              </a>

              <button
                className="copy-email"
                type="button"
                onClick={copyEmail}
                title="Copy email"
                aria-label="Copy email"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="9"
                    y="9"
                    width="11"
                    height="11"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <path
                    d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              {copied && (
                <span className="copy-confirmation">
                  Copied!
                </span>
              )}
            </div>
          </div>

          <div
            className="contact-group member-contact"
            id="contact-earl"
          >
            <h3>Earl Kenneth Panuncial</h3>

            <a
              href="https://www.facebook.com/share/1PNPtb9up3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://github.com/earlpc05-hash"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <div
            className="contact-group member-contact"
            id="contact-azumi"
          >
            <h3>Azumi Gajutos</h3>

            <a
              href="https://www.facebook.com/share/1DmKxCdy3V/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://github.com/AzumiGajutos"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={sendMessage}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact