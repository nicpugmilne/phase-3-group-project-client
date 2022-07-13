import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Nav className="justify-content-center">
           <Nav.Item>
                <Link to="/" className="nav-link">Restaurants</Link>    
            </Nav.Item>
           <Nav.Item>
                <Link to="/cart" className="nav-link">Cart</Link> 
           </Nav.Item>
        </Nav>  
    );
}

export default Navbar