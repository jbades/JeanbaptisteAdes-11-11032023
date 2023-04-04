import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import housingList from "../../../datas/logements.json"
import StarRating from "../../components/StarRating/starrating"
import HousingSlider from "../../components/HousingSlider/HousingSlider"
import AccordionTextBlock from "../../components/AccordionTextBlock/AccordionTextBlock"

function Housing () {
    const [selectedHousing, setSelectedHousing] = useState([])
    const {slug} = useParams()

    const filteredHousing = housingList.filter(housing => housing.id === slug)

    useEffect(() => {
        setSelectedHousing(filteredHousing[0])
    }, [filteredHousing])

    return (
        <div key={selectedHousing.id} className="housing__wrapper wrapper__boxed">
            <HousingSlider picturesList={selectedHousing.pictures ? selectedHousing.pictures : []}/>
            <div className="housing-header__wrapper">
                <div className="housing-header__main-header">
                    <h1>{selectedHousing.title}</h1>
                    <span>{selectedHousing.location}</span>
                    <div className="housing-header__tags-wrapper">
                        {selectedHousing.tags && selectedHousing.tags.map((tag, index) => {
                            return <div key={"tag" + index} className="housing-header__tag">{tag}</div>
                        })
                        }
                    </div>
                </div>
                <div className="housing-header__side-header">
                    <div className="housing-header__host-info">
                        <div>{selectedHousing.host && selectedHousing.host.name}</div>
                        <img src={selectedHousing.host && selectedHousing.host.picture} alt=""/>
                    </div>
                    <StarRating rating={selectedHousing.rating ? selectedHousing.rating : ""}/>
                </div>
            </div>
            <div className="housing-element__wrapper">
                <AccordionTextBlock blockTitle="Description" blockContent={selectedHousing.description ? selectedHousing.description : ""}/>
                <AccordionTextBlock blockTitle="Équipements" blockContent={selectedHousing.equipments ? selectedHousing.equipments : []}/>
            </div>
        </div>
    )
}

export default Housing