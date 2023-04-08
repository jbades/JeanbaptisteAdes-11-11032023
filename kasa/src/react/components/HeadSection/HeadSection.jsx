function HeadSection({picturePath, pictureMessage}) {
    return (
        <div className="headsection__wrapper" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${picturePath})`}}>
            <div className="headsection__text">{pictureMessage}</div>
        </div>
    )
}

export default HeadSection