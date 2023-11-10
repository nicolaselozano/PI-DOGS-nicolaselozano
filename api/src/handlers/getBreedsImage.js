const {imageById} = require("../controllers/imageById");

//Tomo el URL de la imagen pasandole el id de referencia de la misma

const getBreedsImage = async (req,res) => {

    const {id} = req.params;

    try {
        
        const response = await imageById(id);

        res.status(200).json(response);

    } catch (error) {
        
        res.status(500).json(error.message);

    }
    


}

module.exports = {
    getBreedsImage,
}