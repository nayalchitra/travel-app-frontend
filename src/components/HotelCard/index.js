import "./style.css";

const HotelCard = ()=>{

    return(
        <div className="hotel-container">
            <div className="container">
                <img  className="hotel-image" src="https://assets.architecturaldigest.in/photos/6297cc586a48820f72ad24c8/master/w_1600%2Cc_limit/Wakefield%2520Estate-%2520Facade.jpg" alt=""/>
                <div className="hotel-details">
                    <span className="hotel-location">Kausani, Uttarakhand</span>
                    <span className="hotel-rating">
                        <span className="material-symbols-outlined">
                            star
                        </span>
                        <span className="rating">3.4</span>
                    </span>
                    <span className="hotel-name">Hotel Mount</span>
                    <span className="hotel-price">
                        <span className="price">Rs. 345</span>
                        <span className="shift">per Night</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HotelCard;