export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#hero-title" aria-label="Növbəti Addım — səhifənin əvvəli">
          <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <rect width="32" height="32" rx="9" />
            <path d="M9 21.5 L14.5 16 L18 19.5 L23.5 11" />
            <circle cx="23.5" cy="11" r="2.2" />
          </svg>
          <span>Növbəti Addım</span>
        </a>
        <nav aria-label="Əsas naviqasiya">
          <ul className="nav">
            <li>
              <a href="#sahe">Sahə</a>
            </li>
            <li>
              <a href="#yol">Addımlar</a>
            </li>
            <li>
              <a href="#qaydalar">Qaydalar</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
