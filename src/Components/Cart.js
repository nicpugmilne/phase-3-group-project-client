import CartItem from './CartItem';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react"
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';

function Cart({cartList}){

    const items = cartList.map((item)=>(
        <CartItem
            key={item.id}
            id={item.id}
            orderId={item.order_id}
            name={item.item.name}
            image={item.item.item_image_url}
            quantity={item.quantity}
        />
    ))

//Need to work on getting the orderId in order for these two functions to work

    // function cancelOrder(orderId){
    //     fetch(`http://localhost:9292/orders/${orderId}/delete`, {
    //         method: "DELETE",
    //       })
    //         .then((r) => r.json())
    //         .then((item) => console.log(item));
    // }

    // function completeOrder(orderId){
    //     fetch(`http://localhost:9292/orders/${orderId}/complete`, {
    //         method: "PATCH",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           is_completed: true
    //         }),
    //       })
    //         .then((r) => r.json())
    //         .then((updatedItem) => console.log(updatedItem));
    // }
      
    return (
        <Container className='mt-4'>
            <Stack gap={4} className="col-md-5 mx-auto">
                {items}
                <Stack direction="horizontal" gap={4} className="justify-content-center">
                    <Button name="cancel" variant="outline-danger" onClick={cancelOrder}>Cancel Order</Button>
                    <Button name="complete" variant="success" onClick={completeOrder}>Complete Order</Button>
                </Stack>
            </Stack>
        </Container>
        )
    }

export default Cart


