import CartItem from './CartItem';
import Container from 'react-bootstrap/Container';
import { ListGroup } from 'react-bootstrap';
import { useState, useEffect } from "react"

function Cart(){
    const [cartList, setCartList] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:9292/ordered_items`)
        .then(res => res.json())
        .then((items) => setCartList(items))
      }, [])

      const items = cartList.map((item)=>(
      <CartItem
      key={item.id}
      name={item.item.name}
      image={item.item.item_image_url}
      quantity={item.item.quantity}
  />
  ))
      
    return (
        <Container>
            <ListGroup variant="flush">
                {items}
            </ListGroup>
        </Container>
        )
    }

export default Cart


