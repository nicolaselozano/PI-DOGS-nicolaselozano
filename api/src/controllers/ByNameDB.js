const {Dog,Temperament} = require("../db");
const getDogFromDB = async (name) => {

    const responseDB = await Dog.findOne({
        include: Temperament,
        where:{
           name:name,
       }
   })

   return responseDB;

}

module.exports = {
    getDogFromDB,
}