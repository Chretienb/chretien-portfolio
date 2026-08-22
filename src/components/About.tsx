import { Badge } from './ui/badge'
import { Separator } from './ui/separator'

const interests = [
  'Software Engineering & Fintech Infrastructure',
  'Agentic AI — LLMs, RAG, multi-step reasoning',
  'Startup Development & Product Architecture',
  'Scalable Backend Systems & Async Processing',
  'Cross-border Payments & Financial Identity',
]

const instruments = ['Acoustic guitar', 'Electric guitar', 'Bass', 'Drums', 'Piano', 'Cajón', 'Percussion', 'Tambourine']
const languages = ['English', 'French', 'Swahili', 'Lingala']
const values = ['Faith', 'Discipline', 'Continuous growth', 'Building things that matter']

const timeline = [
  { year: '2002', event: 'Born in Kinshasa, DRC' },
  { year: '2018', event: 'Technical high school — circuits, robotics, first code' },
  { year: '2022', event: 'E2i — Technical PM at Utah County Fair' },
  { year: '2023', event: 'Co-founded Drawfi' },
  { year: '2024', event: 'Sandbox Accelerator — Founder Track' },
  { year: '2025', event: 'Co-founded PML · Wolverine Fund Associate · Teyka SWE' },
  { year: '2026', event: 'NVIDIA DLI Certification · FinTech Center · B.S. Computational Data Science (Dec)' },
]

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 mt-12 font-sans text-xl font-bold text-primary">{children}</h3>
}

export default function About() {
  return (
    <section id="about" className="wrap max-w-[760px] py-16">
      <h2 className="section-title mb-8">About Me</h2>

      <div className="space-y-4 font-mono text-[14px] leading-loose text-muted-foreground [&_strong]:font-bold [&_strong]:text-foreground">
        <p>
          My name is <strong>Chretien Banza</strong>. I was born in February 2002 in Kinshasa, Democratic Republic of the Congo.
        </p>
        <p>
          From a young age, I've been deeply curious about how things work — especially technology. That curiosity led me to a
          technical high school focused on electronic information systems, where I worked on circuits, robotics, and embedded
          systems.
        </p>
        <p>That's where I discovered programming. I wrote my first lines of code in Python:</p>
        <code className="block w-fit rounded-none border bg-card px-4 py-2 text-primary">print("Hello, world")</code>
        <p>
          It looked small. But it changed everything. Since then, I've been passionate about building systems, solving real
          problems, and using technology to create impact.
        </p>
      </div>

      <SubHeading>What I Build</SubHeading>
      <p className="mb-3 font-mono text-sm text-muted-foreground">I'm interested in:</p>
      <ul className="space-y-1.5">
        {interests.map((i) => (
          <li key={i} className="font-mono text-[13px] leading-relaxed text-muted-foreground before:mr-2 before:text-primary before:content-['—']">
            {i}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-[13px] leading-relaxed text-muted-foreground">
        I don't just write code — I think about architecture, scalability, and how products evolve over time.
      </p>
      <p className="mt-4 font-mono text-[13px] leading-relaxed text-muted-foreground">
        I also write articles on{' '}
        <a href="https://chretienbanza.substack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
          Substack
        </a>
        .
      </p>

      <SubHeading>Beyond Technology</SubHeading>
      <p className="mb-3 font-mono text-sm text-muted-foreground">I'm also a musician and creative. I play:</p>
      <div className="flex flex-wrap gap-1.5">
        {instruments.map((i) => (
          <Badge key={i} variant="outline" className="rounded-none border-white/15 font-mono text-[11px] font-normal text-muted-foreground">
            {i}
          </Badge>
        ))}
      </div>
      <p className="mt-4 font-mono text-[13px] leading-relaxed text-muted-foreground">
        Music has taught me creativity, timing, discipline, and collaboration — skills that translate directly into engineering
        and leadership. I also played soccer in high school, which shaped my resilience, teamwork, and competitive mindset.
      </p>

      <SubHeading>A Global Perspective</SubHeading>
      <p className="mb-3 font-mono text-sm text-muted-foreground">I am a multilingual speaker, fluent in:</p>
      <div className="flex flex-wrap gap-1.5">
        {languages.map((l) => (
          <Badge key={l} variant="outline" className="rounded-none border-[#58a6ff]/30 font-mono text-[11px] font-normal text-[#58a6ff]">
            {l}
          </Badge>
        ))}
      </div>
      <p className="mt-4 font-mono text-[13px] leading-relaxed text-muted-foreground">
        Growing up in Central Africa and navigating international environments has given me a global perspective. I'm
        comfortable operating across cultures, languages, and disciplines — whether in business, technology, or leadership.
      </p>

      <SubHeading>Core Values</SubHeading>
      <div className="flex flex-wrap gap-1.5">
        {values.map((v) => (
          <Badge key={v} variant="outline" className="rounded-none border-primary/30 font-mono text-[11px] font-normal text-primary">
            {v}
          </Badge>
        ))}
      </div>

      <SubHeading>Timeline</SubHeading>
      <ul>
        {timeline.map((t, i) => (
          <li key={t.year}>
            <div className="flex gap-4 py-3">
              <span className="w-14 shrink-0 font-mono text-sm font-bold text-primary">{t.year}</span>
              <span className="font-mono text-[13px] leading-relaxed text-muted-foreground">{t.event}</span>
            </div>
            {i < timeline.length - 1 && <Separator />}
          </li>
        ))}
      </ul>

      <SubHeading>Who I Am</SubHeading>
      <p className="font-sans text-lg font-bold text-foreground">I'm a builder. A technologist. A musician. A global thinker.</p>
      <p className="mt-3 font-mono text-[13px] leading-relaxed text-muted-foreground">
        I believe in faith, discipline, continuous growth, and building things that matter. This is just the beginning.
      </p>
    </section>
  )
}
