import './navigation.scss'
import gdgLogo from '../../assets/GDG Professional - Horizontal - Dark adlı dosyanın beyaz.png'
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
      url: 'https://kommunity.com/gdg-antalya/events/iwd26-antalya-b7070600',
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
      text: 'Program',
      url: '/',
      id: '#agenda',
    },
    {
      text: 'Sponsorlar',
      url: '/',
      id: '#supporters',
    },
  ]

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <Link to="/">
          <img src={gdgLogo} alt="GDG Logo" />
        </Link>
      </div>
      <button
        className={`navigation__toggle ${isOpen ? 'is-active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className="navigation__toggle-line" />
        <span className="navigation__toggle-line" />
        <span className="navigation__toggle-line" />
      </button>

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
