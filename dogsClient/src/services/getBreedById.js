const URL = "http://localhost:3001/dogs";


const init= {

    method:"GET",

}

export const getBreedById = async (id) =>{

    try {
        
        const response = await fetch(`${URL}/${id}`,{...init});

        const data = await response.json();

        return data;


    } catch (error) {
        
        throw new Error(error.message);

    }

}
