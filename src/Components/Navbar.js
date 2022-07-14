import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavBar from 'react-bootstrap/NavBar';

const Navbar = () => {
    return (
        <NavBar justify bg="light" variant="dark" className="justify-content-center mb-3" defaultActiveKey="/">
           <Nav.Item>
                <Link to="/" className="nav-link">Restaurants</Link>    
            </Nav.Item>
           <Nav.Item>
                <Link to="/cart" className="nav-link">Cart</Link> 
           </Nav.Item>
           <hr></hr>
        </NavBar>  
        
    );
}

export default Navbar