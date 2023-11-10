const {getDogFromDB} = require("../controllers/ByNameDB")
const {getDogFromAPI} = require("../controllers/ByNameAPI")

const getDogByName = async (req,res) => {

    try {

        
        const {name} = req.query;

        console.log(name)
        //Busco el a la raza en la DB si existe
        
        const responseDB = await getDogFromDB(name);

       if(responseDB){
           return res.status(200).json(responseDB)
       }

       const data = await getDogFromAPI(name)
       res.status(200).json(data);

    } catch (error) {
        
        res.status(500).json(error.message);

    }

}

module.exports = {

    getDogByName,

}
