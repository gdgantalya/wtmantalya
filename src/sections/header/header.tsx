import './header.scss'
import wtmLogo from '../../assets/wtm-logo-bw.svg'

export default function Header() {
  const scrollToSection = (elementId: string) => {
    setTimeout(() => {
      const section = document.querySelector(elementId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 0)
  }

  return (
    <section className="header">
      <div className="header__mobile-content">
        <img className="header__logo" src={wtmLogo} />
        <div className="header__text-container">
          <h1 className="header__title">
            #BreakThePattern
            <br /> International Women’s Day
          </h1>
          <h2 className="header__subtitle">Etkinliğimize Katılın</h2>
          <p className="header__details">
            4 Nisan, 2026
            <br /> Antalya, Türkiye
          </p>
        </div>
      </div>
      <div className="header__buttons">
        <a
          className="header__btn header__btn--primary"
          href="https://kommunity.com/gdg-antalya/events/iwd26-antalya-b7070600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="header__btn-text">Hemen Kayıt Ol</span>
          <span className="header__btn-icon">→</span>
        </a>
      </div>
    </section>
  )
}
