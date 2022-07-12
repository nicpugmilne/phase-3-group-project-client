import RestaurantCard from "./RestaurantCard"


function RestaurantList({restaurantsToDisplay, onRestaurantClick}){

    const restaurantCollection = restaurantsToDisplay.map((restaurant)=>(
        <RestaurantCard 
        key={restaurant.id} 
        restaurant={restaurant}
        onRestaurantClick={onRestaurantClick}
        />
    ))

   

    return(
        <div>
           {restaurantCollection}
        </div>
    )
}

export default RestaurantList