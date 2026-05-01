export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-tag" data-reveal>// 04 — Get In Touch</div>
        <h2 className="section-title" data-reveal>
          Let's Build Something<span className="cursor-blink" />
        </h2>

        <div className="contact-grid" data-reveal>
          <a
            href="mailto:chretienbanza1@gmail.com"
            className="contact-block"
            style={{ display: 'block' }}
          >
            <div className="contact-label">Email</div>
            <div className="contact-val">chretienbanza1@gmail.com</div>
            <div className="contact-sub">Respond within 24 hours</div>
          </a>

          <a
            href="https://github.com/Chretienb"
            target="_blank" rel="noopener noreferrer"
            className="contact-block"
            style={{ display: 'block' }}
          >
            <div className="contact-label">GitHub</div>
            <div className="contact-val">github.com/Chretienb</div>
            <div className="contact-sub">Projects & source code</div>
          </a>

          <a
            href="https://linkedin.com/in/chretien-banza-042831242"
            target="_blank" rel="noopener noreferrer"
            className="contact-block"
            style={{ display: 'block' }}
          >
            <div className="contact-label">LinkedIn</div>
            <div className="contact-val">/in/chretien-banza</div>
            <div className="contact-sub">Open to collaborations</div>
          </a>

          <a
            href="/CHRETIEN%20BANZA%202026%20Resume.pdf"
            download="Chretien_Banza_Resume.pdf"
            className="contact-block highlight"
            style={{ display: 'block' }}
          >
            <div className="contact-label">Status</div>
            <div className="contact-status">
              <span className="status-dot" />
              Open to Opportunities
            </div>
            <div className="contact-sub">Resume · Orem, UT · English & French</div>
          </a>
        </div>

        <p className="contact-location" style={{ marginTop: '2rem' }}>
          Also on{' '}
          <a href="https://chretienbanza.substack.com" target="_blank" rel="noopener noreferrer">
            Substack
          </a>
          {' '}— I write about fintech, AI, and building products.
        </p>
      </div>
    </section>
  )
}
