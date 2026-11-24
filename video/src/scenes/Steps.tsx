import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"
import { clamp, Scene } from "../components"
import { steps } from "../data"
import { theme } from "../theme"

const LIST_TOP = 520
const ROW = 178
const CIRCLE = 76
const LEFT = 88
const START = 14
const PER_STEP = 31

export function Steps() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const tilt = interpolate(frame, [0, 22], [34, 0], clamp)
  const rise = interpolate(frame, [0, 22], [120, 0], clamp)
  const progress = interpolate(frame, [START, START + PER_STEP * steps.length], [0, steps.length], clamp)
  const active = Math.min(steps.length - 1, Math.floor(progress))
  const lineFill = interpolate(progress, [0, steps.length - 1], [0, 1], clamp)
  const lineHeight = (steps.length - 1) * ROW

  return (
    <Scene>
      <AbsoluteFill style={{ padding: "250px 88px 0" }}>
        <p style={{ margin: 0, fontSize: 36, fontWeight: 700, color: theme.accent, letterSpacing: "0.04em" }}>
          6 addım · hər sahə üçün
        </p>
        <h2 style={{ margin: "14px 0 0", fontSize: 80, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05 }}>
          Dəftərdən sistemə
        </h2>
      </AbsoluteFill>

      <AbsoluteFill style={{ perspective: 1600 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `translateY(${rise}px) rotateX(${tilt}deg)`,
            transformOrigin: "50% 30%",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: LEFT + CIRCLE / 2 - 3,
              top: LIST_TOP + CIRCLE / 2,
              width: 6,
              height: lineHeight,
              borderRadius: 3,
              background: theme.line,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: LEFT + CIRCLE / 2 - 3,
              top: LIST_TOP + CIRCLE / 2,
              width: 6,
              height: lineHeight,
              borderRadius: 3,
              background: theme.accent,
              transform: `scaleY(${lineFill})`,
              transformOrigin: "top",
            }}
          />

          {steps.map((step, i) => {
            const isActive = i === active && progress < steps.length
            const isDone = progress >= i + 1
            const appear = spring({ frame, fps, delay: START + i * PER_STEP, config: { damping: 18, stiffness: 160 } })
            const titleOpacity = isActive || isDone ? 1 : 0.38
            const exampleOpacity = isActive ? appear : isDone ? 0.55 : 0
            const panel = isActive ? appear : 0

            return (
              <div key={step.title} style={{ position: "absolute", left: 0, right: 0, top: LIST_TOP + i * ROW, height: ROW }}>
                <div
                  style={{
                    position: "absolute",
                    left: LEFT - 24,
                    right: 64,
                    top: -20,
                    bottom: 6,
                    borderRadius: 32,
                    background: theme.surface,
                    border: `2px solid ${theme.accent}`,
                    boxShadow: "0 30px 60px -20px rgba(79,209,181,0.35)",
                    opacity: panel,
                    transform: `scale(${0.94 + 0.06 * panel})`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: LEFT,
                    top: 0,
                    width: CIRCLE,
                    height: CIRCLE,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    border: `4px solid ${isActive || isDone ? theme.accent : theme.line}`,
                    background: isDone ? theme.accent : theme.bg2,
                    color: isDone ? theme.accentInk : isActive ? theme.accent : theme.ink2,
                    fontSize: 34,
                    fontWeight: 800,
                  }}
                >
                  {isDone ? "✓" : i + 1}
                </div>
                <div style={{ position: "absolute", left: LEFT + CIRCLE + 36, right: 96, top: 4 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 54,
                      fontWeight: 750,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.1,
                      opacity: titleOpacity,
                      transform: `translateX(${isActive ? (1 - appear) * 30 : 0}px)`,
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      margin: "12px 0 0",
                      fontSize: 32,
                      lineHeight: 1.3,
                      whiteSpace: "nowrap",
                      color: theme.ink2,
                      opacity: exampleOpacity,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        marginRight: 12,
                        padding: "2px 14px",
                        borderRadius: 999,
                        background: theme.accentSoft,
                        color: theme.accent,
                        fontWeight: 700,
                        fontSize: 27,
                      }}
                    >
                      {step.sector}
                    </span>
                    {step.example}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </AbsoluteFill>
    </Scene>
  )
}
