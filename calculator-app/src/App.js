import './App.css';
import Keypad from './keypad';
import {useState} from 'react';


function App() {

  let [num, setNum] = useState("");

  function handleClick(value){
    setNum(num+value);
  }

  function handleClear(){
    setNum(0);
  }
  
  function handleEqual(){
    try{
      setNum(eval(num));
    } catch (error) {
      setNum("Error");
    }
  }

  return (
    <div className="container">
       <h1>Calculator App</h1>
       <div className="calculator">
             <input  className="output"  value={num} type="text" placeholder="Enter a number"/>
             <Keypad handleClick={handleClick} handleClear={handleClear} handleEqual={handleEqual}></Keypad>

       </div>
    </div>
  );
}

export default App;
