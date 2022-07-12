import MenuCard from "./MenuCard"
import { useState, useEffect } from "react"

function MenuList({menuId}){
    const [menuList, setMenuList] = useState([]);

   
    useEffect(() =>{
        fetch(`http://localhost:9292/restaurants/${menuId}/menu`)
        .then(res => res.json())
        .then((menuList) => setMenuList(menuList))
      }, [menuId])

    const menuCollection = menuList.map((menu)=>(
        <MenuCard
        key={menu.item.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        />
        ))

     return(
        <div>
            {menuCollection}
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