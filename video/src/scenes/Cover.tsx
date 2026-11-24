import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion"
import { BrandLine, clamp, LogoMark, Scene } from "../components"
import { theme } from "../theme"

const DOTS = 6
const TRACK_X = [140, 940] as const

export function Cover() {
  const frame = useCurrentFrame()
  const push = interpolate(frame, [0, 96], [1, 1.045], clamp)
  const tilt = interpolate(frame, [0, 96], [0, 7], clamp)
  const drawn = interpolate(frame, [0, 78], [0.34, 1], clamp)
  const lineEnd = TRACK_X[0] + (TRACK_X[1] - TRACK_X[0]) * drawn

  return (
    <Scene fadeIn={false}>
      <AbsoluteFill style={{ alignItems: "center", paddingTop: 250 }}>
        <BrandLine size={36} />
      </AbsoluteFill>

      <AbsoluteFill style={{ perspective: 1800, alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `scale(${push}) rotateX(${tilt}deg)`,
            marginTop: -60,
          }}
        >
          <LogoMark size={176} />
          <h1
            style={{
              margin: "56px 0 0",
              fontSize: 196,
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              textAlign: "center",
            }}
          >
            Növbəti
            <br />
            Addım
          </h1>
          <p
            style={{
              margin: "48px 0 0",
              fontSize: 52,
              lineHeight: 1.3,
              color: theme.ink2,
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Biznesin rəqəmsallaşdırılması
            <br />
            <span style={{ color: theme.accent, fontWeight: 700 }}>altı addımda</span>
          </p>
        </div>
      </AbsoluteFill>

      <svg width={1080} height={120} style={{ position: "absolute", left: 0, top: 1480 }}>
        <line x1={TRACK_X[0]} x2={TRACK_X[1]} y1={60} y2={60} stroke={theme.line} strokeWidth={4} strokeDasharray="6 12" />
        <line x1={TRACK_X[0]} x2={lineEnd} y1={60} y2={60} stroke={theme.accent} strokeWidth={6} strokeLinecap="round" />
        {Array.from({ length: DOTS }, (_, i) => {
          const x = TRACK_X[0] + ((TRACK_X[1] - TRACK_X[0]) / (DOTS - 1)) * i
          const on = x <= lineEnd + 1
          return (
            <g key={i}>
              <circle cx={x} cy={60} r={26} fill={on ? theme.accent : theme.surface} stroke={theme.accent} strokeWidth={4} />
              <text
                x={x}
                y={61}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={26}
                fontWeight={700}
                fontFamily={theme.font}
                fill={on ? theme.accentInk : theme.accent}
              >
                {i + 1}
              </text>
            </g>
          )
        })}
      </svg>
    </Scene>
  )
}
