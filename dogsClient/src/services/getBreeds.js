import {filterBreeds} from "../scripts/Filters/filterBreeds"

const URL = "http://localhost:3001/dogs";

const init= {

    method:"GET",

}


export const getBreeds = async () => {

    try {
        
        const response = await fetch(URL,{...init});

        if (response.ok){
            
            const data = await response.json();


            console.log(data)
            return  data

        }
    
    } catch (error) {
        
        throw new Error(error.message);

    }
    

}