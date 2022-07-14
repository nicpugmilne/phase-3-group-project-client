import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack'
import { useState } from 'react'

function CartItem({id, name, image, quantity, orderId, price, handleDeleteItem }) {
  const [amount, setAmount] = useState(quantity)


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
    <Stack direction="horizontal" gap={5} className="justify-content-center">         
      <div>
        <img src={image} className="cart-images"></img>
      </div>
      <div>      
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div>        
        <ButtonGroup>
          <Button name="minus" onClick={handleQuantityClick}><i className="fa fa-minus"></i></Button>
          <Button>{amount}</Button>
          <Button name="plus" onClick={handleQuantityClick}><i className="fa fa-plus"></i></Button>
        </ButtonGroup>
        <Button name="delete" onClick={deleteItem}>Remove From Cart</Button>
        <div></div>
      </div>
    </Stack>
  );
}

export default CartItem;