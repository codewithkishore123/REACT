import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function User(){
    return(
        <>
         <button><Link to="orders">Orders</Link></button>
         <button><Link to="profile">Profile</Link></button>
          <h1>This is User Component</h1>
        <Outlet/>
        </>
      
    )
}

export default User;


export function Orders(){
    return(
        <h1>This is Orders Component</h1>
    )
}

export function Profile(){
    return(
        <h1>This is Profile Component</h1>
    )
}

