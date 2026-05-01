import { useEffect, useRef, useState } from 'react'

const skillCells = [
  {
    icon: '◈',
    name: 'AI / LLM Engineering',
    tags: [
      { label: 'LLMOps',           cls: 'purple' },
      { label: 'Agentic AI',       cls: 'purple' },
      { label: 'RAG',              cls: 'purple' },
      { label: 'NLP',              cls: '' },
      { label: 'Supervised Learning', cls: '' },
    ],
  },
  {
    icon: '◈',
    name: 'Backend & Systems',
    tags: [
      { label: 'Rust',          cls: 'green' },
      { label: 'TypeScript',    cls: 'green' },
      { label: 'REST APIs',     cls: '' },
      { label: 'Auth / RBAC',   cls: '' },
      { label: 'Async Processing', cls: '' },
    ],
  },
  {
    icon: '◈',
    name: 'Data & Infrastructure',
    tags: [
      { label: 'PostgreSQL',   cls: 'blue' },
      { label: 'Supabase',     cls: 'blue' },
      { label: 'Data Pipelines', cls: '' },
      { label: 'Python',       cls: '' },
      { label: 'SQL',          cls: '' },
    ],
  },
  {
    icon: '◈',
    name: 'Frontend & Automation',
    tags: [
      { label: 'React',        cls: 'blue' },
      { label: 'Flutter',      cls: '' },
      { label: 'n8n',          cls: 'green' },
      { label: 'Vite',         cls: '' },
      { label: 'Expo',         cls: '' },
    ],
  },
]

const bars = [
  { name: 'TypeScript / Rust',        pct: 92, cls: 'green'  },
  { name: 'LLM Engineering / RAG',    pct: 88, cls: 'purple' },
  { name: 'Python / Data Science',    pct: 85, cls: 'blue'   },
  { name: 'PostgreSQL / Supabase',    pct: 90, cls: 'amber'  },
  { name: 'React / Full-Stack Web',   pct: 87, cls: 'blue'   },
  { name: 'n8n / Workflow Automation',pct: 80, cls: 'green'  },
]

function SkillBars({ active }: { active: boolean }) {
  const half = Math.ceil(bars.length / 2)
  const left  = bars.slice(0, half)
  const right = bars.slice(half)

  return (
    <div className="skill-bars-wrap" data-reveal>
      {[left, right].map((group, gi) => (
        <div key={gi} className="skill-bars">
          {group.map((b) => (
            <div key={b.name} className="bar-row">
              <div className="bar-header">
                <span className="bar-name">{b.name}</span>
                <span className="bar-pct">{b.pct}%</span>
              </div>
              <div className="bar-track">
                <div
                  className={`bar-fill ${b.cls}`}
                  style={{ width: active ? `${b.pct}%` : '0%' }}
                />
              </div>
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
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } },
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

        <div className="terminal-block" data-reveal>
          <div className="term-header">
            <div className="term-dot r" /><div className="term-dot y" /><div className="term-dot g" />
            <span className="term-path">~/chretien_banza — zsh</span>
          </div>
          <div className="term-line"><span className="comment"># active environment</span></div>
          <div className="term-line"><span className="cmd">$ rustc</span> --version &amp;&amp; <span className="cmd">node</span> --version</div>
          <div className="term-line"><span className="out">rustc 1.78.0 &nbsp;|&nbsp; node v20.11.0</span> <span className="comment">:: typescript 5.2</span></div>
          <div className="term-line"><span className="cmd">$ python</span> -c <span className="str">"import expertise; print(expertise.stack())"</span></div>
          <div className="term-line"><span className="out">&gt;&gt;&gt; ['Fintech', 'LLM Agents', 'RAG', 'Rust', 'TypeScript', 'Agentic AI']</span></div>
          <div className="term-line"><span className="cmd">$ cat</span> certifications.txt</div>
          <div className="term-line"><span className="out">NVIDIA DLI — Agentic AI (</span><span className="num">2026</span><span className="out">) &nbsp;|&nbsp; CITI Program (</span><span className="num">2025</span><span className="out">)</span></div>
        </div>

        <div className="skill-grid" data-reveal>
          {skillCells.map((c) => (
            <div key={c.name} className="skill-cell">
              <div className="skill-icon">{c.icon}</div>
              <div className="skill-name">{c.name}</div>
              <div className="skill-tags">
                {c.tags.map((t) => (
                  <span key={t.label} className={`tag ${t.cls}`}>{t.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SkillBars active={active} />
      </div>
    </section>
  )
}
