import './App.css';
import GetApiData from './Utils';

function App() {
  const productData = GetApiData('https://fakestoreapi.com/products/1');

  return (
    <>
      <h1>Custom Hook Demo</h1>
      <div>{Object.keys(productData).join(', ')}</div>
      <div>{productData.title}</div>
      <div>{productData.price}</div>
    </>
  );
}

export default App;
