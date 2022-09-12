import { useState } from "react";

const ItemCount = () => {
    const [rate, setRate] = useState(0);
    
    const handleRate = () => {
        setRate (rate+1);
    }
    
    const handleDelete = () => {
        setRate (rate-1);
    }

    return(
        <div className="count">
            <button  className="btn btn-dark" onClick={handleRate}>+</button>{rate}
            <button  className="btn btn-dark" onClick={handleDelete}>-</button>
        </div>
    )
}

export default ItemCount;