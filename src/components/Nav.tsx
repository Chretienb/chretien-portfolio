import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, FileText } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Sheet, SheetContent, SheetTitle } from './ui/sheet'
import { cn } from '../lib/utils'

const RESUME_PATH = '/Chretien_Banza_Resume.pdf'
const sectionIds = ['projects', 'experience', 'skills', 'certifications', 'contact']

const links = [
  { href: '/#projects', id: 'projects', label: 'Projects' },
  { href: '/#experience', id: 'experience', label: 'Experience' },
  { href: '/#skills', id: 'skills', label: 'Skills' },
  { href: '/#certifications', id: 'certifications', label: 'Certs' },
  { href: '/#contact', id: 'contact', label: 'Contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sectionIds)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const isActive = (id: string) => isHome && active === id

  return (
    <nav className="mx-auto flex h-[60px] max-w-[1100px] items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
      <Link
        to="/"
        className="font-mono text-sm font-medium tracking-tight text-primary hover:opacity-80"
        aria-label="Chretien Banza - Home"
        onClick={() => setOpen(false)}
      >
        ▶ chretien_banza.ds
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-6 lg:flex" role="list">
        <Link
          to="/about"
          className={cn(
            'font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-primary',
            location.pathname === '/about' && 'text-primary'
          )}
        >
          About
        </Link>
        {links.map((l) => (
          <a
            key={l.id}
            href={l.href}
            className={cn(
              'font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-primary',
              isActive(l.id) && 'text-primary'
            )}
          >
            {l.label}
          </a>
        ))}
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 border border-primary/40 px-3 py-1.5 font-mono text-xs tracking-wide text-primary transition-colors hover:bg-primary/10"
        >
          <FileText className="h-3.5 w-3.5" />
          Resume
        </a>
      </div>

      {/* Hamburger */}
      <button
        className="z-[110] p-2 text-muted-foreground hover:text-foreground lg:hidden"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="border-l bg-card p-0 pt-16">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <div className="flex flex-col">
            <Link
              to="/about"
              className="border-b px-7 py-4 font-mono text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            {links.map((l) => (
              <a
                key={l.id}
                href={l.href}
                className="border-b px-7 py-4 font-mono text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-b px-7 py-4 font-mono text-sm tracking-wide text-primary transition-colors hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default Nav
