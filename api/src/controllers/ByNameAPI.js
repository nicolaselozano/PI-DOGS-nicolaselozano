const { response } = require("express");

require("dotenv").config();

const {API_KEY} = process.env;

const URL = `https://api.thedogapi.com/v1/breeds/search?q=`;

const getDogFromAPI = async (name) => {

    const response = await fetch(`${URL}${name}`,{
        headers:{
            'x-api-key' : API_KEY,
        }
    })

    const data = await response.json();

    return data;

}

module.exports = {
    getDogFromAPI,
}