import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function MenuCard({name, id, image, price, restaurantId, onAddCartClick}){

    return(
        <Card className="menuCard" border="secondary" style={{ width: '20rem' }}>
            <Card.Img variant="top" className='menuCardImage' src={image} width={300} alt="food"/>
            <Card.Body className='mb-3'>
                <Card.Title>{name}</Card.Title>
                <Card.Text><b>Price: </b>${price}</Card.Text>
                <Button type="button" className="btn" onClick={()=> onAddCartClick(id, restaurantId)}>Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default MenuCard
