import React, {useEffect, useState} from 'react';
import { WrapperDetail} from './styledComponents';
import ItemList from "./ItemList";
import { useParams } from 'react-router';
import customFetch from '../utilities/customFetch';
const { products } = require('../utilities/getProducts').default;


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return(
        <WrapperDetail>
            <ItemList items={datos}/>
        </WrapperDetail>
    );
}

export default ItemListContainer;