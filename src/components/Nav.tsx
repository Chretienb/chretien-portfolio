import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollSpy } from '../hooks/useScrollSpy'

const sectionIds = ['projects', 'experience', 'skills', 'certifications', 'contact']

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(sectionIds)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (id: string) => isHome && active === id

  return (
    <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`} aria-label="Main navigation">
      <Link to="/" className="nav-logo" aria-label="Chretien Banza - Home" onClick={() => setOpen(false)}>▶ chretien_banza.ds</Link>

      {/* Desktop links */}
      <div className="nav-links" role="list">
        <Link to="/about" className={`nav-link${location.pathname === '/about' ? ' nav-link-active' : ''}`}>About</Link>
        <a href="/#projects" className={`nav-link${isActive('projects') ? ' nav-link-active' : ''}`}>Projects</a>
        <a href="/#experience" className={`nav-link${isActive('experience') ? ' nav-link-active' : ''}`}>Experience</a>
        <a href="/#skills" className={`nav-link${isActive('skills') ? ' nav-link-active' : ''}`}>Skills</a>
        <a href="/#certifications" className={`nav-link${isActive('certifications') ? ' nav-link-active' : ''}`}>Certs</a>
        <a href="/#contact" className={`nav-link${isActive('contact') ? ' nav-link-active' : ''}`}>Contact</a>
      </div>

      {/* Hamburger */}
      <button
        className={`nav-hamburger${open ? ' nav-hamburger-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="nav-drawer-backdrop" onClick={() => setOpen(false)} />
          <div className="nav-drawer-panel">
            <Link to="/about" className="nav-drawer-link" onClick={() => setOpen(false)}>About</Link>
            <a href="/#projects" className="nav-drawer-link" onClick={() => setOpen(false)}>Projects</a>
            <a href="/#experience" className="nav-drawer-link" onClick={() => setOpen(false)}>Experience</a>
            <a href="/#skills" className="nav-drawer-link" onClick={() => setOpen(false)}>Skills</a>
            <a href="/#certifications" className="nav-drawer-link" onClick={() => setOpen(false)}>Certifications</a>
            <a href="/#contact" className="nav-drawer-link" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
