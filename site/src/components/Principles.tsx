import { Reveal } from "./Reveal"

const rules = [
  {
    title: "Ardıcıllığı pozmayın",
    text: "Xatırlatma müştəri bazası olmadan, hesabat isə ödəniş və uçot olmadan işləmir. Hər addım əvvəlkinin datasına söykənir.",
  },
  {
    title: "Bir addım — bir məsul şəxs",
    text: "Addımı kimin işlətdiyini adla yazın. Növbəti addıma yalnız əvvəlki hər gün, istisnasız işləyəndə keçin.",
  },
  {
    title: "Cədvəldən başlayın",
    text: "Birinci addım üçün paylaşılan cədvəl kifayətdir. Xüsusi proqramı real ehtiyac görünəndə seçin — əvvəl yox.",
  },
]

export function Principles() {
  return (
    <section id="qaydalar" className="section" aria-labelledby="qaydalar-title">
      <div className="container">
        <Reveal>
          <h2 id="qaydalar-title" className="section__title">
            Üç qayda
          </h2>
        </Reveal>
        <ul className="rules">
          {rules.map((r, i) => (
            <li key={r.title}>
              <Reveal className="rule" delay={i * 0.08}>
                <span className="rule__num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
