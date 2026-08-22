import { Separator } from './ui/separator'

const experiences = [
  {
    date: 'Dec 2023 — Now',
    role: 'Software Engineer — Founding Team',
    company: '▸ DrawFi',
    bullets: [
      'Architected and shipped a production fintech platform from 0→1 using Rust, TypeScript, and Supabase',
      'Engineered secure REST APIs with JWT-based auth and role-based access control (RBAC)',
      'Built LLM-powered document intelligence pipeline reducing manual financial review time significantly',
      'Designed async processing architecture improving system throughput and scalability',
    ],
  },
  {
    date: '2025 — Now',
    role: 'Software Engineer',
    company: '▸ Teyka',
    bullets: [
      'Engineered a payment gateway connecting mobile wallets to global commerce across multiple currencies',
      'Built high-reliability backend for FX conversion, transaction routing, and cross-border payment orchestration',
      'Automated operational workflows with n8n, reducing manual intervention in payment processing',
    ],
  },
  {
    date: '2025 — Now',
    role: 'Software Engineer',
    company: '▸ PML (PayeMonLoyer)',
    bullets: [
      'Developed backend infrastructure for a financial identity and credit-scoring platform',
      'Implemented machine learning-informed scoring models and production-grade API layer',
    ],
  },
  {
    date: '2026 — Now',
    role: 'Program Assistant',
    company: '▸ FinTech Center, UVU',
    bullets: [
      'Collaborated on AI and fintech research initiatives with industry and academic partners',
      'Managed event logistics and maintained analytics dashboards tracking program KPIs',
    ],
  },
  {
    date: '2025 — Now',
    role: 'Associate · Investment Analyst',
    company: '▸ Wolverine Fund, UVU',
    bullets: [
      'Screened and evaluated early-stage startups across AI, SaaS, and fintech for investment potential',
      'Produced market research reports and due diligence memos to support fund decisions',
    ],
  },
  {
    date: '2022 — 2023',
    role: 'Project Manager',
    company: '▸ E2i, UVU',
    bullets: [
      'Directed cross-functional engineering teams to deliver software projects on time and within scope',
      'Owned stakeholder communication, sprint planning, and risk management across multiple workstreams',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-tag" data-reveal>// 03 — Experience</div>
        <h2 className="section-title" data-reveal>
          Where I've Worked<span className="cursor-blink" />
        </h2>

        <div data-reveal>
          {experiences.map((e, i) => (
            <div key={e.company}>
              <div className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
                <div className="font-mono text-xs text-muted-foreground">{e.date}</div>
                <div>
                  <div className="font-sans text-lg font-bold">{e.role}</div>
                  <div className="mb-3 font-mono text-sm text-primary">{e.company}</div>
                  <ul className="space-y-1.5">
                    {e.bullets.map((b) => (
                      <li key={b} className="font-mono text-[13px] leading-relaxed text-muted-foreground before:mr-2 before:text-primary before:content-['—']">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < experiences.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
