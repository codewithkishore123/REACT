
import './App.css';
import { useState } from 'react';

function App() {

  let [count,setCount] = useState(0);

  return (
     <div className="Wrapper">
      <h1>Counter</h1>
        <button disabled={count==10} onClick={()=>{
          if(count<10)
          setCount(count+1)
        }} className="plus">+</button>
        <span>{count}</span>
        <button  disabled={count==0}  onClick={()=>{
          if(count>0)
          setCount(count-1)
        }} className="minus">-</button>
     </div>
  )
}

export default App;
