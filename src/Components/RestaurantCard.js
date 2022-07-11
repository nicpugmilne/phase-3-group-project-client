
function RestaurantCard(){
    return (
        <div className="restaurantCard">
            <img 
                className="restaurantCardImage"
                src={restaurant.display_image_url}
                ></img>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.rating}</p>
            <p>{restaurant.price_gauge}</p>
            <button className="btn">Menu</button>
        </div>
    )
}

export default RestaurantCard