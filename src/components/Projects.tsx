import { useState, useEffect } from 'react'

const projects: Array<{
  name: string
  role: string
  period: string
  desc: string
  tech: string[]
  link: string
  linkLabel: string
  githubLink?: string
  extraLinks?: Array<{ label: string; url: string }>
}> = [
  {
    name: 'Drawfi',
    role: 'Co-Founder & CTO',
    period: 'Dec 2023 – Present',
    desc: 'SaaS helping banks and construction companies manage loans and disbursements. The construction loan process is encumbered by archaic systems, manual processes, and lost files. DrawFi centralizes user flows, connects loan stakeholders with real-time updates, and streamlines disbursements. Emerged from Sandbox Accelerator.',
    tech: ['TypeScript', 'Rust', 'React', 'PostgreSQL', 'Supabase'],
    link: 'https://app.drawfi.io/',
    linkLabel: 'View project →',
    githubLink: 'https://github.com/Draw-Fi',
    extraLinks: [
      { label: 'iHub Utah profile', url: 'https://www.ihubutah.org/public-company-details?recordId=recm4Vzsp6i1QtfUt' },
    ],
  },
  {
    name: 'PML (PayeMonLoyer)',
    role: 'Co-Founder & CTO',
    period: 'April 2025 – Present',
    desc: 'Rent and credit platform for tenants in emerging markets. Owned product roadmap, data model, and MVP architecture. Conducted market research.',
    tech: ['Flutter', 'TypeScript', 'PostgreSQL'],
    link: 'https://github.com/Chretienb',
    linkLabel: 'View on GitHub →',
  },
  {
    name: 'Fitness Tracker',
    role: 'Frontend Developer',
    period: '2025',
    desc: 'Full-stack fitness tracking app. I built the frontend. Collaborative project with Python backend, JavaScript/CSS/HTML frontend.',
    tech: ['JavaScript', 'CSS', 'HTML', 'Python'],
    link: 'https://github.com/gyoung-study/fitness_tracker_repo',
    linkLabel: 'View on GitHub →',
    githubLink: 'https://github.com/gyoung-study/fitness_tracker_repo',
  },
  {
    name: 'VC Insights Dashboard',
    role: 'Creator',
    period: '2025',
    desc: 'Venture capital insights and Utah startup dashboard. Data visualization for startup ecosystems and investment metrics. Built with Vite and Tailwind.',
    tech: ['TypeScript', 'Vite', 'Tailwind CSS'],
    link: 'https://iridescent-puppy-cc708f.netlify.app',
    linkLabel: 'View project →',
    githubLink: 'https://github.com/Chretienb/VC-Insights-Dashboard',
  },
]

function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article
            key={p.name}
            className="project-card"
            onClick={() => setSelected(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(p)}
            aria-label={`View details for ${p.name}`}
          >
            <div className="project-header">
              <h3>{p.name}</h3>
              <span className="project-role">{p.role}</span>
            </div>
            <p className="project-period mono">{p.period}</p>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag mono">{t}</span>
              ))}
            </div>
            <span className="project-hint mono">Click for details</span>
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(ev) => ev.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              ×
            </button>
            <h3 className="modal-title">{selected.name}</h3>
            <p className="modal-role">{selected.role}</p>
            <p className="modal-period mono">{selected.period}</p>
            <p className="modal-desc">{selected.desc}</p>
            <div className="project-tech">
              {selected.tech.map((t) => (
                <span key={t} className="tech-tag mono">{t}</span>
              ))}
            </div>
            <div className="project-links modal-links">
              <a href={selected.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {selected.linkLabel}
              </a>
              {selected.githubLink && (
                <a href={selected.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  Go to Git →
                </a>
              )}
              {selected.extraLinks?.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="project-link">
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
