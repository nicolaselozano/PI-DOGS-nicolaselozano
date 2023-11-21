import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getDogs,setPaginacion } from "../../redux";
import Cards from "./Cards/Cards";
import Filter from "./Nav/Filter";


const HomePage = () => {

    const dispatch = useDispatch();

    const {isLoading,actualDogs,filtredDogs,AllDogs} = useSelector( state => state.dogs);

    const [actualFilter,setActualFilter] = useState({})


    useEffect(()=>{

        const fetchData = async () => {
            
            await dispatch(getDogs());
        }

        fetchData()

    },[])

    useEffect(()=>{
            
        dispatch(setPaginacion("prev", AllDogs));

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
            default:
                dispatch(setPaginacion("filter",AllDogs,{type:"ASCENDENTE",reset:0}));
                setActualFilter({type:"ASCENDENTE"})
                break;
        }

    }

    return(

            <div>
                <Filter handleFilter={handleFilter}/>
                {!isLoading ? <span>Loading</span> : null}
                <h1>HomePage</h1>

                <Cards breeds={actualDogs}/>
                <button onClick={handlePrevPage}>Prev</button>
                <button onClick={handleNextPage}>next</button>

            </div>

    )

}

export default HomePage;