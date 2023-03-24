import Proptypes from 'prop-types'

function HousingCard ({cover, title}) {
    
    return (
        <a href= "#" className="housingcard__wrapper" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6250875350140056) 0%, rgba(255,71,71,0) 30%), url(${cover})`}}>
            <div className="housingcard__title">{title}</div>
        </a>
    )
}

HousingCard.propTypes = {
    pictures: Proptypes.array,
    title: Proptypes.string
}

export default HousingCard