import logo from '../Asset.png'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <img src={logo} alt="ReactDC" className="logo-img" />
        </div>

        <nav className="header-nav">
          <a href="https://www.reactdc.org/" target="_blank" rel="noopener noreferrer">
            ReactDC Home
          </a>
          <a href="#donate" className="nav-cta">
            Donate Now
          </a>
        </nav>
      </div>
    </header>
  )
}
