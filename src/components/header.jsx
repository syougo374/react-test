import logo from '../naruto.jpg';
import '../css/header.css';
const Header = () => {
  return(
    <header>
      <div className="log-area">
        <img src={logo} className="header-logo" />
      </div>
    </header>
  )
}

export default Header;