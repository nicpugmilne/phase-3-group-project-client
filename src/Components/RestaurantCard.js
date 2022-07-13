import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Ratings from 'react-ratings-declarative';

function RestaurantCard({restaurant, onRestaurantClick}){

    return (
        <Card className="restaurantCard" border="secondary" style={{ width: '20rem' }}>
            <Card.Img 
                variant="top"
                className="restaurantCardImage"
                src={restaurant.display_image_url}
                alt ="restaurant"
                padding ="10px"
                />
            <h2>{restaurant.name}</h2>
            <Container>
                <Row>
                    <Col><b>Rating: </b>
                    <Ratings 
                        rating={restaurant.rating} 
                        widgetRatedColors="blue"  
                        widgetDimensions="15px"
                        widgetSpacings="4px">
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                    </Col>
                    <Col><b>Price:</b> 
                    <Ratings 
                        rating={restaurant.price_gauge}
                        typeOfWidget = "dollar"
                        widgetRatedColors="blue"  
                        widgetDimensions="15px"
                        widgetSpacings="4px">
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                    </Col>
                </Row>
            </Container>
            <p><b>Delivery Time: </b>{restaurant.delivery_time}min</p>
             <Button width="100%" className="btn" onClick={(e) => onRestaurantClick(e, restaurant)}>Menu</Button>
            
            
        </Card>
    )
}



export default RestaurantCard
