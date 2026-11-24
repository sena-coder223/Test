import { useReducedMotion } from "motion/react"
import { ease, motionTokens } from "../lib/motion-tokens"

export function useSafeMotion(fullY: number = motionTokens.distance.md) {
  const reduce = Boolean(useReducedMotion())
  return {
    reduce,
    initial: { opacity: 0, y: reduce ? 0 : fullY },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reduce ? 0 : -fullY },
    transition: reduce
      ? { duration: motionTokens.duration.fast }
      : { duration: motionTokens.duration.normal, ease: ease("smooth") },
  }
}
