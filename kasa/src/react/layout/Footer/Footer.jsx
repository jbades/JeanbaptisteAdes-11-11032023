import logo from "../../../assets/Kasa_LOGO-white_122x40.png";

function Footer() {
    return (
        <footer className="footer__wrapper">
            <img src={logo} alt='logo kasa blanc' className="footer__img"/>
            <span className="footer__text">&copy; 2020 Kasa. All Rights Reserved</span>
        </footer>
    )
}

export default Footer