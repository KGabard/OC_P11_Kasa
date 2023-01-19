import { NavLink } from 'react-router-dom'
import kasaLogo from '../assets/logo/kasa-logo-big.svg'

const Header = () => {
  return (
    <header className="header">
      <img src={kasaLogo} alt="logo Kasa" className="header__logo" />
      <nav className="header__navbar">
        <ul className="header__navbar__list">
          <li className="header__navbar__list__item"><NavLink to={'/'}>Accueil</NavLink></li>
          <li className="header__navbar__list__item"><NavLink to={'/about'}>A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
