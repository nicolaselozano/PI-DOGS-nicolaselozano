import { Link,useLocation } from "react-router-dom";
import styles from "./nav.module.css"
import { useState,useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { searchBreedByname, setPaginacion } from "../../redux";

const Nav = () => {

    const location = useLocation();

    let filtredBreeds = useSelector(state => state.dogs.filtredDogs)

    const dispatch = useDispatch();

    const id = location.pathname.split("/").at(-1);

    const [searchName, setSearchName] = useState("");

    const handleChange = (event) =>{

        const actualInput = event.target.value;

        setSearchName(actualInput);

    }

    useEffect(() => {

        dispatch(setPaginacion("prev", filtredBreeds));
    
    }, [filtredBreeds, dispatch]);
    

    const handleClickSearch = async () => {

        const name = searchName.toLowerCase();
        dispatch(searchBreedByname(name));

    };

    return(

        <div  className={styles.container__nav}>

                <div  className={styles.link__container}>

                    {location.pathname !== "/" ? <Link to="/" className={styles.link}>Inicio</Link> :null}
                    {location.pathname !== "/create" && location.pathname !== `/home/detail/${id}` ? 
                    <Link to="/create" className={styles.link}>Create</Link>:
                    <Link to="/home" className={styles.link}>Home</Link>}
                    {location.pathname === "/home" ? <div className={styles.container__search}>
                    <input value={searchName} onChange={handleChange}></input>
                    <button onClick={handleClickSearch}>Search</button>
                    </div>: null}
                    
                </div>
            
            <h1 className={styles.container__title}>The Dogs Santuary</h1>

        </div>


    )

}

export default Nav;