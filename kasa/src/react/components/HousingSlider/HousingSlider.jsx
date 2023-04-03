import PropTypes from 'prop-types'
import { useState } from 'react';

function HousingSlider({picturesList}) {
    const [shownPictureIndex, setShownPictureIndex] = useState(0);
    const url = picturesList[shownPictureIndex]

    return (
        <div className="housing-slider__wrapper"  style={{ backgroundImage: `url(${url})`}}>
            <i className="fa-solid fa-chevron-left chevron-left" onClick={() => setShownPictureIndex(shownPictureIndex - 1)}></i>
            <div className="housing-slider__content">{shownPictureIndex + 1} / {picturesList.length}</div>
            <i className="fa-solid fa-chevron-right  chevron-right" onClick={() => setShownPictureIndex(shownPictureIndex + 1)}></i>
        </div>
    )
}

HousingSlider.propTypes = {
    picturesList: PropTypes.array 
}

export default HousingSlider