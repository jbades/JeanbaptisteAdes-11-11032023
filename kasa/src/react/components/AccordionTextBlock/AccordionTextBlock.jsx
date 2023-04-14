import { useState } from "react"

function AccordionTextBlock({ blockTitle, blockContent }) {
    const [isToggled, setIsToggled] = useState(true)
    
    if (Array.isArray(blockContent)) {
        blockContent = blockContent.map((object, index) => (
            <div key={"object" + index}>{object}</div>
        ))
    }

    return <div className="accordion__block">
        <div className="accordion__header">
            <div>{blockTitle}</div>
            <i
                className={`fa-solid fa-chevron-${isToggled ? 'up' : 'down'}`}
                onClick={() => setIsToggled(!isToggled)}>
            </i>
        </div>
        <div className={`accordion__content ${isToggled ? '' : 'no-display'}`}>
            {blockContent}
        </div>
    </div>;
}

export default AccordionTextBlock;

