import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Cards from './containers/cards';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hello Coders!"/>
      <Cards />
    </>
  );
}

export default App;