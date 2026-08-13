import Product from './Product'
function ProductList({props}){
    return(
        <>
         <h1>This is ProductList Component</h1>
         <Product props={props}></Product>
        </>
       
    )
}

export default ProductList;