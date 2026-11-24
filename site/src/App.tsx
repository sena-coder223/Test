import { LazyMotion, MotionConfig, domAnimation } from "motion/react"
import { BusinessPicker } from "./components/BusinessPicker"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Principles } from "./components/Principles"
import { Roadmap } from "./components/Roadmap"
import { useBusiness } from "./hooks/use-business"

export function App() {
  const [business, setBusiness] = useBusiness()

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main">
          Məzmuna keç
        </a>
        <Header />
        <main id="main">
          <Hero />
          <BusinessPicker value={business} onChange={setBusiness} />
          <Roadmap business={business} />
          <Principles />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
