
import './App.css';
import { Route, Switch} from "react-router-dom";
import { useState, useEffect} from "react"
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/Navbar';
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
  const [ratingFilter, setRatingFilter] = useState("All");
  const [menuView, setMenuView] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost:9292/restaurants')
    .then(res => res.json())
    .then((restaurants) => setRestaurants(restaurants))
  }, [])


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

      
  return (
    <div className="App">
     <Header />
     <NavBar />
     <Switch>
        <Route path="/">
          {menuView ?(
            <div>
              <MenuFilter  onGoBack={onGoBack}/>
              <MenuList menuId={menuId}/>
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
          <Cart />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
