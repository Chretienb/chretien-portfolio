import { Link } from 'react-router-dom'
import About from '../components/About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AboutPage() {
  useScrollReveal()
  return (
    <div>
      <div className="wrap pt-8">
        <Link to="/" className="font-mono text-sm text-muted-foreground hover:text-primary">
          ← Back
        </Link>
      </div>
      <About />
    </div>
  )
}

export default AboutPage
