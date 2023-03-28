import { NavLink } from "react-router-dom"
import logo from "../../../assets/Kasa_LOGO_211x68.png"
import Menu from "./Nav/Nav"
 
function Header() {
    return (
        <div className="header__wrapper wrapper__boxed">
            <NavLink to="/">
                <img src={logo} alt='logo kasa' className="header__logo" />
            </NavLink>
            <Menu />
        </div>
    )
}

export default Header