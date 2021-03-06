import CartItem from './CartItem';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react"
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';

function Cart({cartList, currentOrderId, handleDeleteItem, deleteCart, totalCartCost, updateCartTotalCost}){
  
    const items = cartList.map((item)=>(
        <CartItem
            key={item.id}
            id={item.id}
            orderId={item.order_id}
            name={item.item.name}
            image={item.item.item_image_url}
            quantity={item.quantity}
            handleDeleteItem={handleDeleteItem}
            menuItemId= {item.menu_item_id}
            updateCartTotalCost ={updateCartTotalCost}
        />
    ))


    function cancelOrder(){
        fetch(`http://localhost:9292/orders/${currentOrderId}/delete`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((items) => deleteCart(items));
    }

    function completeOrder(){
        fetch(`http://localhost:9292/orders/${currentOrderId}/complete`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              is_completed: true
            }),
          })
            .then((r) => r.json())
            .then((items) => deleteCart(items));
            
    }
      
    return (
        <Container className='mt-5'>
                {items}
                <div id="total-cost" className='mt-3'>Total Cost: ${totalCartCost}</div>
                <Stack direction="horizontal" gap={3} className="justify-content-center mt-4" >
                    <Button name="cancel" variant="outline-danger" onClick={cancelOrder}>Cancel Order</Button>
                    <Button name="complete" variant="success" onClick={completeOrder}>Complete Order</Button>
                </Stack>
        </Container>
        )
    }

export default Cart


