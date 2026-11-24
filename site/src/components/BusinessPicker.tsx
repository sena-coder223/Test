import { businesses, type BusinessId } from "../data/roadmap"
import { Reveal } from "./Reveal"

type Props = {
  value: BusinessId
  onChange: (id: BusinessId) => void
}

export function BusinessPicker({ value, onChange }: Props) {
  return (
    <section id="sahe" className="section" aria-labelledby="sahe-title">
      <div className="container">
        <Reveal>
          <h2 id="sahe-title" className="section__title">
            Biznesiniz hansı sahədədir?
          </h2>
          <p className="section__lead">
            Addımlar hamı üçün eynidir, içi isə sahəyə görə dəyişir. Seçiminiz linkdə saxlanır — komandanıza
            göndərə bilərsiniz.
          </p>
        </Reveal>
        <div className="picker" role="radiogroup" aria-labelledby="sahe-title">
          {businesses.map((b) => (
            <label key={b.id} className="picker__option">
              <input
                type="radio"
                name="sahe"
                value={b.id}
                checked={value === b.id}
                onChange={() => onChange(b.id)}
              />
              <span className="picker__label">{b.label}</span>
              <span className="picker__examples">{b.examples}</span>
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}
