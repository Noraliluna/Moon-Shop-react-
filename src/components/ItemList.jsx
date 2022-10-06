/*import Item from "./Item";

const ItemList = ( { products }) => {
    const handleDelete = (id) => {
        console.log(`Deleting card ${id}`);
    }

    return(
        <div className="cards-container">
            {
                products.map( (product) => 
                <Item 
                key={product.id}
                day={product.day}
                title={product.title}
                price={product.price}
                colors={product.colors}
                size={product.size}
                description={product.description}
                image={product.image}
                handleDelete={handleDelete}/>)
            }
        </div>
    );
}

export default ItemList;*/


import Item from "./Item";
import {ProductsContainer} from "./styledComponents";

const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} image={item.image[0]} />)
            : <p>Cargando...</p>
        }
        </ProductsContainer>
    );
}

export default ItemList;