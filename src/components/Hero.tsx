import { Link } from 'react-router-dom'
import NeuralCanvas from './NeuralCanvas'
import { Button } from './ui/button'
import { Card } from './ui/card'

const stats = [
  { num: '3', label: 'Startups Built' },
  { num: '0→1', label: 'Fintech Platform' },
  { num: '2', label: 'Certifications' },
  { num: '5+', label: 'Languages' },
]

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden py-14 sm:py-[60px] lg:min-h-[calc(100vh-60px)]">
      <NeuralCanvas />
      <div className="wrap">
        <div className="flex w-full items-center justify-between gap-16 max-lg:flex-col max-lg:items-start max-lg:gap-10">
          <div className="min-w-0 max-w-[620px] flex-1" data-reveal>
            <p className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary before:h-px before:w-6 before:shrink-0 before:bg-primary">
              B.S. Computational Data Science · UVU Dec 2026
            </p>
            <h1 className="mb-5 text-[clamp(2.8rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              <span className="text-muted-foreground">Hi, I'm</span>
              <br />
              <span className="text-primary">Chretien Banza</span>
            </h1>
            <p className="mb-6 font-mono text-[13px] leading-relaxed text-muted-foreground">
              Fintech Engineer · Co-Founder &amp; CTO at Drawfi · LLM / Agentic AI Builder · Computational Data Scientist
            </p>
            <p className="mb-10 max-w-[480px] font-mono text-[13px] leading-loose text-muted-foreground [&_span]:text-[#58a6ff]">
              Building <span>production fintech systems</span> and <span>LLM-powered agents</span> from 0→1.
              Rust · TypeScript · Python. Founder. Engineer. Emerging markets believer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="terminal">
                <a href="/#projects">View Projects</a>
              </Button>
              <Button asChild variant="terminal-outline">
                <Link to="/about">About Me</Link>
              </Button>
              <Button asChild variant="terminal-ghost">
                <a href="/#contact">Contact</a>
              </Button>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-px sm:w-auto lg:flex lg:w-auto lg:shrink-0 lg:flex-col">
            {stats.map((s) => (
              <Card
                key={s.label}
                className="rounded-none border-l-2 border-l-primary px-4 py-3 sm:min-w-[155px] sm:px-6 sm:py-[1.1rem]"
              >
                <div className="mb-1 text-xl font-extrabold leading-none text-primary sm:text-[1.9rem]">{s.num}</div>
                <div className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground sm:text-[11px]">{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
