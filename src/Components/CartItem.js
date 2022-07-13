import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';



function CartItem({name, image, quantity}) {
  return (
      <ListGroup.Item> {name}
          <ButtonGroup>
              <Button><i class="fa fa-minus"></i></Button>
              <Button>{quantity} <i class="bi bi-cart3"></i></Button>
              <Button><i class="fa fa-plus"></i></Button>
          </ButtonGroup>
      </ListGroup.Item>
  );
}

export default CartItem;