import { NavLink } from 'react-router-dom'
 
function Menu() {
    return (
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about/">À propos</NavLink>
        </nav>
    )
}

export default Menu