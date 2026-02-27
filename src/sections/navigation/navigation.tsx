import './navigation.scss'
import WTMLogo from '../../assets/old/img/WTMLogo.svg'
import MenuLogo from '../../assets/old/img/menu.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  function scrollToSection(elementId: string) {
    setTimeout(() => {
      const section = document.querySelector(elementId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 0)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    {
      text: 'Kayıt',
      url: 'https://gdg.community.dev/events/details/google-gdg-antalya-presents-iwd26-antalya/',
    },
    {
      text: 'Etkinlik Hakkında',
      url: '/',
      id: '#about',
    },
    {
      text: 'Konuşmacılar',
      url: '/',
      id: '#speakers',
    },
    {
      text: 'Sponsorlar',
      url: '/',
      id: '#supporters',
    },
    {
      text: 'Program',
      url: '/',
      id: '#agenda',
    }
  ]

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <Link to="/">
          <img src={WTMLogo} alt="WTM Logo" />
        </Link>
      </div>
      <div
        className={`navigation__toggle ${isOpen ? 'is-active' : ''}`}
        onClick={toggleMenu}
      >
        <img className="hamburger-icon" src={MenuLogo} alt="Menu icon" />
      </div>

      <ul className={`navigation__list ${isOpen ? 'is-open' : ''}`}>
        {navItems.map((element, index) => {
          return (
            <li className="navigation__item" key={index}>
              {element.id ? (
                <a
                  href={element.id}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(element.id as string)
                    setIsOpen(false)
                  }}
                >
                  {element.text}
                </a>
              ) : (
                <Link to={element.url} onClick={() => setIsOpen(false)}>
                  {element.text}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
