import { useRef } from "react"
import { m, useReducedMotion, useScroll, useTransform } from "motion/react"
import { steps } from "../data/roadmap"
import { ease, motionTokens } from "../lib/motion-tokens"
import { motionConfig } from "../lib/motion-config"

const nodes = steps.map((step, i) => ({
  step,
  x: i % 2 === 0 ? 72 : 328,
  y: 44 + i * 76,
}))

const routePath = nodes
  .map((n, i) => {
    if (i === 0) return `M ${n.x} ${n.y}`
    const prev = nodes[i - 1]
    const midY = (prev.y + n.y) / 2
    return `C ${prev.x} ${midY}, ${n.x} ${midY}, ${n.x} ${n.y}`
  })
  .join(" ")

function RouteGraphic() {
  const reduce = useReducedMotion()
  const instant = reduce || !motionConfig.shouldAnimate({ essential: true })

  return (
    <svg className="route" viewBox="0 0 400 468" aria-hidden="true" focusable="false">
      <path d={routePath} className="route__track" />
      <m.path
        d={routePath}
        className="route__line"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={
          instant
            ? { duration: 0 }
            : { duration: motionTokens.duration.crawl * 1.6, ease: ease("smooth"), delay: 0.2 }
        }
      />
      {nodes.map(({ step, x, y }, i) => {
        const left = i % 2 === 0
        return (
          <g key={step.id} className="route__node">
            <circle cx={x} cy={y} r="17" />
            <text x={x} y={y} className="route__num" dominantBaseline="central" textAnchor="middle">
              {i + 1}
            </text>
            <text
              x={left ? x + 30 : x - 30}
              y={y}
              className="route__label"
              dominantBaseline="central"
              textAnchor={left ? "start" : "end"}
            >
              {step.short}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const paperY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <m.div className="hero__paper" style={{ y: paperY }} aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Kiçik və orta biznes üçün</p>
          <h1 id="hero-title">Dəftərdən sistemə — altı addımda</h1>
          <p className="lead">
            Sifarişlər mesajlarda, borclar dəftərdə, xatırlatmalar yaddaşdadırsa, bu yol sizin üçündür.
            Sahənizi seçin: hər addım sizin işinizin dilində izah olunsun.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#sahe">
              Sahəni seç
            </a>
            <a className="btn btn--ghost" href="#yol">
              Addımlara bax
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="route-card">
            <p className="route-card__title">Növbəti Addım marşrutu</p>
            <RouteGraphic />
          </div>
        </div>
      </div>
    </section>
  )
}
