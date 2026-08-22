import { useEffect, useRef, useState } from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { cn } from '../lib/utils'

const skillCells = [
  {
    icon: '◈',
    name: 'AI / LLM Engineering',
    tags: [
      { label: 'LLMOps', cls: 'purple' },
      { label: 'Agentic AI', cls: 'purple' },
      { label: 'RAG', cls: 'purple' },
      { label: 'NLP', cls: '' },
      { label: 'Supervised Learning', cls: '' },
    ],
  },
  {
    icon: '◈',
    name: 'Backend & Systems',
    tags: [
      { label: 'Rust', cls: 'green' },
      { label: 'TypeScript', cls: 'green' },
      { label: 'REST APIs', cls: '' },
      { label: 'Auth / RBAC', cls: '' },
      { label: 'Async Processing', cls: '' },
    ],
  },
  {
    icon: '◈',
    name: 'Data & Infrastructure',
    tags: [
      { label: 'PostgreSQL', cls: 'blue' },
      { label: 'Supabase', cls: 'blue' },
      { label: 'Data Pipelines', cls: '' },
      { label: 'Python', cls: '' },
      { label: 'SQL', cls: '' },
    ],
  },
  {
    icon: '◈',
    name: 'Frontend & Automation',
    tags: [
      { label: 'React', cls: 'blue' },
      { label: 'Flutter', cls: '' },
      { label: 'n8n', cls: 'green' },
      { label: 'Vite', cls: '' },
      { label: 'Expo', cls: '' },
    ],
  },
]

const tagColor: Record<string, string> = {
  green: 'border-primary/30 text-primary',
  blue: 'border-[#58a6ff]/30 text-[#58a6ff]',
  purple: 'border-[#bc8cff]/30 text-[#bc8cff]',
  '': 'border-white/15 text-muted-foreground',
}

const barColor: Record<string, string> = {
  green: 'bg-primary',
  purple: 'bg-[#bc8cff]',
  blue: 'bg-[#58a6ff]',
  amber: 'bg-[#f0a848]',
}

const bars = [
  { name: 'TypeScript / Rust', pct: 92, cls: 'green' },
  { name: 'LLM Engineering / RAG', pct: 88, cls: 'purple' },
  { name: 'Python / Data Science', pct: 85, cls: 'blue' },
  { name: 'PostgreSQL / Supabase', pct: 90, cls: 'amber' },
  { name: 'React / Full-Stack Web', pct: 87, cls: 'blue' },
  { name: 'n8n / Workflow Automation', pct: 80, cls: 'green' },
]

function SkillBars({ active }: { active: boolean }) {
  const half = Math.ceil(bars.length / 2)
  const left = bars.slice(0, half)
  const right = bars.slice(half)

  return (
    <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2" data-reveal>
      {[left, right].map((group, gi) => (
        <div key={gi} className="space-y-6">
          {group.map((b) => (
            <div key={b.name}>
              <div className="mb-2 flex items-center justify-between font-mono text-xs">
                <span className="text-foreground">{b.name}</span>
                <span className="text-muted-foreground">{b.pct}%</span>
              </div>
              <Progress
                value={active ? b.pct : 0}
                className="h-1.5 rounded-none bg-white/[0.06]"
                indicatorClassName={cn('rounded-none transition-all duration-1000', barColor[b.cls])}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills">
      <div className="wrap" ref={ref}>
        <div className="section-tag" data-reveal>// 01 — Technical Stack</div>
        <h2 className="section-title" data-reveal>
          What I Work With<span className="cursor-blink" />
        </h2>

        <Card className="rounded-none p-0 font-mono text-[13px] leading-relaxed" data-reveal>
          <div className="flex items-center gap-2 border-b px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#f0a848]" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="ml-2 text-xs text-muted-foreground">~/chretien_banza — zsh</span>
          </div>
          <div className="space-y-1.5 p-4">
            <div className="text-muted-foreground/60"># active environment</div>
            <div>
              <span className="text-primary">$ rustc</span> --version &amp;&amp; <span className="text-primary">node</span> --version
            </div>
            <div className="text-muted-foreground">
              rustc 1.78.0 &nbsp;|&nbsp; node v20.11.0 <span className="text-muted-foreground/60">:: typescript 5.2</span>
            </div>
            <div>
              <span className="text-primary">$ python</span> -c <span className="text-[#f0a848]">"import expertise; print(expertise.stack())"</span>
            </div>
            <div className="text-muted-foreground">
              &gt;&gt;&gt; ['Fintech', 'LLM Agents', 'RAG', 'Rust', 'TypeScript', 'Agentic AI']
            </div>
            <div>
              <span className="text-primary">$ cat</span> certifications.txt
            </div>
            <div className="text-muted-foreground">
              NVIDIA DLI — Agentic AI (<span className="text-[#58a6ff]">2026</span>) &nbsp;|&nbsp; CITI Program (<span className="text-[#58a6ff]">2025</span>)
            </div>
          </div>
        </Card>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {skillCells.map((c) => (
            <Card key={c.name} className="rounded-none p-5">
              <div className="mb-3 text-xl text-primary">{c.icon}</div>
              <div className="mb-3 font-sans text-sm font-bold">{c.name}</div>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <Badge key={t.label} variant="outline" className={cn('rounded-none font-mono text-[10px] font-normal', tagColor[t.cls])}>
                    {t.label}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <SkillBars active={active} />
      </div>
    </section>
  )
}
