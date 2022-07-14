import MenuCard from "./MenuCard"
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row';

function MenuList({menuId, onAddCartClick, updateCartTotalCost}){
    const [menuList, setMenuList] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:9292/restaurants/${menuId}/menu`)
        .then(res => res.json())
        .then((menuList) => setMenuList(menuList))
      }, [menuId])

    const specialCollection = menuList
        .filter((menu) => (menu.is_special === true))
        .map((menu)=>(
            <MenuCard
            key={menu.item.id}
            id={menu.id}
            name={menu.item.name}
            image={menu.item.item_image_url}
            price={menu.price}
            category={menu.item.category_id}
            menuitem={menu.item}
            restaurantId={menu.restaurant_id}
            onAddCartClick={onAddCartClick}
            updateCartTotalCost={updateCartTotalCost}
            />
            ))

    const appCollection = menuList
        .filter((menu) => (menu.item.category_id === 1))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        id={menu.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
        menuitem={menu.item}
        restaurantId={menu.restaurant_id}
        onAddCartClick={onAddCartClick}
        />
        ))

    const mainCollection = menuList
        .filter((menu) => (menu.item.category_id === 2))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        id={menu.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
        menuitem={menu.item}
        restaurantId={menu.restaurant_id}
        onAddCartClick={onAddCartClick}
    />
    ))

    const sideCollection = menuList
        .filter((menu) => (menu.item.category_id === 3))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        id={menu.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
        menuitem={menu.item}
        restaurantId={menu.restaurant_id}
        onAddCartClick={onAddCartClick}
    />
    ))

    const dessertCollection = menuList
        .filter((menu) => (menu.item.category_id === 4))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        id={menu.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
        menuitem={menu.item}
        restaurantId={menu.restaurant_id}
        onAddCartClick={onAddCartClick}
    />
    ))

    const drinkCollection = menuList
        .filter((menu) => (menu.item.category_id === 5))
        .map((menu)=>(
        <MenuCard
        key={menu.item.id}
        id={menu.id}
        name={menu.item.name}
        image={menu.item.item_image_url}
        price={menu.price}
        category={menu.item.category_id}
        menuitem={menu.item}
        restaurantId={menu.restaurant_id}
        onAddCartClick={onAddCartClick}
    />
    ))

     return(
        <div>
            <h1 className="specials">Specials</h1>
            <Row className="cardGrid">{specialCollection}</Row>
            <h1 className="appetizers">Appetizers</h1>
                <Row className="cardGrid">{appCollection}</Row>
            <h1 className="main">Main Courses</h1>
                <Row className="cardGrid">{mainCollection}</Row>
            <h1 className="sides">Side Dishes</h1>
                <Row className="cardGrid">{sideCollection}</Row>
            <h1 className="desserts">Desserts</h1>
                <Row className="cardGrid">{dessertCollection}</Row>
            <h1 className="Drinks">Drinks</h1>
                <Row className="cardGrid">{drinkCollection}</Row>
        </div>
    )
}

export default MenuList