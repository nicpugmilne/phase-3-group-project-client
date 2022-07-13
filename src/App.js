
import './App.css';
import { Route, Switch} from "react-router-dom";
import { useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import MenuList from './Components/MenuList';
import MenuFilter from './Components/MenuFilter';
import RestaurantList from './Components/RestaurantList';
import RestaurantFilter from './Components/RestaurantFilter';
import Cart from './Components/Cart';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [menuSelection, setMenuSelection] = useState({});
  const [cuisineFilter, setCuisineFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [menuView, setMenuView] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() =>{
      fetch(`http://localhost:9292/ordered_items`)
      .then(res => res.json())
      .then((items) => setCartList(items))
    }, [])
  
  useEffect(() => {
    fetch('http://localhost:9292/restaurants')
    .then(res => res.json())
    .then((restaurants) => setRestaurants(restaurants))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/orders')
    .then(res => res.json())
    .then((orders) => setOrders(orders))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/ordered_items')
    .then(res => res.json())
    .then((orderedItems) => setOrderedItems(orderedItems))
  }, [])


//Menu back and forth
  function onRestaurantClick(e, restaurant){
    setMenuView(true)
    setMenuSelection(restaurant)
  }

  let menuId = menuSelection.id

  function onGoBack(){
    setMenuView(false)
  }

//Filters

function handleCuisineFilter(cuisineFilter){
  setCuisineFilter(cuisineFilter)
  console.log(cuisineFilter)
}

function handlePriceFilter(priceFilter){
  setPriceFilter(priceFilter)
}
function handleRatingFilter(ratingFilter){
  setRatingFilter(ratingFilter)
}

function handleCategoryFilter(categoryFilter){
  setCategoryFilter(categoryFilter)
}

  const restaurantsToDisplay = restaurants
    .filter((restaurant) => {
      if (cuisineFilter === "All") return true;
      return restaurant.cuisine_id === parseInt(cuisineFilter);
    })
    .filter((restaurant) => {
      if (priceFilter === "All") return true;
      return restaurant.price_gauge === parseInt(priceFilter);
    })
    .filter((restaurant) => {
      if (ratingFilter === "All") return true;
      return restaurant.rating === parseInt(ratingFilter);
      })

//Cart

function addToCart(e, id){

  function addCart(newItem){
    setCart([...cart, newItem])
  }
  const order_id = 1
  const menu_item_id = id

  const itemData = {
    order_id: order_id,
    menu_item_id: menu_item_id,
  }
    
  fetch("http://localhost:9292/items/new",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
     },
     body: JSON.stringify(itemData)
  })
  .then((r) => r.json())
  .then((newItem) =>  addCart(newItem))
}

  console.log(cart)

  return (
    <div className="App">
     <Header />
     <Navbar />
     <Switch>
        <Route exact path="/">
          {menuView ?(
            <div>
              <MenuFilter  onGoBack={onGoBack} handleCategoryFilter={handleCategoryFilter}/>
              <MenuList menuId={menuId} onAddCartClick={addToCart}/>
            </div>
          ): (
            <div className="restaurantPage">
            <RestaurantFilter
                handlePriceFilter={handlePriceFilter}
                handleCuisineFilter={handleCuisineFilter}
                handleRatingFilter={handleRatingFilter} />
            <RestaurantList 
                restaurantsToDisplay={restaurantsToDisplay}
                onRestaurantClick={onRestaurantClick}/>
            </div>    
            )}
        </Route>
        <Route exact path="/cart">
          <Cart cartList={cartList}/>
        </Route>
     </Switch>
    </div>
  );
}

export default App;
