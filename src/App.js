import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hello Coders!"/>
    </>
  );
}

export default App;