import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getDogs,setPaginacion, updateDogs } from "../../redux";
import Cards from "./Cards/Cards";
import Filter from "./Filter/Filter";
import styles from "./homepage.module.css"

const HomePage = () => {

    const dispatch = useDispatch();

    const {isLoading,actualDogs,filtredDogs,AllDogs} = useSelector( state => state.dogs);

    const [actualFilter,setActualFilter] = useState({})


    useEffect(()=>{

        const fetchData = async () => {
            
            await dispatch(getDogs());
        }

        fetchData()

        return () =>{
            dispatch(updateDogs())
        }

    },[])

    useEffect(()=>{
            
        handleFilter("ASCENDENTE");

    },[AllDogs])




    const handleNextPage = () =>{

        dispatch(setPaginacion("next",filtredDogs,actualFilter))

    }
    const handlePrevPage = () =>{

        dispatch(setPaginacion("prev",filtredDogs,actualFilter))

    }

    const handleFilter = (filterType) =>{
        
        switch (filterType.type) {
            case "TEMPERAMENT":
                dispatch(setPaginacion("filter",AllDogs,{type:"TEMPERAMENT",tempName:filterType.tempName,reset:1}));
                setActualFilter({type:"TEMPERAMENT",tempName:filterType.tempName})
                break;
            case "ORIGINDB":
                dispatch(setPaginacion("filter",AllDogs,{type:"ORIGINDB",reset:1}));
                setActualFilter({type:"ORIGINDB"})
                break;
            case "ORIGINAPI":
                dispatch(setPaginacion("filter",AllDogs,{type:"ORIGINAPI",reset:1}));
                setActualFilter({type:"ORIGINAPI"})
                break;
            case "ASCENDENTE":
                dispatch(setPaginacion("filter",filtredDogs,{type:"ASCENDENTE",reset:0}));
                setActualFilter({type:"ASCENDENTE"})
                break;
            case "DESCENDENTE":
                dispatch(setPaginacion("filter",filtredDogs,{type:"DESCENDENTE",reset:0}));
                setActualFilter({type:"DESCENDENTE"})
                break;
            case "W_ASCENDENTE":
                dispatch(setPaginacion("filter",filtredDogs,{type:"W_ASCENDENTE",reset:0}))
                setActualFilter({type:"W_ASCENDENTE"})
                break;
            case "W_DESCENDENTE":
                dispatch(setPaginacion("filter",filtredDogs,{type:"W_DESCENDENTE",reset:0}))
                setActualFilter({type:"W_DESCENDENTE"})
                break;
            default:
                dispatch(setPaginacion("filter",AllDogs,{type:"ASCENDENTE",reset:0}));
                setActualFilter({type:"ASCENDENTE"})
                break;
        }

    }

    return(

            <div className={styles.container}>
                <Filter handleFilter={handleFilter}/>
                {!isLoading ? <span>Loading</span> : null}
                <h1>HomePage</h1>

                <Cards breeds={actualDogs}/>
                <div>
                    <button className={styles.container__pagination} onClick={handlePrevPage}>Prev</button>
                    <button className={styles.container__pagination} onClick={handleNextPage}>next</button>
                </div>


            </div>

    )

}

export default HomePage;