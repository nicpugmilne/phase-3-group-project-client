import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MenuCard({name, image, price}){
    return(
        <Card className="menuCard" border="secondary" style={{ width: '20rem' }}>
            <Card.Img variant="top" className='menuCardImage' src={image} width={300} alt="food"/>
            <h3>{name}</h3>
            <p>${price}</p>
            <Button type="button" className="btn">Add To Cart</Button>
        </Card>
    )
}

export default MenuCard
