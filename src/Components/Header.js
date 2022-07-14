import Row from 'react-bootstrap/Row';

function Header(){
    return(
        <div className="header">
            <div className="transparentbox">
            <h1 className="title">Exquisite Edibles</h1>

            </div>
            {/* <Row> 
                <h1><i className="fa fa-shopping-cart"></i></h1>
            </Row> */}

        </div>
    )
}

export default Header


//Bootstrap popover code to use when creating the clickable cart icon
// import { useState, useEffect } from "react"
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
    


