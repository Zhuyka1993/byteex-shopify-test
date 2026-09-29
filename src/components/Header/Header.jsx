import './Header.css'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="Brand name" />
      </a>
    </header>
  )
}

export default Header