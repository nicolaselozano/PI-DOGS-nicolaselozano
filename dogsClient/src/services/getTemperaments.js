const URL = "https://dog-santuary-apidogs-pi.onrender.com/dogs/temperaments";

const init= {

    method:"GET",

}

const getTemperaments = async () => {

    try {
        
        const response = await fetch(URL,init);

        if(response.ok){

            const data = await response.json();
            return data;
        }

    } catch (error) {
        
        throw new Error(error.message);

    }

}

export default getTemperaments;