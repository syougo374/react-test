import logo from '../naruto.jpg';
// import '../css/header.css';
const Header = (props) => {
  return(
    <header>
      <div className="log-area App-header">
        {/* <img src={logo} className="header-logo" /> */}
        <h2>{props.text}</h2>
      </div>
    </header>
  )
}

export default Header;