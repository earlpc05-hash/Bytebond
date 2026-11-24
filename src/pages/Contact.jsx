import { useState } from 'react'
import { EMAIL, MEMBERS } from '../data/content'

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked; the mailto link still works.
    }
  }

  // Opens the user's email app with the form filled in
  const sendMessage = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value

    const subject = `Message from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="section-heading reveal">
        <p className="section-label">04 / Get in touch</p>
        <h2>Let&apos;s Connect</h2>
        <p>
          Have an idea, question, or something you want to explore with us?
          Feel free to connect with ByteBond.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info card reveal">
          <h3>Connect With Us</h3>
          <p className="contact-description">
            We are always open to learning, sharing ideas, and discovering new
            opportunities together.
          </p>

          <div className="contact-group">
            <h4>Email</h4>
            <div className="email-row">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

              <button
                className="copy-email"
                type="button"
                onClick={copyEmail}
                title="Copy email"
                aria-label="Copy email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="9" y="9" width="11" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {copied && <span className="copy-confirmation">Copied!</span>}
            </div>
          </div>

          {/* ids stay contact-earl / contact-azumi so the member name links still jump here */}
          {MEMBERS.map((m) => (
            <div key={m.id} className="contact-group member-contact" id={`contact-${m.id}`}>
              <h4>{m.name}</h4>
              <div className="link-row">
                <a href={m.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a>
                <a href={m.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>

        <form className="contact-form card reveal d1" onSubmit={sendMessage}>
          <label>
            <span>Your Name</span>
            <input type="text" name="name" placeholder="Your Name here" required />
          </label>

          <label>
            <span>Your Email</span>
            <input type="email" name="email" placeholder="you@email.com" required />
          </label>

          <label>
            <span>Your Message</span>
            <textarea name="message" placeholder="Tell us what's on your mind..." required></textarea>
          </label>

          <button type="submit" className="btn btn-primary">
            Send Message <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
