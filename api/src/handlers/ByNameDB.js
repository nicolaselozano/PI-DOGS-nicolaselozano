const {Dog} = require("../db")

const getDogFromDB = async (name) => {

    const responseDB = await Dog.findOne({
        where:{
           name:name,
       }
   })

   return responseDB;

}

module.exports = {
    getDogFromDB,
}