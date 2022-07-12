import { NavLink } from "react-bootstrap"

function NavBar(){
    return (
        <div className="navbar">
           <NavLink to="/">Restuarants</NavLink>    
           <NavLink to="/cart">Cart</NavLink> 
           <hr></hr>
        </div>    
    )
}

export default NavBar