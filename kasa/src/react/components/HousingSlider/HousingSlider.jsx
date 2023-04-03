function HousingSlider(props) {
    const url = props.picturesList[0]
    return (
        <div className="housing-slider__wrapper"  style={{ backgroundImage: `url(${url})`}}>
            <i className="fa-solid fa-chevron-left chevron-left"></i>
            <div className="housing-slider__content">1/4</div>
            <i className="fa-solid fa-chevron-right  chevron-right"></i>
        </div>
    )
}

export default HousingSlider