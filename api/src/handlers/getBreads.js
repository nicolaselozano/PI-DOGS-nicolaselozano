const {GetAllBreeds} = require("../controllers/GetAllBreeds");
const {LimitedGetAllBreeds} = require("../controllers/LimitedGetAllBreeds")

const getBreads = async (req,res) => {

    const {limit} = req.query;

    try {

        if(limit){

            const response = await LimitedGetAllBreeds(limit);

            res.status(200).json(response);

        }else{

            const response = await GetAllBreeds();

            res.status(200).json(response);
        }

        
    } catch (error) {
        
        res.status(500).json(error.message);

    }

}

module.exports = {
    getBreads,
}