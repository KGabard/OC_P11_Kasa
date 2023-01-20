import { NavLink } from 'react-router-dom'
import kasaLogo from '../assets/logo/kasa-logo-big.svg'
import burgerIcon from '../assets/icons/burger.svg'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const handleToggleMenu = () => {
    if (isOpening) return
    setIsOpening(true)
    setIsOpen(!isOpen)
    setTimeout(() => {
      setIsOpening(false)
    }, 250)
  }

  return (
    <header className="header">
      <img src={kasaLogo} alt="logo Kasa" className="header__logo" />
      <nav className="header__navbar">
        <img
          className="header__navbar__icon"
          src={burgerIcon}
          alt="navbar"
          onClick={handleToggleMenu}
        />
        <ul
          className={`header__navbar__list ${
            isOpen ? 'header__navbar__list--open' : ''
          } ${
            isOpening && isOpen ? 'header__navbar__list--opening' : ''
          } ${
            isOpening && !isOpen ? 'header__navbar__list--closing' : ''
          }` }
        >
          <li
            className={`header__navbar__list__item ${
              isOpen ? 'header__navbar__list__item--open' : ''
            }`}
            onClick={handleToggleMenu}
          >
            <NavLink to={'/'}>Accueil</NavLink>
          </li>
          <li
            className={`header__navbar__list__item ${
              isOpen ? 'header__navbar__list__item--open' : ''
            }`}
            onClick={handleToggleMenu}
          >
            <NavLink to={'/about'}>A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
