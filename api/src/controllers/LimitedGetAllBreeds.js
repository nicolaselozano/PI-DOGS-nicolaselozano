require("dotenv").config();
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds`

const {Dog,Temperament} = require("../db");

const LimitedGetAllBreeds = async (props) => {

    const {limit} = props;

    try {
        
        const [apiResponse,dbResponse] = await Promise.all([

            fetch(URL,{
                headers:{ 
                    'x-api-key' : API_KEY,
        
                }
            }),
            Dog.findAll({
                include: Temperament,
                limit:limit,
            }),

        ])


    
        const apiData= await apiResponse.json( );

        return [...apiData,...dbResponse];

    } catch (error) {
        throw new Error(error.message);
    }


}

module.exports = {

    LimitedGetAllBreeds,

}