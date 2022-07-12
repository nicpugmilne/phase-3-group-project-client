import RestaurantCard from "./RestaurantCard"
import Row from 'react-bootstrap/Row';


function RestaurantList({restaurantsToDisplay, onRestaurantClick}){

    const restaurantCollection = restaurantsToDisplay.map((restaurant)=>(
        <RestaurantCard 
        key={restaurant.id} 
        restaurant={restaurant}
        onRestaurantClick={onRestaurantClick}
        />
    ))

   

    return(
        <Row className="cardGrid">
           {restaurantCollection}
        </Row>
    )
}

export default RestaurantList