import { useState, useEffect } from 'react'

const experiences: Array<{
  company: string
  role: string
  period: string
  desc: string
  link?: { label: string; url: string }
}> = [
  {
    company: 'Wolverine Fund (UVU)',
    role: 'Associate',
    period: 'Dec 2025 – Present',
    desc: 'Due diligence on early-stage startups (fintech, SaaS, consumer). TAM/SAM/SOM, financial modeling, risk & scalability analysis.',
    link: { label: 'Wolverine Fund', url: 'https://www.uvu.edu/wolverinefund/' },
  },
  {
    company: 'FinTech Center (UFTC), UVU',
    role: 'Program Assistant',
    period: 'Feb 2026 – Present',
    desc: 'Fintech research and industry partnerships across AI, data science, and financial technology.',
    link: { label: 'UVU FinTech Center', url: 'https://www.uvu.edu/news/school-of-business/2026/uvu-fintech-center-ribbon-cutting.html' },
  },
  {
    company: 'E2i, UVU',
    role: 'Technical Product Manager (Contract)',
    period: 'Dec 2022 – Dec 2023',
    desc: 'Contracting at Utah County Fair. Led cross-functional teams delivering software products—requirements, timelines, stakeholder communication.',
    link: { label: 'Utah County Fair 2026', url: 'https://www.utahcountyfair.org/2026/' },
  },
  {
    company: 'Sandbox Accelerator, UVU',
    role: 'Founder Track',
    period: 'April 2024 – 2025',
    desc: 'Selective accelerator for founders building startups. Drawfi emerged from this program.',
    link: { label: 'Drawfi', url: 'https://drawfi.io' },
  },
]

function Experience() {
  const [selected, setSelected] = useState<typeof experiences[0] | null>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((e) => (
          <article
            key={e.company}
            className="experience-card"
            onClick={() => setSelected(e)}
            role="button"
            tabIndex={0}
            onKeyDown={(ev) => ev.key === 'Enter' && setSelected(e)}
            aria-label={`View details for ${e.company}`}
          >
            <div className="experience-header">
              <h3>{e.company}</h3>
              <span className="experience-role">{e.role}</span>
            </div>
            <p className="experience-period mono">{e.period}</p>
            <p className="experience-desc">{e.desc}</p>
            <span className="experience-hint mono">Click for details</span>
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(ev) => ev.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              ×
            </button>
            <h3 className="modal-title">{selected.company}</h3>
            <p className="modal-role">{selected.role}</p>
            <p className="modal-period mono">{selected.period}</p>
            <p className="modal-desc">{selected.desc}</p>
            {selected.link && (
              <a href={selected.link.url} target="_blank" rel="noopener noreferrer" className="modal-link">
                {selected.link.label} →
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience
