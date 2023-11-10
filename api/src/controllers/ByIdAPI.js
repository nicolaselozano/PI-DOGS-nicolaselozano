
require("dotenv").config();
const {API_KEY} = process.env;

const URL = `https://api.thedogapi.com/v1/breeds/`;

const ByIdAPI = async (idBreed) => {

    const responseApi = await fetch(`${URL}${idBreed}`, {

        headers:{
            'x-api-key' : API_KEY,
        }
    
    })

    const data = await responseApi.json();

    return data;

}

module.exports = {
    ByIdAPI,
}