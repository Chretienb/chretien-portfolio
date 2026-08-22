import { Link } from 'react-router-dom'
import { Separator } from './ui/separator'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="wrap py-10" role="contentinfo">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <a href="/#projects" className="hover:text-primary">Projects</a>
          <a href="/#experience" className="hover:text-primary">Experience</a>
          <a href="/#contact" className="hover:text-primary">Contact</a>
          <a href="https://chretienbanza.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            Substack
          </a>
        </div>
        <span className="font-mono text-xs text-muted-foreground/60">© {year} Chretien Banza · cb_dev ▸</span>
      </div>
    </footer>
  )
}
