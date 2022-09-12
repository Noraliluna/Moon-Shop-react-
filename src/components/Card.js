const Card = ({id, title, description, thumbnail, colors, size, price, handleDelete}) =>{
    return(
        <div className="card-container">
            <div className="card-image">
                <img className="image" src={thumbnail} alt="Same alt value"/>
            </div>
            <div className="card-info">
                <h3>{title}</h3>
                <p>Colores: {colors}</p>
                <p>Talle: {size}</p>
                <p>Precio: ${price}</p>
                <p>Descripción: {description}</p>
            </div>
            <button onClick={() => handleDelete(id)}>Delete Card</button>
        </div>
    );
}

export default Card;