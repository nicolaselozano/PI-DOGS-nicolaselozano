import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getDogs,setPaginacion } from "../../redux";
import Cards from "./Cards/Cards";

const HomePage = () => {

    const dispatch = useDispatch();

    const {isLoading,actualDogs,filtredDogs,page} = useSelector( state => state.dogs);

    const [actualPage,setActualPage] = useState(0);

    useEffect(()=>{

        const fetchData = async () => {
            
            await dispatch(getDogs());
        }

        fetchData()

    },[dispatch])

    useEffect(()=>{

        
        console.log("soy el home, actual dogs:",actualDogs)
            
        dispatch(setPaginacion("next", actualDogs));

    },[actualDogs, dispatch])



    const handleNextPage = () =>{
        console.log(actualDogs)

        dispatch(setPaginacion("next",actualDogs))

    }
    const handlePrevPage = () =>{
        console.log(actualDogs)

        dispatch(setPaginacion("prev",actualDogs))

    }

    return(

            <div>

                {!isLoading ? <span>Loading</span> : null}
                <h1>HomePage</h1>
                <Cards breeds={filtredDogs}/>
                <button onClick={handlePrevPage}>Prev</button>
                <button onClick={handleNextPage}>next</button>

            </div>

    )

}

export default HomePage;