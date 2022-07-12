import MenuCard from "./MenuCard"
import { useState, useEffect } from "react"

function MenuList({restaurantId}){
    const [menu, setMenu] = useState([]);


    useEffect(() =>{
        fetch('http://localhost:9292/restaurants/${restaurantId}/menu')
        .then(res => res.json())
        .then((menu) => setMenu(menu))
      }, [restaurantId])

     return(
        <div>
            <h1 className="specials">Specials</h1>
            <h1 className="appetizers">Appetizers</h1>
            <h1 className="main">Main Courses</h1>
            <h1 className="sides">Side Dishes</h1>
            <h1 className="desserts">Desserts</h1>
            <h1 className="Drinks">Drinks</h1>
        </div>
    )
}

export default MenuList