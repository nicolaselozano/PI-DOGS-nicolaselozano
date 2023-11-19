const {Dog,Temperament} = require("../db");

const ByIdDB = async (idBreed) => {

    const responseDB = await Dog.findOne({
        include: Temperament,
        where:{
           id:idBreed,
       }
    })

    return responseDB;
}


module.exports = {
    ByIdDB,
}