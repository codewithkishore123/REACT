import {useState, useEffect} from 'react';
import './App.css';
import ProductCard from './ProductCard';

function App() {
let [products,updateProducts] = useState([]);

useEffect(
   ()=>{
    getProducts()
   },[]
  )

async function getProducts(){

  let res = await fetch('https://fakestoreapi.com/products')
  let productList = await res.json()
  updateProducts(productList)
  console.log(productList)

}

if(products.length === 0){
  return <h1>Fetching Data...</h1>
}

  return (
    <>
     <div className="product-list">
      {
          products.map((p)=> <ProductCard {...p} key={p.id} ></ProductCard>)
      }
           
    </div>
    </>
   
    
       
  )
}

export default App;
