import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"
import { clamp, Scene } from "../components"
import { theme } from "../theme"

const lines = [
  ["Sifarişlər", "mesajlarda"],
  ["Borclar", "dəftərdə"],
  ["Xatırlatmalar", "yaddaşda"],
]

export function Problem() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const finalIn = spring({ frame, fps, delay: 46, config: { damping: 200 } })

  return (
    <Scene>
      <AbsoluteFill style={{ justifyContent: "center", padding: "0 96px", gap: 44 }}>
        <p style={{ margin: 0, fontSize: 38, fontWeight: 600, color: theme.warm, letterSpacing: "0.04em" }}>
          Bu gün necədir?
        </p>
        {lines.map(([subject, place], i) => {
          const enter = spring({ frame, fps, delay: 4 + i * 7, config: { damping: 20, stiffness: 200 } })
          const strike = interpolate(frame, [30 + i * 5, 40 + i * 5], [0, 1], clamp)
          return (
            <div
              key={subject}
              style={{
                position: "relative",
                alignSelf: "flex-start",
                opacity: enter,
                transform: `translateX(${(1 - enter) * -80}px)`,
                fontSize: 74,
                whiteSpace: "nowrap",
                fontWeight: 750,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              {subject} <span style={{ color: theme.ink2, fontWeight: 500 }}>— {place}</span>
              <span
                style={{
                  position: "absolute",
                  left: -8,
                  right: -8,
                  top: "54%",
                  height: 8,
                  borderRadius: 4,
                  background: theme.warm,
                  transform: `scaleX(${strike})`,
                  transformOrigin: "left",
                }}
              />
            </div>
          )
        })}
        <p
          style={{
            margin: "36px 0 0",
            fontSize: 72,
            fontWeight: 800,
            color: theme.accent,
            letterSpacing: "-0.03em",
            opacity: finalIn,
            transform: `translateY(${(1 - finalIn) * 40}px)`,
          }}
        >
          Hamısı bir sistemdə.
        </p>
      </AbsoluteFill>
    </Scene>
  )
}
