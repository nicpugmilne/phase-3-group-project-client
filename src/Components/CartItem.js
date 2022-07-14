import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack'
import { useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CartItem({id, name, image, quantity, orderId, setCartList, handleDeleteItem, menuItemId}) {
  const [amount, setAmount] = useState(quantity)
  const [price, setPrice] = useState()

  useEffect(() =>{
    fetch(`http://localhost:9292/menu_item/${menuItemId}`)
    .then(res => res.json())
    .then((price) => setPrice(price.price))
  }, [])
 
  // console.log(amount)

  function handleQuantityClick(e){
    if (e.target.name === "minus"){
      if (amount === 1){
        deleteItem()
      } else {
        updateQuantity(amount-1)
        setAmount(amount - 1)
      }
    } else {
      updateQuantity(amount+1)
      setAmount(amount + 1)
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
      .then((quantity) => console.log(quantity))
      // .then((updatedQuantity) => initializeAmount(updatedQuantity))
  }
 

  function deleteItem(){
    fetch(`http://localhost:9292/orders/${orderId}/ordered_item/${id}/delete`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((item) => handleDeleteItem(item));
  }

  return (

    <Row className="cart" lg={6}>         
      <Col className="m-1">
        <img src={image} className="cart-images"></img>
      </Col>
    
      <Col className='mt-4'><p>{name}</p><p>${price}</p></Col>
      <Col>        
        <ButtonGroup className="m-3">
          <Button name="minus" variant="outline-primary" onClick={handleQuantityClick}>➖</Button>
          <Button>{amount}</Button>
          <Button name="plus" variant="outline-primary" onClick={handleQuantityClick}>➕</Button>
        </ButtonGroup>
        <Button name="delete" variant="danger" onClick={deleteItem} ><i className="fa fa-trash-o fa-lg"></i></Button>
      </Col>
    </Row>
  );
}

export default CartItem;