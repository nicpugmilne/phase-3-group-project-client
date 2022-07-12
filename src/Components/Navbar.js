import { NavLink } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';

function Nav(){
    return (
        <Navbar className="navbar">
           <NavLink to="/">Restuarants</NavLink>    
           <NavLink to="/cart">Cart</NavLink> 
           <hr></hr>
        </Navbar>    
    )
}

export default Nav