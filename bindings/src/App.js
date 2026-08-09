import './App.css';
import {useState} from 'react';

function App() {
  let [num, setNum] = useState(0);

  return (
    <div>
           <input 
             type="number" 
             onChange={(e) => setNum(parseInt(e.target.value))} 
           />
           <button onClick={() => setNum(num)}>Ok</button>
           <h3>Current Number: {num}</h3>
    </div>
  )
}

export default App;
