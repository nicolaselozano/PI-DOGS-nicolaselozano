const URL = "http://localhost:3001/dogs/temperaments";

const init= {

    method:"GET",

}

const getTemperaments = async () => {

    try {
        
        const response = await fetch(URL,init);

        if(response.ok){
            
            console.log("Temperamenstos tomados correctamente");

            const data = await response.json();
            return data;
        }

    } catch (error) {
        
        throw new Error(error.message);

    }

}

export default getTemperaments;