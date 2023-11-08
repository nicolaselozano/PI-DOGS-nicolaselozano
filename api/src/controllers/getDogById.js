
const {ByIdDB} = require("../handlers/ByIdDB");
const {ByIdAPI} = require("../handlers/ByIdAPI");



const getDogById = async (req,res) =>{

    try {

        //Busco el a la raza en la DB si existe

        const {idBreed} = req.params;

        if(isNaN(idBreed)){

            const responseDB = await ByIdDB(idBreed);

            if(responseDB){
                return res.status(200).json(responseDB)
            }else{
                return res.status(400).json({error:"Dog undefined in DB"})
            }
        }

        

        const data = await ByIdAPI(idBreed)

        res.status(200).json(data);

    } catch (error) {
        
        res.status(500).json(error.message);

    }

}

module.exports = {
    getDogById,
}