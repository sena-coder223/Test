import { useRef } from "react"
import { AnimatePresence, m, useReducedMotion, useScroll, useTransform } from "motion/react"
import { businesses, steps, type BusinessId, type Step } from "../data/roadmap"
import { useProgress } from "../hooks/use-progress"
import { useSafeMotion } from "../hooks/use-safe-motion"
import { ease, motionTokens } from "../lib/motion-tokens"

const RADIUS = 44
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function ProgressRing({ value, total }: { value: number; total: number }) {
  const reduce = useReducedMotion()
  const offset = CIRCUMFERENCE - (value / total) * CIRCUMFERENCE

  return (
    <div className="ring">
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <circle className="ring__track" cx="50" cy="50" r={RADIUS} />
        <m.circle
          className="ring__value"
          cx="50"
          cy="50"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          initial={false}
          animate={{ strokeDashoffset: offset }}
          transition={
            reduce ? { duration: 0 } : { duration: motionTokens.duration.normal, ease: ease("smooth") }
          }
        />
      </svg>
      <p className="ring__text">
        <strong>{value}</strong>
        <span>/ {total}</span>
      </p>
    </div>
  )
}

function StepDetail({ text, business, index }: { text: string; business: BusinessId; index: number }) {
  const safe = useSafeMotion(motionTokens.distance.sm)
  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.p
        key={business}
        className="step__detail"
        initial={safe.initial}
        animate={safe.animate}
        exit={safe.exit}
        transition={{ ...safe.transition, delay: safe.reduce ? 0 : index * motionTokens.stagger }}
      >
        {text}
      </m.p>
    </AnimatePresence>
  )
}

type StepCardProps = {
  step: Step
  index: number
  business: BusinessId
  done: boolean
  isNext: boolean
  onToggle: () => void
}

function StepCard({ step, index, business, done, isNext, onToggle }: StepCardProps) {
  const checkboxId = `hazir-${step.id}`
  return (
    <li id={`addim-${step.id}`} className={`step${done ? " is-done" : ""}${isNext ? " is-next" : ""}`}>
      <span className="step__num" aria-hidden="true">
        {index + 1}
      </span>
      <article className="step__card" aria-labelledby={`${checkboxId}-title`}>
        <header className="step__head">
          <h3 id={`${checkboxId}-title`}>
            <span className="visually-hidden">Addım {index + 1}: </span>
            {step.title}
          </h3>
          {isNext && <span className="badge">Növbəti addım</span>}
        </header>
        <p className="step__goal">{step.goal}</p>
        <StepDetail text={step.details[business]} business={business} index={index} />
        <p className="step__metric">
          <span>Nəyi ölçmək:</span> {step.metric}
        </p>
        <label className="check" htmlFor={checkboxId}>
          <input id={checkboxId} type="checkbox" checked={done} onChange={onToggle} />
          <span>Bizdə artıq hər gün işləyir</span>
        </label>
      </article>
    </li>
  )
}

export function Roadmap({ business }: { business: BusinessId }) {
  const { done, toggle } = useProgress()
  const listRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] })
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1])

  const label = businesses.find((b) => b.id === business)?.label ?? ""
  const doneCount = steps.filter((s) => done.has(s.id)).length
  const next = steps.find((s) => !done.has(s.id))

  return (
    <section id="yol" className="section section--tint" aria-labelledby="yol-title">
      <div className="container roadmap">
        <aside className="roadmap__aside" aria-labelledby="status-title">
          <div className="status">
            <h2 id="yol-title" className="section__title">
              Yol xəritəsi: <span className="accent">{label}</span>
            </h2>
            <div className="status__row">
              <ProgressRing value={doneCount} total={steps.length} />
              <div aria-live="polite">
                <p id="status-title" className="status__kicker">
                  {next ? "Növbəti addımınız" : "Altı addımın hamısı işləyir"}
                </p>
                <p className="status__title">{next ? next.title : "Hesabata hər həftə eyni gün baxın"}</p>
              </div>
            </div>
            {next && (
              <a className="btn btn--primary btn--block" href={`#addim-${next.id}`}>
                Addıma keç
              </a>
            )}
            <p className="status__hint">
              Artıq işləyən addımları qeyd edin. Qeydlər yalnız bu brauzerdə saxlanır.
            </p>
          </div>
        </aside>

        <div ref={listRef} className="steps-wrap">
          <m.span className="steps__fill" aria-hidden="true" style={{ scaleY: fill }} />
          <ol className="steps">
            {steps.map((step, i) => (
              <StepCard
                key={step.id}
                step={step}
                index={i}
                business={business}
                done={done.has(step.id)}
                isNext={next?.id === step.id}
                onToggle={() => toggle(step.id)}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
