
import kasaLogo from '../assets/logo/kasa-logo-big.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={kasaLogo} alt="logo Kasa" className="footer__logo" />
      <p className='footer__infos'>© 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer