import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="/#projects">Projects</a>
        <a href="/#experience">Experience</a>
        <a href="/#contact">Contact</a>
        <a href="https://chretienbanza.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
      </div>
      <span className="footer-copy">© {year} Chretien Banza · cb_dev ▸</span>
    </footer>
  )
}
