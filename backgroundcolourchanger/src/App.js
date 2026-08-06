import React from 'react';
import './App.css';

 function App() {
  return(
    <div className="Wrapper">
             <h1>BackgroundColourChanger</h1>
             <input type="color"  onChange={(e) => {
              document.body.style.backgroundColor = e.target.value
             }}  />
    </div>
  )

  
}
export default App;
