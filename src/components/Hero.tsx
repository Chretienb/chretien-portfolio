import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <img src="/hero-ai.png" alt="" className="hero-image" />
      <div className="hero-content">
        <p className="hero-label mono">Hello, I'm</p>
        <h1 className="hero-name">Chretien Banza</h1>
        <p className="hero-role">Computational Data Science · Co‑Founder & CTO</p>
        <p className="hero-bio">
          B.S. in Computational Data Science at Utah Valley University (Dec 2026).
          Building fintech platforms and data‑driven systems. Passionate about AI, startups, and product design.
        </p>
        <div className="hero-cta">
          <Link to="/about">About me</Link>
          <a href="/#projects">View projects</a>
          <a href="/#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
