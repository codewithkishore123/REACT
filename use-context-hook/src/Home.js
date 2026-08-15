import ProductList from "./ProductList";

function Home({props}){
    return(
        <>
          <h1>This is Home Component</h1>
          <ProductList props={props}></ProductList>
        </>
      

    )
}

export default Home;