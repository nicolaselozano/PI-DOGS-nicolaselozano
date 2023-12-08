const URL = "https://dog-santuary-apidogs-pi.onrender.com/dogs/image/"

const init= {

    method:"GET",

}


const getImage = async (id) =>{
     
    try {
        
        const response = await fetch(`${URL}${id}`,{...init});

        if (response.ok){

            const data = await response.json();

            return data;

        }

    } catch (error) {
        
        throw new Error(error.message);

    }

}

export default getImage;