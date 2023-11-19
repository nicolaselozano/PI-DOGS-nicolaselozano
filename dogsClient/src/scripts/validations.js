const isImage=/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;


const validations = (data)=>{

    const errors = {};


    if(data.name === "") errors.name = "El nombre es un campo obligatorio";

    if(data.height==="" || !ismaxMin(data.height)) errors.height = "Solo se permiten numeros,tiene que especificar correctamente el rango";

    if(data.weight==="" || !ismaxMin(data.weight)) errors.weight = "Solo se permiten numeros,tiene que especificar correctamente el rango";

    if(data.life_span==="" || data.life_span.trim() === "years" || !ismaxMin(data.life_span) ) errors.life_span = "Solo se permiten numeros,tiene que especificar correctamente el rango";

    if(!isImage.test(data.image)) errors.image = "Tiene que ser el link valido a una imagen"

    if(!Array.isArray(data.temperament_id)) errors.temperament_id = "Tiene que tener al menos un Temperamento el perro"
    
    return errors;

}

const ismaxMin = (data) => {

    if(data.length >= 2) return true;

    const dataArr = data.split("-");
    
    if(isNaN(dataArr[0] || dataArr[1]) || dataArr[0] > dataArr[1]) return false;

    return true;

}

export default validations;