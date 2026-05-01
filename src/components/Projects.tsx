import { useState, useEffect } from 'react'

const projects = [
  {
    name: 'Drawfi',
    badge: 'badge-featured', badgeLabel: '★ FEATURED',
    featured: true,
    role: 'Software Engineer — Founding Team',
    period: 'Dec 2023 – Present',
    desc: 'Production fintech SaaS: construction loan disbursement platform from 0→1. Secure REST APIs, LLM document intelligence, async processing architecture serving real users.',
    tech: [
      { label: 'Rust', cls: 'green' }, { label: 'TypeScript', cls: 'green' },
      { label: 'Supabase', cls: 'blue' }, { label: 'PostgreSQL', cls: 'blue' },
      { label: 'JWT Auth', cls: '' },
    ],
    link: 'https://app.drawfi.io/', linkLabel: 'app.drawfi.io →',
    githubLink: 'https://github.com/Draw-Fi',
  },
  {
    name: 'AI Copilot (DrawFi)',
    badge: 'badge-ai', badgeLabel: 'AGENTIC AI',
    role: 'Engineer',
    period: '2025 – Present',
    desc: 'Intelligent financial assistant inside DrawFi. LLM-powered document workflows automating manual financial review. Multi-step reasoning over loan documents.',
    tech: [
      { label: 'LLMs', cls: 'purple' }, { label: 'RAG', cls: 'purple' },
      { label: 'TypeScript', cls: 'green' }, { label: 'Rust', cls: 'green' },
    ],
    link: 'https://app.drawfi.io/', linkLabel: 'View project →',
  },
  {
    name: 'Agentic AI Systems',
    badge: 'badge-ai', badgeLabel: 'LLM / RAG',
    role: 'Engineer',
    period: '2026',
    desc: 'Production-grade LLM agents with RAG pipelines, multi-step reasoning, tool use, and memory. Built and certified via NVIDIA Deep Learning Institute.',
    tech: [
      { label: 'Agentic AI', cls: 'purple' }, { label: 'RAG', cls: 'purple' },
      { label: 'LLMOps', cls: 'purple' }, { label: 'Python', cls: '' },
    ],
    link: 'https://github.com/Chretienb', linkLabel: 'GitHub →',
  },
  {
    name: 'PML (PayeMonLoyer)',
    badge: 'badge-fintech', badgeLabel: 'FINTECH',
    role: 'Software Engineer',
    period: '2025 – Present',
    desc: 'Financial identity and credit-scoring platform for tenants in emerging markets. ML-informed scoring models, production API layer, backend infrastructure.',
    tech: [
      { label: 'TypeScript', cls: 'green' }, { label: 'Flutter', cls: '' },
      { label: 'PostgreSQL', cls: 'blue' }, { label: 'ML scoring', cls: 'purple' },
    ],
    link: 'https://github.com/Chretienb', linkLabel: 'GitHub →',
  },
  {
    name: 'VC Insights Dashboard',
    badge: 'badge-data', badgeLabel: 'DATA VIZ',
    role: 'Creator',
    period: '2025',
    desc: 'Utah startup ecosystem and venture capital analytics dashboard. Data visualization for investment metrics and startup trends.',
    tech: [
      { label: 'TypeScript', cls: 'green' }, { label: 'Vite', cls: '' },
      { label: 'Tailwind', cls: 'blue' },
    ],
    link: 'https://iridescent-puppy-cc708f.netlify.app', linkLabel: 'Live demo →',
    githubLink: 'https://github.com/Chretienb/VC-Insights-Dashboard',
  },
  {
    name: 'Teyka Payment Gateway',
    badge: 'badge-fintech', badgeLabel: 'PAYMENTS',
    role: 'Software Engineer',
    period: '2025 – Present',
    desc: 'Cross-border payment gateway connecting mobile wallets to global commerce. FX conversion, transaction routing, n8n workflow automation reducing manual intervention.',
    tech: [
      { label: 'TypeScript', cls: 'green' }, { label: 'n8n', cls: '' },
      { label: 'REST APIs', cls: '' }, { label: 'PostgreSQL', cls: 'blue' },
    ],
    link: 'https://github.com/Chretienb', linkLabel: 'GitHub →',
  },
]

type Project = typeof projects[0]

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className={`project-badge ${p.badge}`}>{p.badgeLabel}</div>
        <h3 className="modal-title">{p.name}</h3>
        <p className="modal-role">▸ {p.role}</p>
        <p className="modal-period">{p.period}</p>
        <p className="modal-desc">{p.desc}</p>
        <div className="project-tech">
          {p.tech.map(t => <span key={t.label} className={`tag ${t.cls}`}>{t.label}</span>)}
        </div>
        <div className="modal-links">
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="modal-link">{p.linkLabel}</a>
          {'githubLink' in p && p.githubLink && (
            <a href={p.githubLink as string} target="_blank" rel="noopener noreferrer" className="modal-link">GitHub →</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-tag" data-reveal>// 02 — Selected Work</div>
        <h2 className="section-title" data-reveal>
          Featured Projects<span className="cursor-blink" />
        </h2>
      </div>

      <div className="wrap" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: '100%' }}>
        <div className="project-grid" data-reveal>
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`project-card${p.featured ? ' featured' : ''}`}
              onClick={() => setSelected(p)}
              role="button" tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelected(p)}
              aria-label={`View ${p.name}`}
              style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}
            >
              <div className={`project-badge ${p.badge}`}>{p.badgeLabel}</div>
              <div className="project-title">{p.name}</div>
              <p className="project-role">▸ {p.role}</p>
              <p className="project-period">{p.period}</p>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t.label} className={`tag ${t.cls}`}>{t.label}</span>)}
              </div>
              <span className="project-hint">click for details</span>
            </div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal p={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
