import { useState } from "react";

const ItemCount = () => {
    const [rate, setRate] = useState(0);
    
    const handleRate = () => {
        setRate (rate+1 );
    }
    
    const handleDelete = () => {
        setRate (rate-1);
    }

    const Carro = () =>{
        alert(`You have select ${rate}`)
    }

    return(
        <div className="count">
            <button  className="btn btn-dark" onClick={handleRate}>+</button>{rate}
            <button  className="btn btn-dark" onClick={handleDelete}>-</button>
            <button  className="AddWidget" onClick={Carro}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;