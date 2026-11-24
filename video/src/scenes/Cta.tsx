import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion"
import { BrandLine, LogoMark, Scene } from "../components"
import { theme } from "../theme"

export function Cta() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const q = spring({ frame, fps, delay: 2, config: { damping: 200 } })
  const title = spring({ frame, fps, delay: 8, config: { damping: 14, stiffness: 120 } })
  const brand = spring({ frame, fps, delay: 20, config: { damping: 200 } })

  return (
    <Scene fadeOut={false}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 80px" }}>
        <p
          style={{
            margin: 0,
            fontSize: 60,
            fontWeight: 600,
            color: theme.ink2,
            opacity: q,
            transform: `translateY(${(1 - q) * 30}px)`,
          }}
        >
          Sizin növbəti addımınız hansıdır?
        </p>
        <div
          style={{
            marginTop: 72,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 40,
            opacity: title,
            transform: `scale(${0.9 + 0.1 * title})`,
          }}
        >
          <LogoMark size={150} />
          <h2 style={{ margin: 0, fontSize: 150, fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1 }}>
            Növbəti
            <br />
            Addım
          </h2>
        </div>
        <div
          style={{
            marginTop: 110,
            padding: "26px 44px",
            borderRadius: 999,
            border: `2px solid ${theme.line}`,
            background: "rgba(23,27,30,0.8)",
            opacity: brand,
            transform: `translateY(${(1 - brand) * 30}px)`,
          }}
        >
          <BrandLine size={40} />
        </div>
      </AbsoluteFill>
    </Scene>
  )
}
