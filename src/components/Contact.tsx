const links = [
  { label: 'Resume', href: '/CHRETIEN%20BANZA%202026%20Resume.pdf', value: 'Download PDF', external: false },
  { label: 'Email', href: 'mailto:chretienbanza1@gmail.com', value: 'chretienbanza1@gmail.com', external: true },
  { label: 'GitHub', href: 'https://github.com/Chretienb', value: 'github.com/Chretienb', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/chretien-banza-042831242', value: 'linkedin.com/in/chretien-banza', external: true },
  { label: 'Substack', href: 'https://chretienbanza.substack.com', value: 'I write articles', external: true },
]

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">Open to opportunities. Let's connect.</p>
      <div className="contact-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external !== false ? '_blank' : undefined}
            rel={link.external !== false ? 'noopener noreferrer' : undefined}
            download={link.href.endsWith('.pdf') ? 'Chretien_Banza_Resume.pdf' : undefined}
            className="contact-link"
          >
            <span className="contact-label">{link.label}</span>
            <span className="contact-value mono">{link.value}</span>
          </a>
        ))}
      </div>
      <p className="contact-location">Orem, UT · English & French</p>
    </section>
  )
}

export default Contact
