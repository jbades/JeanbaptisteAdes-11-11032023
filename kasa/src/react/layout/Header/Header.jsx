import { Link } from "react-router-dom"
import logo from "../../../assets/Kasa_LOGO_211x68.png"
import Menu from "./Nav/Nav"
 
function Header() {
    return (
        <header className="header__wrapper wrapper__boxed">
            <Link to="/">
                <img src={logo} alt='logo kasa' className="header__logo" />
            </Link>
            <Menu />
        </header>
    )
}

export default Header