import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className={`header ${menuOpen ? 'header--menu-open' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <img src="/images/puvicor2.png" alt="Pulidos y Abrillantados Pul D.C" width={44} height={44} />
          <span className="header__brand">Abrillantados Pul D.C</span>
        </Link>
        <button
          className="header__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="header__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
