import { useEffect, useState } from "react"
import { AbsoluteFill, continueRender, delayRender, Sequence, staticFile } from "remotion"
import { Audio } from "@remotion/media"
import { Background } from "./components"
import { fontsReady } from "./fonts"
import { Cover } from "./scenes/Cover"
import { Cta } from "./scenes/Cta"
import { Problem } from "./scenes/Problem"
import { Steps } from "./scenes/Steps"
import { FPS, scenes } from "./timeline"

export const Promo = () => {
  const [handle] = useState(() => delayRender("Inter şrifti yüklənir"))
  useEffect(() => {
    fontsReady.then(() => continueRender(handle))
  }, [handle])

  return (
    <AbsoluteFill>
      <Background />
      <Sequence from={scenes.cover.from} durationInFrames={scenes.cover.duration} premountFor={FPS}>
        <Cover />
      </Sequence>
      <Sequence from={scenes.problem.from} durationInFrames={scenes.problem.duration} premountFor={FPS}>
        <Problem />
      </Sequence>
      <Sequence from={scenes.steps.from} durationInFrames={scenes.steps.duration} premountFor={FPS}>
        <Steps />
      </Sequence>
      <Sequence from={scenes.cta.from} durationInFrames={scenes.cta.duration} premountFor={FPS}>
        <Cta />
      </Sequence>
      <Audio src={staticFile("ambient.m4a")} />
    </AbsoluteFill>
  )
}
