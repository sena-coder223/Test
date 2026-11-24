import type { CSSProperties, ReactNode } from "react"
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion"
import { CROSSFADE } from "./timeline"
import { theme } from "./theme"

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const

export function Background() {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()
  const drift = interpolate(frame, [0, durationInFrames], [0, -180])
  const glowX = interpolate(frame, [0, durationInFrames], [78, 30])
  const glowY = interpolate(frame, [0, durationInFrames], [22, 70])

  return (
    <AbsoluteFill style={{ background: theme.bg, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(55% 35% at ${glowX}% ${glowY}%, rgba(79,209,181,0.20), transparent 70%)`,
        }}
      />
      <AbsoluteFill
        style={{
          top: -200,
          bottom: -200,
          transform: `translateY(${drift}px)`,
          backgroundImage:
            "linear-gradient(to right, transparent 95px, rgba(253,186,116,0.16) 95px 97px, transparent 97px), repeating-linear-gradient(to bottom, transparent 0 71px, rgba(238,236,230,0.05) 71px 72px)",
          maskImage: "linear-gradient(to bottom, transparent, #000 25%, #000 75%, transparent)",
        }}
      />
    </AbsoluteFill>
  )
}

export function LogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="9" fill={theme.accent} />
      <path
        d="M9 21.5 L14.5 16 L18 19.5 L23.5 11"
        fill="none"
        stroke={theme.accentInk}
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23.5" cy="11" r="2.2" fill={theme.accentInk} />
    </svg>
  )
}

export function BrandLine({ size = 34, style }: { size?: number; style?: CSSProperties }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size * 0.6, fontSize: size, ...style }}>
      <span style={{ fontWeight: 800, letterSpacing: "0.18em", color: theme.ink }}>SECURITY GROUP</span>
      <span style={{ width: 2, height: size * 1.1, background: theme.line }} />
      <span style={{ fontWeight: 600, color: theme.accent }}>aze-ai.az</span>
    </div>
  )
}

type SceneProps = {
  children: ReactNode
  fadeIn?: boolean
  fadeOut?: boolean
}

export function Scene({ children, fadeIn = true, fadeOut = true }: SceneProps) {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()
  const inOpacity = fadeIn ? interpolate(frame, [0, CROSSFADE], [0, 1], clamp) : 1
  const outOpacity = fadeOut
    ? interpolate(frame, [durationInFrames - CROSSFADE, durationInFrames], [1, 0], clamp)
    : 1

  return (
    <AbsoluteFill style={{ opacity: Math.min(inOpacity, outOpacity), fontFamily: theme.font, color: theme.ink }}>
      {children}
    </AbsoluteFill>
  )
}

export { clamp }
