const {Dog, Temperament} = require("../db");

require("dotenv").config();

const {PERMITIR_POST} = process.env

const postDog = async (req,res) => {

    //temperament_id es un arreglo con id de temperamentos
    const {image, height, weight, life_span, name,temperament_id} = req.body;

    if(!PERMITIR_POST) return false;

    try {

        const [dogInstance, created] = await Dog.findOrCreate({

            where:{
                image,
                height,
                weight,
                life_span,
                name,
            },
            defaults:{
                image,
                height,
                weight,
                life_span,
                name,
            }

            
        });
        
        if (temperament_id) {
            for (const temp of temperament_id) {
              const temperament = await Temperament.findByPk(temp);
              if (temperament) {
                await dogInstance.addTemperament(temperament);
              }
            }
          }
      

        res.status(200).json({message:"Personaje posteado"});

    } catch (error) {
        res.status(500).json(error.message);
    }

}

module.exports = {
    postDog,
}