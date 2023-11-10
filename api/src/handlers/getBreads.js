const {GetAllBreeds} = require("../controllers/GetAllBreeds");

const getBreads = async (req,res) => {

    try {


        const response = await GetAllBreeds();

        res.status(200).json(response);
        
    } catch (error) {
        
        res.status(500).json(error.message);

    }

}

module.exports = {
    getBreads,
}