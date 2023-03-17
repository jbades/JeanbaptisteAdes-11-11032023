import { Link } from 'react-router-dom'
 
function Menu() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about/">À propos</Link>
        </nav>
    )
}

export default Menu