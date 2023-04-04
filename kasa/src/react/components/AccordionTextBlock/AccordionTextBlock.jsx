import { useState } from "react"

function AccordionTextBlock({blockTitle, blockContent}) {
    // const [isRolled, setIsRolled] = useState(true)

    return typeof blockContent !== "object" ? 
        <div className="housing-element__block">
            <div className="housing-element__header">
                <div>{blockTitle}</div>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="housing-element__content">{blockContent}</div>
        </div>
    :
        <div className="housing-element__block">
            <div className="housing-element__header">
                <div>{blockTitle}</div>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="housing-element__content">
                {
                    blockContent && blockContent.map((equipment, index) => {
                        return <div key={"equipment" + index}>{equipment}</div>
                    })
                }
            </div>
        </div>
}

export default AccordionTextBlock

