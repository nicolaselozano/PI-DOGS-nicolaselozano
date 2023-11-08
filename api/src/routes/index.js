const { Router } = require('express');


const {postDog} = require("../controllers/postDog");

const {getBreads} = require("../controllers/getBreads");

const {getDogById} = require("../controllers/getDogById");

const {getTemperaments} = require("../controllers/getTemperaments");

const {getDogByName} = require("../controllers/getDogByName");



const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/",postDog);
router.get("/", (req,res) =>{

    const {name} = req.query;

    //corroboro que name este para hacer la peticion por query 
    
    if(name){
        getDogByName(req,res);
    }else{
        getBreads(req,res);
    }

});

router.get("/temperaments",getTemperaments);

router.get("/:idBreed",getDogById);




module.exports = router;
