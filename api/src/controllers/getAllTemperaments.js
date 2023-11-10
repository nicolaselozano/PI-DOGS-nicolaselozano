require("dotenv").config();

const {API_KEY} = process.env;

const URL = `https://api.thedogapi.com/v1/breeds`;

const getAllTemperaments = async ()=>{

    const response = await fetch(URL,{
        headers:{
            'x-api-key' : API_KEY,
        }
    })

    const data = await response.json();

    const arrTemperaments = data
        .map((breed) => breed.temperament)
        .filter((temp) => temp);

    const arr = arrTemperaments.flatMap((temp) => temp.split(", "));

    const uniqueTemperaments = Array.from(new Set(arr));

    return uniqueTemperaments;
}

module.exports = {
    getAllTemperaments,
}
