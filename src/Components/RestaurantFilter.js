function RestaurantFilter(){
   return(
        <div>
            <div>
                <h4>Filter By Cuisine</h4>
            <select name="type" id="cuisine" aria-label="cuisine">
                <option value="all">All</option>
                <option value="American">American</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Thai">Thai</option>
            </select>
            </div>
            <div>
                <h4>Filter By Price</h4>
            <select id="price"  aria-label="price">
                <option value="all">All</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
            </select>
            </div>
            <div>
                <h4>Filter By Rating</h4>
            <select id="rating" aria-label="rating">
                <option value="all">All</option>
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