import {useEffect} from "react";
import {useState} from "react";

function TestEffect() {
           
    let [Timer,setTimer]=useState(0)

    useEffect(() => {
        console.log("useEffect called");
    },[]);

   
    return (
        <>
         <button onClick={() => setTimer(Timer + 1)}>Click</button>
            <h1>Test Effect Component
                {console.log("render called")}
                Timer: {Timer}
            </h1>
        </>
           
    
    );

}

export default TestEffect;