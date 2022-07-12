import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

function CartItem() {
  return (
    <Container>
        <ListGroup.Item> First item being ordered!
            <ButtonGroup>
                <Button>-</Button>
                <Button>Quantity</Button>
                <Button>+</Button>
            </ButtonGroup>
        </ListGroup.Item>
    </Container>
  );
}

export default CartItem;