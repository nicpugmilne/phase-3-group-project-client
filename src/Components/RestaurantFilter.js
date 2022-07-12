import Dropdown from 'react-bootstrap/Dropdown';

function RestaurantFilter({handlePriceFilter, handleCuisineFilter, handleRatingFilter}){

   return(
        <div>
            <div>
                <h4>Filter By Cuisine</h4>
                <Dropdown onChange={(e)=> handleCuisineFilter(e.target.value)}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Filter By Cuisine
                    </Dropdown.Toggle>
                    <Dropdown.Menu > 
                        <Dropdown.Item value="All">All</Dropdown.Item>
                        <Dropdown.Item value="4">American</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            <select name="type" id="cuisine" aria-label="cuisine"
                onChange={(e)=> handleCuisineFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="4">American</option>
                <option value="3">Indian</option>
                <option value="1">Italian</option>
                <option value="2">Mexican</option>
                <option value="5">Thai</option>
            </select>
            </div>
            <div>
                <h4>Filter By Price</h4>
            <select id="price"  aria-label="price"
                onChange={(e)=> handlePriceFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
            </select>
            </div>
            <div>
                <h4>Filter By Rating</h4>
            <select id="rating" aria-label="rating"
                onChange={(e)=>handleRatingFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
            </select>
            </div>
        </div>
   )
}

export default RestaurantFilter