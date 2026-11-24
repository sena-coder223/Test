import { Composition } from "remotion"
import { Promo } from "./Promo"
import { FPS, DURATION } from "./timeline"

export const Root = () => (
  <Composition id="Promo" component={Promo} durationInFrames={DURATION} fps={FPS} width={1080} height={1920} />
)
