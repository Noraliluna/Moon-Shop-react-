/*import ItemDetailContainer from '../components/ItemDetailContainer';*/
import ItemListContainer from '../components/ItemListContainer';
import Navbar from '../components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const Home = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                {/*<Route path="/detalle" element={<ItemDetailContainer />} />*/}
            </Routes>
        </BrowserRouter>
    )
}

export default Home;