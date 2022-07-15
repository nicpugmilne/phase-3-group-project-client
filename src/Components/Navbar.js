import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavBar from 'react-bootstrap/NavBar';

const Navbar = () => {
    return (
        <NavBar bg="light" variant="dark" className="justify-content-center mb-3">
           <Nav.Item>
                <Link to="/" className="nav-link">Restaurants</Link>    
            </Nav.Item>
           <Nav.Item>
                <Link to="/cart" className="nav-link">Cart</Link> 
           </Nav.Item>
           
        </NavBar>  
        
    );
}

export default Navbar