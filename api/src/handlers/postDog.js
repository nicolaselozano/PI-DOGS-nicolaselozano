const {Dog, Temperament} = require("../db");

const postDog = async (req,res) => {

    const {image, height, weight, life_span, name,temperament_id} = req.body;

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

        if(temperament_id){
            const temp = await Temperament.findByPk(temperament_id);
            await dogInstance.addTemperament(temp);
        }
       

        res.status(200).json({message:"Personaje posteado"});

    } catch (error) {
        res.status(500).json(error.message);
    }

}

module.exports = {
    postDog,
}