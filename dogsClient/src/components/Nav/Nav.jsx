import { Link,useLocation } from "react-router-dom";

const Nav = () => {

    const location = useLocation();

    return(
        <div>
            {location.pathname !== "/create" ? 
            <Link to="/create">Create Breed</Link>:
            <Link to="/home">Home</Link>}
            
        </div>
    )

}

export default Nav;