import MenuCard from "./MenuCard"
import { useState, useEffect } from "react"

function MenuList({menuId}){
    const [menuList, setMenuList] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:9292/restaurants/${menuId}/menu`)
        .then(res => res.json())
        .then((menuList) => setMenuList(menuList))
      }, [menuId])

    // const menuCollection = menuList.map((menu)=>(
    //     <MenuCard
    //     key={menu.item.id}
    //     name={menu.item.name}
    //     image={menu.item.item_image_url}
    //     price={menu.price}
    //     category={menu.item.category_id}
    //     />
    //     ))

    // const specialCollection = menuList
    //     .filter((menu) => (menu.is_special === true))
    //     .map((menu)=>(
    //         <MenuCard
    //         key={menu.item.id}
    //         name={menu.item.name}
    //         image={menu.item.item_image_url}
    //         price={menu.price}
    //         category={menu.item.category_id}
    //         />
    //         ))

    const appCollection = menuList
        .filter((menu) => (menu.item.category_id === 1))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
        />
        ))

    const mainCollection = menuList
        .filter((menu) => (menu.item.category_id === 2))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
    />
    ))

    const sideCollection = menuList
        .filter((menu) => (menu.item.category_id === 3))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
    />
    ))

    const dessertCollection = menuList
        .filter((menu) => (menu.item.category_id === 4))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
    />
    ))

    const drinkCollection = menuList
        .filter((menu) => (menu.item.category_id === 5))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
    />
    ))

     return(
        <div>
            <h1 className="specials">Specials</h1>
            {/* {specialCollection} */}
            <h1 className="appetizers">Appetizers</h1>
            {appCollection}
            <h1 className="main">Main Courses</h1>
            {mainCollection}
            <h1 className="sides">Side Dishes</h1>
            {sideCollection}
            <h1 className="desserts">Desserts</h1>
            {dessertCollection}
            <h1 className="Drinks">Drinks</h1>
            {drinkCollection}
        </div>
    )
}

export default MenuList