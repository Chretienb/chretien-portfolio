import { Link } from 'react-router-dom'
import NeuralCanvas from './NeuralCanvas'

export default function Hero() {
  return (
    <section className="hero">
      <NeuralCanvas />
      <div className="wrap">
        <div className="hero-inner">
          <div className="hero-content" data-reveal>
            <p className="hero-tag">B.S. Computational Data Science · UVU Dec 2026</p>
            <h1 className="hero-name">
              <span className="name-dim">Hi, I'm</span><br />
              <span className="name-green">Chretien Banza</span>
            </h1>
            <p className="hero-roles">
              Fintech Engineer · Co-Founder &amp; CTO at Drawfi · LLM / Agentic AI Builder · Computational Data Scientist
            </p>
            <p className="hero-bio">
              Building <span>production fintech systems</span> and <span>LLM-powered agents</span> from 0→1.
              Rust · TypeScript · Python. Founder. Engineer. Emerging markets believer.
            </p>
            <div className="hero-cta">
              <a href="/#projects" className="btn-primary">View Projects</a>
              <Link to="/about" className="btn-secondary">About Me</Link>
              <a href="/#contact" className="btn-ghost">Contact</a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-block">
              <div className="stat-num">3</div>
              <div className="stat-label">Startups Built</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">0→1</div>
              <div className="stat-label">Fintech Platform</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">2</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">5+</div>
              <div className="stat-label">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
