import React, { useState, useRef } from 'react';
import CartItem from './CartItem';
import Container from 'react-bootstrap/Container'
import { ListGroup } from 'react-bootstrap';

function Cart(){
    return (
        <Container>
            <ListGroup variant="flush">
                <CartItem></CartItem>
            </ListGroup>
        </Container>
        )
    }

export default Cart


//Bootstrap popover code to use when creating the clickable cart icon

// import Button from 'react-bootstrap/Button';
// import Overlay from 'react-bootstrap/Overlay';
// import Popover from 'react-bootstrap/Popover';

    // const [show, setShow] = useState(false);
    // const [target, setTarget] = useState(null);
    // const ref = useRef(null);
  
    // const handleClick = (event) => {
    //   setShow(!show);
    //   setTarget(event.target);
    // };
    // <div ref={ref}>
    //   <Button onClick={handleClick}>Holy guacamole!</Button>
    //   <Overlay
    //     show={show}
    //     target={target}
    //     placement="bottom"
    //     container={ref}
    //     containerPadding={20}
    //   >
    //     <Popover id="popover-contained">
    //       <Popover.Header as="h3">Popover bottom</Popover.Header>
    //       <Popover.Body>
    //         <strong>Holy guacamole!</strong> Check this info.
    //       </Popover.Body>
    //     </Popover>
    //   </Overlay>
    // </div>
    


