import { Download } from 'lucide-react'
import { Card } from './ui/card'
import { cn } from '../lib/utils'

const RESUME_PATH = '/Chretien_Banza_Resume.pdf'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-tag" data-reveal>// 04 — Get In Touch</div>
        <h2 className="section-title" data-reveal>
          Let's Build Something<span className="cursor-blink" />
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" data-reveal>
          <a href="mailto:chretienbanza1@gmail.com" className="block">
            <Card className="rounded-none p-6 transition-colors hover:border-primary/50">
              <div className="mb-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">Email</div>
              <div className="mb-1 font-sans text-lg font-bold">chretienbanza1@gmail.com</div>
              <div className="font-mono text-xs text-muted-foreground/70">Respond within 24 hours</div>
            </Card>
          </a>

          <a href="https://github.com/Chretienb" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="rounded-none p-6 transition-colors hover:border-primary/50">
              <div className="mb-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">GitHub</div>
              <div className="mb-1 font-sans text-lg font-bold">github.com/Chretienb</div>
              <div className="font-mono text-xs text-muted-foreground/70">Projects & source code</div>
            </Card>
          </a>

          <a href="https://linkedin.com/in/chretien-banza-042831242" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="rounded-none p-6 transition-colors hover:border-primary/50">
              <div className="mb-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">LinkedIn</div>
              <div className="mb-1 font-sans text-lg font-bold">/in/chretien-banza</div>
              <div className="font-mono text-xs text-muted-foreground/70">Open to collaborations</div>
            </Card>
          </a>

          <Card
            role="link"
            tabIndex={0}
            onClick={() => window.open(RESUME_PATH, '_blank', 'noopener,noreferrer')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.open(RESUME_PATH, '_blank', 'noopener,noreferrer')
              }
            }}
            className={cn(
              'cursor-pointer rounded-none border-primary/40 bg-primary/[0.06] p-6 transition-colors hover:border-primary'
            )}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Resume</span>
              <a
                href={RESUME_PATH}
                download="Chretien_Banza_Resume.pdf"
                onClick={(e) => e.stopPropagation()}
                aria-label="Download resume PDF"
                className="-m-2.5 flex items-center gap-1 p-2.5 font-mono text-[11px] text-muted-foreground/70 transition-colors hover:text-primary"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
            </div>
            <div className="mb-1 font-sans text-lg font-bold text-primary">View Resume (PDF) →</div>
            <div className="mb-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Open to Opportunities
            </div>
            <div className="font-mono text-xs text-muted-foreground/70">Orem, UT · English &amp; French</div>
          </Card>
        </div>

        <p className="mt-8 font-mono text-[13px] text-muted-foreground">
          Also on{' '}
          <a href="https://chretienbanza.substack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
            Substack
          </a>{' '}
          — I write about fintech, AI, and building products.
        </p>
      </div>
    </section>
  )
}
