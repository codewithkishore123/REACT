import './App.css';
import { useRef } from 'react';

function App() {

  let ele = useRef(100)

  return (
   <>
          <h1 ref={ele} className="active">This is UseRef Demo</h1>
          <button onClick={()=>{
            console.log(ele)
            ele.current.classList.toggle("active")
          ele.current.classList.toggle("inactive")
          }}
            >Click</button>
        
   </>
  );
}

export default App;
