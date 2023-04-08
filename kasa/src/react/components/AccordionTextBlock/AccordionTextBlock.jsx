import { useState } from "react"

function AccordionTextBlock({ blockTitle, blockContent }) {
    const [isToggled, setIsToggled] = useState(true)
    const toggledBlockContent = () => {
        switch (Array.isArray(blockContent)) {
        case true:
            return (
            <div className="accordion__block">
                <div className="accordion__header">
                    <div>{blockTitle}</div>
                    <i className="fa-solid fa-chevron-down" onClick={() => setIsToggled(false)}></i>
                </div>
                <div className="accordion__content">
                    {blockContent.map((object, index) => (
                        <div key={"object" + index}>{object}</div>
                    ))}
                </div>
            </div>
            )
        case false:
            return (
            <div className="accordion__block">
                <div className="accordion__header">
                    <div>{blockTitle}</div>
                    <i className="fa-solid fa-chevron-down" onClick={() => setIsToggled(false)}></i>
                </div>
                <div className="accordion__content">{blockContent}</div>
            </div>
            )
        default:
            return null
        }
    }

    const untoggledBlockContent = () => {
        switch (Array.isArray(blockContent)) {
        case true:
            return (
                <div className="accordion__header">
                    <div>{blockTitle}</div>
                    <i className="fa-solid fa-chevron-up" onClick={() => setIsToggled(true)}></i>
            </div>
            )
        case false:
            return (
            <div className="accordion__block">
                <div className="accordion__header">
                    <div>{blockTitle}</div>
                    <i className="fa-solid fa-chevron-up" onClick={() => setIsToggled(true)}></i>
                </div>
            </div>
            )
        default:
            return null
        }
    }


    return isToggled ? toggledBlockContent() : untoggledBlockContent()
}

export default AccordionTextBlock;

