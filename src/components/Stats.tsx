import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 3, suffix: '', label: 'Startups Built' },
  { value: 5, suffix: '+', label: 'Languages' },
  { value: 6, suffix: '+', label: 'Roles & Programs' },
  { value: 2, suffix: '', label: 'Certifications' },
]

function useCountUp(target: number, duration = 1200, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

function StatItem({ value, suffix, label, active }: typeof stats[0] & { active: boolean }) {
  const count = useCountUp(value, 1000, active)
  return (
    <div className="stat-item">
      <span className="stat-value mono">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="stats-row" ref={ref} data-reveal>
      {stats.map((s) => (
        <StatItem key={s.label} {...s} active={active} />
      ))}
    </div>
  )
}
