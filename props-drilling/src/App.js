import logo from './logo.svg';
import './App.css';
import Home from './Home'

function App() {


  let isAdmin = 'true'
  return (
    <>
       <h1>This is App Component</h1>
       <Home props={isAdmin}></Home>
    </>
  );
}

export default App;
