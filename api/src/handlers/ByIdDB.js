const {Dog} = require("../db");

const ByIdDB = async (idBreed) => {

    const responseDB = await Dog.findOne({
        where:{
           id:idBreed,
       }
    })

    return responseDB;
}


module.exports = {
    ByIdDB,
}