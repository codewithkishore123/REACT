
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact';
import Login from './Login';
import User from './User';
import {Orders,Profile} from './User'



function Header(){
  return(
    <ul>
      <li ><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/user">User</Link></li>
    </ul>
  )
}

function App() {
  return (
    <>
  
     <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="user" element={<User/>}/>
            <Route path="user/:id" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </>
  
  );
}

export default App;
