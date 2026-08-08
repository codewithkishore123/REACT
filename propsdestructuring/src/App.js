import logo from './logo.svg';
import './App.css';
import Product from './Product';

function App() {

    let prod1={
      price : "$100",
      name : "Iphone 14",
      color : "Black"

    }

  return (
        <Product {...prod1}/>

  )
}

export default App;
