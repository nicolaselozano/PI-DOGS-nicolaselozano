const URL = "https://dog-santuary-apidogs-pi.onrender.com/dogs";

const init= {

    method:"GET",

}


export const getBreeds = async () => {

    try {
        
        const response = await fetch(URL,{...init});

        if (response.ok){
            
            const data = await response.json();

            return  data

        }
    
    } catch (error) {
        
        throw new Error(error.message);

    }
    

}