import ItemCount from "./ItemCount";
import { RiDeleteBin2Fill } from "react-icons/ri";


const Item = ({id, title, description, image, colors, size, price, handleDelete, day}) => {
    return (
        <div className="card-container">
            <div className="day-menu">
                <h3>{day}</h3>
            </div>
            <div className="card-image">
                <img className="image" src={image} alt="Same alt value"/>
            </div>
            <div className="card-info">
                <h4>{title}</h4>
                <p>Colores: {colors}</p>
                <p>Talle: {size}</p>
                <p>Precio: ${price}</p>
                <p>Descripción: {description}</p>
                <ItemCount />
            </div>
            <button className="DeleteCard" onClick={() => handleDelete(id)}><RiDeleteBin2Fill /></button>
        </div>
    )
}

export default Item;