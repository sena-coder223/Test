import { useEffect, useRef, useState, type ReactNode } from "react"
import { m } from "motion/react"
import { ease, motionTokens } from "../lib/motion-tokens"
import { motionConfig } from "../lib/motion-config"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/*
 * Prerender olunmuş HTML-də məzmun həmişə görünür (JS olmadan da).
 * Animasiya yalnız hidrasiyadan sonra və yalnız hələ ekrana girməmiş bloklar üçün
 * qoşulur — artıq görünən blok gizlənib yenidən çıxmır.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || !motionConfig.shouldAnimate()) return
    const belowFold = node.getBoundingClientRect().top > window.innerHeight
    if (belowFold) setAnimate(true)
  }, [])

  if (!animate) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: motionTokens.distance.lg }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: motionTokens.duration.slow, ease: ease("smooth"), delay }}
    >
      {children}
    </m.div>
  )
}
