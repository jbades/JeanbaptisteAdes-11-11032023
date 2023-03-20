import logo from "../../../assets/Kasa_LOGO_211x68.png"
import Menu from "./Nav/Nav"
 
function Header() {
    return (
        <div className="header__wrapper">
            <img src={logo} alt='logo kasa' className="header__logo" />
            <Menu />
        </div>
    )
}

export default Header