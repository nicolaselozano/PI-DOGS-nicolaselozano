
const URL = "http://localhost:3001/dogs/?name=";

const init= {

    method:"GET",

}

const getSearchByName = async (name) =>{

    try {
        
        const response = await fetch(`${URL}${name}`,{...init})

        const data = await response.json();

        return data;

    } catch (error) {
        
        throw new Error(error.message);

    }
    
}

export default getSearchByName;