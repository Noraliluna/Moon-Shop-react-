import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utilities/customFetch";
import ItemDetail from "./ItemDetail";

const { products } = require('../utilities/getProducts').default.default.default;

function ItemDetailContainer() {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;