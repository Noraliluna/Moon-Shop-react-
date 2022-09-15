import ItemCount from "./ItemCount";
import React, {useEffect, useState} from 'react';
import getList from "../utilities/getProducts";
import ItemList from "./ItemList";
import Loader from "../utilities/Loader";

const ItemListContainer = (props) => {

    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getList()
            .then((response) => setArrayList(response))
            .catch((err) => console.error(err))
            .finally(()  => setLoading(false))
    }, [])

    return(
        <>
            {loading ? <Loader /> : <ItemList products={arrayList}/>}
            <p>{props.greeting}</p>
            <ItemList products={arrayList}/>
            <ItemCount />
        </>
    );
}

export default ItemListContainer;