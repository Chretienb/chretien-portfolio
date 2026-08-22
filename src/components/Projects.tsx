import { useState } from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Dialog, DialogContent, DialogTitle } from './ui/dialog'
import { cn } from '../lib/utils'

const projects = [
  {
    name: 'Drawfi',
    badgeLabel: '★ FEATURED', badgeCls: 'border-primary/40 bg-primary/10 text-primary',
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
    name: 'Dizko',
    badgeLabel: '★ FEATURED', badgeCls: 'border-primary/40 bg-primary/10 text-primary',
    featured: true,
    role: 'Founder & Engineer',
    period: '2026 – Present',
    desc: 'AI-powered music collaboration platform — stem separation, smart mixing, DAW export, and YouTube analytics for artists and producers.',
    tech: [
      { label: 'React', cls: 'blue' }, { label: 'TypeScript', cls: 'green' },
      { label: 'Supabase', cls: 'blue' }, { label: 'Hono', cls: '' },
      { label: 'AI / Stem Separation', cls: 'purple' },
    ],
    link: 'https://dizko.ai', linkLabel: 'dizko.ai →',
    githubLink: 'https://github.com/Chretienb/DIZKO.AI',
  },
  {
    name: 'AI Copilot (DrawFi)',
    badgeLabel: 'AGENTIC AI', badgeCls: 'border-[#bc8cff]/40 bg-[#bc8cff]/10 text-[#bc8cff]',
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
    badgeLabel: 'LLM / RAG', badgeCls: 'border-[#bc8cff]/40 bg-[#bc8cff]/10 text-[#bc8cff]',
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
    badgeLabel: 'FINTECH', badgeCls: 'border-[#58a6ff]/40 bg-[#58a6ff]/10 text-[#58a6ff]',
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
    badgeLabel: 'DATA VIZ', badgeCls: 'border-[#f0a848]/40 bg-[#f0a848]/10 text-[#f0a848]',
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
    badgeLabel: 'PAYMENTS', badgeCls: 'border-[#58a6ff]/40 bg-[#58a6ff]/10 text-[#58a6ff]',
    role: 'Software Engineer',
    period: '2025 – Present',
    desc: 'Cross-border payment gateway connecting mobile wallets to global commerce. FX conversion, transaction routing, n8n workflow automation reducing manual intervention.',
    tech: [
      { label: 'TypeScript', cls: 'green' }, { label: 'n8n', cls: '' },
      { label: 'REST APIs', cls: '' }, { label: 'PostgreSQL', cls: 'blue' },
    ],
    link: 'https://github.com/Chretienb', linkLabel: 'GitHub →',
  },
  {
    name: 'MH Custom Woodworks',
    badgeLabel: 'CLIENT WORK', badgeCls: 'border-[#f0a848]/40 bg-[#f0a848]/10 text-[#f0a848]',
    role: 'Full-Stack Developer',
    period: '2026',
    desc: 'Luxury bespoke furniture website built end-to-end for Matthew Harder Custom Woodworks, with a built-in CRM for lead capture and management.',
    tech: [
      { label: 'TypeScript', cls: 'green' }, { label: 'CRM', cls: '' },
      { label: 'Lead Gen', cls: '' },
    ],
    link: 'https://mhcustomwoodworks.com', linkLabel: 'mhcustomwoodworks.com →',
    githubLink: 'https://github.com/Chretienb/mattwoodworks',
  },
]

type Project = typeof projects[0]

const tagColor: Record<string, string> = {
  green: 'border-primary/30 text-primary',
  blue: 'border-[#58a6ff]/30 text-[#58a6ff]',
  purple: 'border-[#bc8cff]/30 text-[#bc8cff]',
  '': 'border-white/15 text-muted-foreground',
}

function TechTag({ label, cls }: { label: string; cls: string }) {
  return (
    <Badge variant="outline" className={cn('rounded-none font-mono text-[10px] font-normal', tagColor[cls])}>
      {label}
    </Badge>
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
        <div
          className="grid grid-cols-1 gap-4 px-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-[calc(50%-550px+2rem)]"
          data-reveal
        >
          {projects.map((p, i) => (
            <Card
              key={p.name}
              className={cn(
                'group cursor-pointer rounded-none p-6 transition-colors hover:border-primary/50',
                p.featured && 'border-primary/40 sm:col-span-2 lg:col-span-1'
              )}
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(p)}
              aria-label={`View ${p.name}`}
              style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}
            >
              <Badge variant="outline" className={cn('mb-4 rounded-none font-mono text-[10px] font-bold tracking-wide', p.badgeCls)}>
                {p.badgeLabel}
              </Badge>
              <div className="mb-1 font-sans text-lg font-bold">{p.name}</div>
              <p className="mb-0.5 font-mono text-xs text-muted-foreground">▸ {p.role}</p>
              <p className="mb-3 font-mono text-xs text-muted-foreground/70">{p.period}</p>
              <p className="mb-4 font-mono text-[13px] leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <TechTag key={t.label} {...t} />
                ))}
              </div>
              <span className="font-mono text-[11px] text-muted-foreground/60 opacity-0 transition-opacity group-hover:opacity-100">
                click for details
              </span>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[85vh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-none border-border/60 bg-card sm:w-full">
          {selected && (
            <>
              <DialogTitle className="sr-only">{selected.name}</DialogTitle>
              <Badge variant="outline" className={cn('mb-4 w-fit rounded-none font-mono text-[10px] font-bold tracking-wide', selected.badgeCls)}>
                {selected.badgeLabel}
              </Badge>
              <h3 className="mb-1 font-sans text-2xl font-bold">{selected.name}</h3>
              <p className="mb-0.5 font-mono text-sm text-muted-foreground">▸ {selected.role}</p>
              <p className="mb-4 font-mono text-xs text-muted-foreground/70">{selected.period}</p>
              <p className="mb-5 font-mono text-sm leading-relaxed text-muted-foreground">{selected.desc}</p>
              <div className="mb-6 flex flex-wrap gap-1.5">
                {selected.tech.map((t) => (
                  <TechTag key={t.label} {...t} />
                ))}
              </div>
              <div className="flex gap-6">
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-primary hover:text-primary/80"
                >
                  {selected.linkLabel}
                </a>
                {'githubLink' in selected && selected.githubLink && (
                  <a
                    href={selected.githubLink as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-primary hover:text-primary/80"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
