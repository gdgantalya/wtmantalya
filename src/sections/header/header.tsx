import './header.scss'
// import wtmLogo from '../../assets/wtm-logo-bw.svg'

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
      {/* <img className="header__logo" src={wtmLogo} /> */}
      <div className="header__text-container">
        {/* <h1 className="header__title">
          #BreakThePattern
          <br /> International Women's Day 2026
        </h1>
        <h2 className="header__subtitle">Bu Etkinliği Kaçırma </h2> */}
        {/* <p className="header__details">
          4 Nisan Cumartesi, 2026  
          <br /> Antalya, Gişimcilik ve kariyer ofisi etkinliği
        </p> */}
      </div>
      
      <div className="header__buttons">
        <button 
          className="header__btn header__btn--primary"
          onClick={() => scrollToSection('#registration')}
        >
          <span className="header__btn-text">Hemen Kayıt Ol</span>
          <span className="header__btn-icon">→</span>
        </button>
        <button 
          className="header__btn header__btn--secondary"
          onClick={() => scrollToSection('#speakers')}
        >
          <span className="header__btn-text">Konuşmacıları Gör</span>
          <span className="header__btn-icon">→</span>
        </button>
      </div>
    </section>
  )
}
