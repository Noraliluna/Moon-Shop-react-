import Item from "./Item";

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
                title={product.title}
                price={product.price}
                colors={product.colors}
                size={product.size}
                description={product.description}
                thumbnail={product.thumbnail}
                handleDelete={handleDelete}/>)
            }
        </div>
    );
}

export default ItemList;