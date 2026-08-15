import logo from './logo.svg';
import './App.css';
import Home from './Home'
import { createContext } from 'react';
export const context = createContext();

function App() {

  let isAdmin="true"

let p={
  name:"ABCD",
  price:2000.00
}
  return (
    <>
      <context.Provider value={p}>
        <Home></Home>
      </context.Provider>
    </>
  );
}

export default App;