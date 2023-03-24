import picture from "../../../../assets/kasa_home_headsection.jpg"

function HeadSection() {
    return (
        <div className="headsection__wrapper" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${picture})`}}>
            <div className="headsection__text">Chez vous, partout et ailleurs</div>
        </div>
    )
}

export default HeadSection