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
                        widgetDimensions="18px"
                        widgetSpacings="2px">
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
                        widgetRatedColors="blue"  
                        widgetDimensions="18px"
                        widgetSpacings="2px"
                        svgIconViewBoxes= "0 0 16 16"
                        svgIconPaths= "M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z">
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
