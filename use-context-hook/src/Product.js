import { useContext } from "react";
import { context } from "./App";

function Product(){

    let value = useContext(context)
    return(
        <>
         <h1>This is Product Component</h1>
        <h1>ADMIN:{value.price}</h1>
        <h1>ADMIN:{value.name}</h1>
        </>
       
    )
}

export default Product;