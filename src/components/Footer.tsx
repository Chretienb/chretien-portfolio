import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>
        <p className="footer-copy">© {year} Chretien Banza. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
