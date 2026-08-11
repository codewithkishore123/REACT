import { useParams, useLocation } from "react-router-dom";

function User(){
    const { id } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get("page");

    console.log({ id, page });

    return(
        <>
          <h1>This is User Component</h1>
          <p>User ID: {id}</p>
          <p>Page: {page}</p>
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

