const {Temperament} = require("../db");

const {getAllTemperaments} = require("../controllers/getAllTemperaments");

//Hago el get a la Api y despues hago un post a la DB
const getTemperaments = async (req,res) => {


    try {
        //Tomo los temperamentos sin que se repitan
        const tempResponse = await getAllTemperaments();


        const response = tempResponse.map(async(name) =>{

            const [temperament,created] = await Temperament.findOrCreate({

                where:{
                    name,
                },
                defaults:{
                    name,
                }
    
            })
            return {temperament, created}

        })

        const results = await Promise.all(response);

        res.status(200).json({ temperaments: results });




    } catch (error) {
        res.status(500).json(error.message);
    }

}

module.exports = {
    getTemperaments,
}