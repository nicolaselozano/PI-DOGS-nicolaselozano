require("dotenv").config();
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds`

const {Dog} = require("../db");

const GetAllBreeds = async () => {


    try {
        
        const [apiResponse,dbResponse] = await Promise.all([

            fetch(URL,{
                headers:{ 
                    'x-api-key' : API_KEY,
        
                }
            }),
            Dog.findAll(),

        ])


    
        const apiData= await apiResponse.json( );

        return [...apiData,...dbResponse];

    } catch (error) {
        throw new Error(error.message);
    }


}

module.exports = {

    GetAllBreeds,

}