import { Link,useLocation } from "react-router-dom";
import styles from "./nav.module.css"

const Nav = () => {

    const location = useLocation();

    const id = location.pathname.split("/").at(-1);

    return(
        <div className={styles.container__nav}>
            <div className={styles.link__container}>

                {location.pathname !== "/create" && location.pathname !== `/home/detail/${id}` ? 
                <Link to="/create" className={styles.link}>Create Breed</Link>:
                <Link to="/home" className={styles.link}>Home</Link>}
                
            </div>
        </div>

    )

}

export default Nav;