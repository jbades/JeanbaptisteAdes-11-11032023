import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import housingList from "../../../datas/logements.json";

function Housing () {
    const [product, setProduct] = useState([])
    const {slug} = useParams()

    const filteredHousing = housingList.filter(housing => housing.id === slug)

    useEffect(() => {
        setProduct(filteredHousing[0])
    }, [slug])

    return (
        <div className="housing__wrapper wrapper__boxed">
            <div>image appartement</div>
            <div className="housing-header__wrapper">
                <div className="housing-header__main-header">
                    <h1>{product.title}</h1>
                    <span>{product.location}</span>
                    <div>{product.tags}</div>
                </div>
                <div className="housing-header__side-header">
                    <div>{product.rating}</div>
                </div>
            </div>
            <div className="housing-element__wrapper">
                <div className="housing-element__block">
                    <div className="housing-element__header">
                        <div>Description</div>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <div className="housing-element__content">{product.description}</div>
                </div>
                <div className="housing-element__block housing-element__block--side">
                    <div className="housing-element__header">
                        <div>Équipements</div>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <div className="housing-element__content">{product.equipments}</div>
                </div>
            </div>
        </div>
    )
}

export default Housing