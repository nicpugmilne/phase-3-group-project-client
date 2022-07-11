function ItemCard(){
    return(
        <div>
            <div className="itemCard">
                <img src={item.item_image_url}></img>
                <h2>{item.name}</h2>
                <button type="button" className="btn">Add To Cart</button>
            </div>
        </div>
    )
}

export default ItemCard