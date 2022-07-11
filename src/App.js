
import './App.css';
import { Route, Switch} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/Navbar';
import Header from './Components/Header';
import RestaurantFilter from './Components/RestaurantFilter';
import RestaurantList from './Components/RestaurantList';
import Cart from './Components/Cart';


function App() {
  return (
    <div className="App">
     <Header />
     <NavBar />
     <Switch>
        <Route path="/">
          <RestaurantFilter />
          <RestaurantList />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
