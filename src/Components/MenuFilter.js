function MenuFilter(){
    return(
        <div>
            <h2>Filter By Category</h2>
            <select name="category" id="category">
                <option value="all">All</option>
                <option value="1">Appetizers</option>
                <option value="2">Main Course</option>
                <option value="3">Sides</option>
                <option value="4">Dessert</option>
                <option value="5">Drinks</option>
            </select>
        </div>
    )
}

export default MenuFilter