import HousingCard from "../HousingCard/HousingCard"
import PropTypes from 'prop-types'

function CardList({housing}) {

    return (
        <div className="cardlist">
            {housing.map(house => (
                <HousingCard key={house.title}/>
            ))}
        </div>
    )
}

CardList.propTypes = {
    housing: PropTypes.object
}

export default CardList