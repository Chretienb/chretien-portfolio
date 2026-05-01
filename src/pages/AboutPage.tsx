import { Link } from 'react-router-dom'
import About from '../components/About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AboutPage() {
  useScrollReveal()
  return (
    <div className="about-page">
      <div className="about-page-header">
        <Link to="/" className="about-back mono">← Back</Link>
      </div>
      <About />
    </div>
  )
}

export default AboutPage
