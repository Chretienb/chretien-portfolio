import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <Link to="/" className="nav-logo mono" aria-label="Chretien Banza - Home">cb</Link>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <a href="/#projects">Projects</a>
        <a href="/#experience">Experience</a>
        <a href="/#skills">Skills</a>
        <a href="/#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Nav
