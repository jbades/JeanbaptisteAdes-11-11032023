import HousingCard from "../HousingCard/HousingCard"

function CardList({housing}) {

    return (
        <div className="cardlist">
            {housing.map(house => (
                <HousingCard key={house.title}/>
            ))}
        </div>
    )
}

export default CardList