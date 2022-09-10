import { BsCart } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";


const CartWidget = () =>{
    return(
        <div className="cart-number">
            <BsCart className="cart"/>
            <BsFillCircleFill className="circle" />
            <p className="number">1</p>
            
        </div>
    );
}

export default CartWidget;