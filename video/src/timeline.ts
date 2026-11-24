export const FPS = 30
export const DURATION = 15 * FPS

export const scenes = {
  cover: { from: 0, duration: 96 },
  problem: { from: 90, duration: 84 },
  steps: { from: 168, duration: 216 },
  cta: { from: 378, duration: 72 },
} as const

export const CROSSFADE = 8
