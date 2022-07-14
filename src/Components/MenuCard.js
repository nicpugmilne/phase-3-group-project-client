import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function MenuCard({name, id, image, price, menuitem, restaurantId, onAddCartClick}){

    return(
        <Card className="menuCard" border="secondary" style={{ width: '20rem' }}>
            <Card.Img variant="top" className='menuCardImage' src={image} width={300} alt="food"/>
            <h4>{name}</h4>
            <p><b>Price: </b>${price}</p>
            <Button type="button" className="btn" onClick={()=> onAddCartClick(id, restaurantId, menuitem)}>Add To Cart</Button>
        </Card>
    )
}

export default MenuCard
