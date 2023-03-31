import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import housingList from "../../../datas/logements.json"
import StarRating from "../../components/StarRating/starrating"

function Housing () {
    const [product, setProduct] = useState([])
    const {slug} = useParams()

    const filteredHousing = housingList.filter(housing => housing.id === slug)

    useEffect(() => {
        setProduct(filteredHousing[0])
    }, [filteredHousing])

    return (
        <div key={product.id} className="housing__wrapper wrapper__boxed">
            {product.pictures && product.pictures.map((picture, index) => {
                return <img key={"picture" + index} src={picture} alt=""/>
            })}
            <div className="housing-header__wrapper">
                <div className="housing-header__main-header">
                    <h1>{product.title}</h1>
                    <span>{product.location}</span>
                    <div className="housing-header__tags-wrapper">
                        {product.tags && product.tags.map((tag, index) => {
                            return <div key={"tag" + index} className="housing-header__tag">{tag}</div>
                        })
                        }
                    </div>
                </div>
                <div className="housing-header__side-header">
                    <div className="housing-header__host-info">
                        <div>{product.host && Object.values(product.host.name)}</div>
                        <img src={product.host && product.host.picture} alt=""/>
                    </div>
                    <StarRating rating={product.rating}/>
                </div>
            </div>
            <div className="housing-element__wrapper">
                <div className="housing-element__block">
                    <div className="housing-element__header">
                        <div>Description</div>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="housing-element__content">{product.description}</div>
                </div>
                <div className="housing-element__block housing-element__block--side">
                    <div className="housing-element__header">
                        <div>Équipements</div>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="housing-element__content">{
                        product.equipments && product.equipments.map((equipment, index) => {
                            return <div key={"equipment" + index}>{equipment}</div>
                        })
                    }</div>
                </div>
            </div>
        </div>
    )
}

export default Housing