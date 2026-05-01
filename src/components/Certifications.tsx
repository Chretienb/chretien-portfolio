const certs = [
  {
    issuer: 'NVIDIA',
    title: 'Certificate of Competency — Building Agentic AI Applications with LLMs',
    issued: 'Mar 2026',
    credentialId: 'S40CFgv5QniPFoeBYHliWA',
    bullets: [
      'Designed and deployed multi-step LLM agents with tool use, memory, and retrieval-augmented generation (RAG)',
      'Skills: LLMOps · Agentic Workflows · RAG · NLP · Supervised Learning',
    ],
    link: { label: 'NVIDIA DLI →', url: 'https://learn.nvidia.com/en-us/training/instructor-led-workshops' },
  },
  {
    issuer: 'CITI Program',
    title: 'Student Researchers',
    issued: 'Mar 2025',
    expires: 'Mar 2028',
    credentialId: '68691727',
    bullets: [
      'Certified in research ethics and responsible conduct of research for student researchers',
    ],
    link: { label: 'Show credential →', url: 'https://www.citiprogram.org/' },
  },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <div className="section-tag" data-reveal>// 05 — Certifications</div>
        <h2 className="section-title" data-reveal>
          Licenses &amp; Certs<span className="cursor-blink" />
        </h2>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="cert-list" data-reveal>
          {certs.map((c) => (
            <div key={c.title} className="cert-card">
              <div className="cert-header">
                <div>
                  <div className="cert-issuer">{c.issuer}</div>
                  <div className="cert-title">{c.title}</div>
                </div>
                <div className="cert-meta">
                  <span className="cert-year">
                    {'expires' in c ? `${c.issued} · Expires ${c.expires}` : `Issued ${c.issued}`}
                  </span>
                  <span className="cert-id">ID: {c.credentialId}</span>
                </div>
              </div>
              <ul className="cert-bullets">
                {c.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <a href={c.link.url} target="_blank" rel="noopener noreferrer" className="cert-link">
                {c.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
