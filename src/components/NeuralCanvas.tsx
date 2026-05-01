import { useEffect, useRef } from 'react'

// ── floating data/code tokens ──────────────────────────────────────────────
const TOKENS = [
  'import numpy as np', 'model.fit(X, y)', 'torch.nn.Linear',
  'def predict(x):', 'sklearn.pipeline', 'pd.DataFrame()',
  'loss: 0.0231', 'accuracy: 94.7%', 'epoch 128/256',
  'RAG pipeline', 'LLM agent', 'transformer', 'embeddings',
  'attention(Q,K,V)', 'gradient descent', 'backprop',
  'supabase.select()', 'JWT auth', 'async fn process()',
  'SELECT * FROM', 'PostgreSQL', 'Rust · TypeScript',
  '[0.82, 0.14, 0.04]', '1.0e-4', 'shape=(512,768)',
  'retrieval_chain', 'vector_store', 'cosine_sim()',
  '0xA3F1', '11010110', '∑ wᵢxᵢ', 'σ(z)',
  'n8n workflow', 'API gateway', 'RBAC policy',
  'f1_score: 0.96', 'roc_auc: 0.98', 'val_loss ↓',
  'tokens: 4096', 'temperature=0.7', 'top_p=0.9',
]

interface FloatingText {
  text: string
  x: number
  y: number
  vy: number
  vx: number
  opacity: number
  targetOpacity: number
  fontSize: number
  color: 'cyan' | 'violet' | 'muted'
  life: number
  maxLife: number
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulse: number
  pulseSpeed: number
}

interface Packet {
  fromIdx: number
  toIdx: number
  t: number       // 0→1 progress along the edge
  speed: number
}

const AI_TOKENS = new Set([
  'RAG pipeline', 'LLM agent', 'transformer', 'embeddings',
  'attention(Q,K,V)', 'gradient descent', 'backprop',
  'retrieval_chain', 'vector_store', 'cosine_sim()',
  'f1_score: 0.96', 'roc_auc: 0.98', 'tokens: 4096',
  'temperature=0.7', 'top_p=0.9', '∑ wᵢxᵢ', 'σ(z)',
])

const NEUTRAL_TOKENS = new Set(['0xA3F1', '11010110', 'val_loss ↓'])

function pickColor(text: string): FloatingText['color'] {
  if (AI_TOKENS.has(text)) return 'violet'
  if (NEUTRAL_TOKENS.has(text)) return 'muted'
  return 'cyan'
}

function rgba(color: FloatingText['color'], opacity: number) {
  if (color === 'violet') return `rgba(188,140,255,${opacity})`
  if (color === 'muted')  return `rgba(125,133,144,${opacity})`
  return `rgba(0,255,136,${opacity})`
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = 0, H = 0
    let nodes: Node[] = []
    let floats: FloatingText[] = []
    let packets: Packet[] = []
    const NODE_COUNT = 45
    const MAX_DIST = 150
    const MAX_FLOATS = 22
    const MAX_PACKETS = 8

    const resize = () => {
      const parent = canvas.parentElement
      W = canvas.width  = parent?.offsetWidth  ?? window.innerWidth
      H = canvas.height = parent?.offsetHeight ?? window.innerHeight
    }

    const makeNode = (): Node => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.018 + Math.random() * 0.02,
    })

    const makeFloat = (): FloatingText => {
      const text = TOKENS[Math.floor(Math.random() * TOKENS.length)]
      const maxLife = 280 + Math.random() * 200
      return {
        text,
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -0.12 - Math.random() * 0.18,
        opacity: 0,
        targetOpacity: 0.12 + Math.random() * 0.14,
        fontSize: 10 + Math.random() * 4,
        color: pickColor(text),
        life: 0,
        maxLife,
      }
    }

    const makePacket = (): Packet | null => {
      // pick a random edge that's within MAX_DIST
      const candidates: [number, number][] = []
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
            candidates.push([i, j])
          }
        }
      }
      if (!candidates.length) return null
      const [a, b] = candidates[Math.floor(Math.random() * candidates.length)]
      return { fromIdx: a, toIdx: b, t: 0, speed: 0.008 + Math.random() * 0.012 }
    }

    const init = () => {
      nodes = Array.from({ length: NODE_COUNT }, makeNode)
      floats = Array.from({ length: MAX_FLOATS }, makeFloat)
      // stagger life so they don't all start together
      floats.forEach((f, i) => { f.life = (f.maxLife / MAX_FLOATS) * i })
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // ── 1. Floating code/data text ─────────────────────────────────────
      ctx.save()
      floats.forEach((f) => {
        f.life++
        const progress = f.life / f.maxLife
        // fade in first 15%, full in middle, fade out last 20%
        if (progress < 0.15) f.opacity = (progress / 0.15) * f.targetOpacity
        else if (progress > 0.8) f.opacity = ((1 - progress) / 0.2) * f.targetOpacity
        else f.opacity = f.targetOpacity

        ctx.font = `${f.fontSize}px 'JetBrains Mono', monospace`
        ctx.fillStyle = rgba(f.color, f.opacity)
        ctx.fillText(f.text, f.x, f.y)

        f.x += f.vx
        f.y += f.vy

        if (f.life >= f.maxLife) Object.assign(f, makeFloat())
      })
      ctx.restore()

      // ── 2. Connection lines ────────────────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.15
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,255,136,${alpha})`
            ctx.lineWidth = 0.6
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // ── 3. Data packets traveling along edges ──────────────────────────
      packets = packets.filter((pk) => pk.t <= 1)
      while (packets.length < MAX_PACKETS) {
        const p = makePacket()
        if (p) packets.push(p)
        else break
      }
      packets.forEach((pk) => {
        pk.t += pk.speed
        const a = nodes[pk.fromIdx]
        const b = nodes[pk.toIdx]
        const px = a.x + (b.x - a.x) * pk.t
        const py = a.y + (b.y - a.y) * pk.t
        const alpha = Math.sin(pk.t * Math.PI) * 0.85
        ctx.beginPath()
        ctx.arc(px, py, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,136,${alpha})`
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(0,255,136,0.8)'
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // ── 4. Nodes with pulse ring ───────────────────────────────────────
      nodes.forEach((n) => {
        n.pulse += n.pulseSpeed
        const glow = (Math.sin(n.pulse) + 1) / 2   // 0→1

        // pulse ring
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius + 4 + glow * 6, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0,255,136,${0.06 + glow * 0.08})`
        ctx.lineWidth = 1
        ctx.stroke()

        // core dot
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,136,${0.4 + glow * 0.35})`
        ctx.shadowBlur = 6 + glow * 8
        ctx.shadowColor = 'rgba(0,255,136,0.6)'
        ctx.fill()
        ctx.shadowBlur = 0

        // move + bounce
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />
}
