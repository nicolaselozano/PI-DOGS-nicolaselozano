require("dotenv").config();
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/images/`

//busca la url en el json
const imageById = async (id) => {

    const response = await fetch(`${URL}${id}`,{

        headers:{

            'x-api-key' : API_KEY,
            
        }
        
    })

    const data = await response.json();

    return data.url || null;

}

module.exports = {

    imageById,

}

