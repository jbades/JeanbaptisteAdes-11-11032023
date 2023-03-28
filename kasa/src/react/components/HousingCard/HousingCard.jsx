import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

function HousingCard ({
    cover,
    id,
    title
})

{
    return (
        <Link to={`/housing/${id}`}>
            <div href="#" className="housingcard__wrapper" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6250875350140056) 0%, rgba(255,71,71,0) 30%), url(${cover})`}}>
                <div className="housingcard__title">{title}</div>
            </div>
        </Link>
    )
}

HousingCard.propTypes = {
    id: Proptypes.string,
    pictures: Proptypes.array,
    title: Proptypes.string
}

export default HousingCard