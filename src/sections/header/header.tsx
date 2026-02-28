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
