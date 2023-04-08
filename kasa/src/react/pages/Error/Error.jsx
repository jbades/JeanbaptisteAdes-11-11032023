import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="error__wrapper wrapper__boxed">
            <div className="error__message">
                <div className="error__title">404</div>
                <div>Oups! La page que vous demandez n'existe pas.</div>
            </div>
            <Link to="/" className="error__homelink">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error