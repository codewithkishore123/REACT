import React from "react"
import {useState} from "react"

function App(){

    let price = 15000
    let [mobileName,updateMobileName] = useState("Redmi Note 8 ")

    return(
        <>
            <h1>MobileName : {mobileName}</h1>
            <h1>Price : {price}</h1>
            <input id="pName"/>
            <button onClick={()=>{
                let pName = document.getElementById("pName").value
                updateMobileName(pName)
            }
                }>UpdateMobile</button>
        </>
    )
}
export default App