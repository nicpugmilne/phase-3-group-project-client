import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CartItem({id, name, image, quantity, orderId, price, setCartList, handleDeleteItem }) {
 
  function handleQuantityClick(e){
    if (e.target.name === "minus"){
      if (quantity === 1){
        deleteItem()
      } else {
        updateQuantity(quantity-1)
      }
    } else {
      updateQuantity(quantity+1)
    } 
  }

  function updateQuantity(updatedQuantity){
    fetch(`http://localhost:9292/orders/${orderId}/ordered_item/${id}/update_quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: updatedQuantity
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => console.log(updatedItem));
  }
 

  function deleteItem(){
    fetch(`http://localhost:9292/orders/${orderId}/ordered_item/${id}/delete`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((item) => handleDeleteItem(item));
  }

  return (

    <Row className="cart"n lg={4}>         
      <Col className="m-3">
        <img src={image} className="cart-images"></img>
      </Col>
      <Col className="m-3">      
        <p>{name}</p>
        <p>{price}</p>
      </Col>
      <Col >        
        <ButtonGroup className="m-3">
          <Button name="minus" variant="outline-primary" onClick={handleQuantityClick}>➖</Button>
          <Button>{quantity}</Button>
          <Button name="plus" variant="outline-primary" onClick={handleQuantityClick}>➕</Button>
        </ButtonGroup>
        <Button name="delete" variant="danger" onClick={deleteItem} ><i class="fa fa-trash-o fa-lg"></i></Button>
      </Col>
    </Row>
  );
}

export default CartItem;