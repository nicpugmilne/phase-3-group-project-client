
function RestaurantCard({restaurant, onRestaurantClick}){

    return (
        <div className="restaurantCard">
            <img 
                className="restaurantCardImage"
                src={restaurant.display_image_url}
                width="300px"
                alt ="restaurant"
                ></img>
            <h1>{restaurant.name}</h1>
            <p>Rating: {restaurant.rating}</p>
            <p>Price: {restaurant.price_gauge}</p>
            <p>Delivery Time: {restaurant.delivery_time}</p>
            <button className="btn" onClick={(e) => onRestaurantClick(e, restaurant)}>Menu</button>
        </div>
    )
}



export default RestaurantCard
