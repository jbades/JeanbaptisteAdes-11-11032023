function StarRating({rating}) {
    const loop = [1, 2, 3, 4, 5]
    return <div className="housing-header__rating">
        {loop.map((increment, index) => {
            return rating && rating < increment ? <div key={"rating" + index} className="fa-solid fa-star unrated"></div> : <div key={"rating" + index} className="fa-solid fa-star rated"></div> 
        })}
    </div>
}

export default StarRating