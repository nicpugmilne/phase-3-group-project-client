function MenuCard({name, image, price}){
    return(
        <div>
            <div className="menuCard">
                <img src={image} width={300} alt="food"></img>
                <h2>{name}</h2>
                <p>${price}</p>
                <button type="button" className="btn">Add To Cart</button>
            </div>
        </div>
    )
}

export default MenuCard
