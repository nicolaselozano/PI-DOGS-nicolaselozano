require("dotenv").config();
const IMG_URL = `https://cdn2.thedogapi.com/images/`

//busca la imagen pasando directamente la url con su id
const imageById = async (id) => {

    const response = `${IMG_URL}${id}.jpg`;

    console.log(response)
    return response;

}

module.exports = {

    imageById,

}

