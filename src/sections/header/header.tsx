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
        <button
          className="header__btn header__btn--primary"
          onClick={() => scrollToSection('#registration')}
        >
          <span className="header__btn-text">Hemen Kayıt Ol</span>
          <span className="header__btn-icon">→</span>
        </button>
      </div>
    </section>
  )
}
