import { Card } from './ui/card'

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

        <div className="space-y-4" data-reveal>
          {certs.map((c) => (
            <Card key={c.title} className="rounded-none p-6">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wide text-primary">{c.issuer}</div>
                  <div className="mt-1 font-sans text-base font-bold">{c.title}</div>
                </div>
                <div className="shrink-0 text-left font-mono text-xs text-muted-foreground sm:text-right">
                  <div>{'expires' in c ? `${c.issued} · Expires ${c.expires}` : `Issued ${c.issued}`}</div>
                  <div className="text-muted-foreground/60">ID: {c.credentialId}</div>
                </div>
              </div>
              <ul className="mb-4 space-y-1">
                {c.bullets.map((b) => (
                  <li key={b} className="font-mono text-[13px] leading-relaxed text-muted-foreground before:mr-2 before:text-primary before:content-['—']">
                    {b}
                  </li>
                ))}
              </ul>
              <a href={c.link.url} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-primary hover:text-primary/80">
                {c.link.label}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
