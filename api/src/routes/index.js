const { Router } = require('express');


const {postDog} = require("../handlers/postDog");

const {getBreads} = require("../handlers/getBreads");

const {getDogById} = require("../handlers/getDogById");

const {getTemperaments} = require("../handlers/getTemperaments");

const {getDogByName} = require("../handlers/getDogByName");

const {getBreedsImage} = require("../handlers/getBreedsImage")

const router = Router();



router.post("/",postDog);

// router.delete("/delete",);

router.get("/", (req,res) =>{

    const {name} = req.query;

    //busco por nombre o traigo todas las razas
    
    if(name)getDogByName(req,res);

    else getBreads(req,res);

});

router.get("/temperaments",getTemperaments);

router.get("/:idBreed",getDogById);

router.get("/image/:id",getBreedsImage);




module.exports = router;
