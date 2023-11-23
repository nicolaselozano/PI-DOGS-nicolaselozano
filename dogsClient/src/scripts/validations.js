const isImage=/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;


const validations = (data)=>{

    
    const errors = {};


    if(data.name === "") errors.name = "El nombre es un campo obligatorio";

    if(data.height==="" || !ismaxMin(data.height)) errors.height = "Solo se permiten numeros,tiene que especificar correctamente el rango";

    if(data.weight==="" || !ismaxMin(data.weight)) errors.weight = "Solo se permiten numeros,tiene que especificar correctamente el rango";

    const lifeSpanMaxMin = ismaxMin(data.life_span);
    
    if(data.life_span==="" || data.life_span.trim() === "years" || !lifeSpanMaxMin ) errors.life_span = "Solo se permiten numeros,tiene que especificar correctamente el rango de menor a mayor valido";

    if(!isImage.test(data.image)) errors.image = "Tiene que ser el link valido a una imagen"

    if(!Array.isArray(data.temperament_id)) errors.temperament_id = "Tiene que tener al menos un Temperamento el perro"
    
    return errors;

}

const ismaxMin = (data) => {


    if(data.length === 6 || data.length === 12) data = data.slice(0, -1);
    
    
    if(data.length >= 11 || data.length > 4 ){

        let dataArr ="";

        if(data.includes(" years")){
            const deleteYear = data.replace(" years","")
            dataArr = deleteYear.split("-");
        }else{
            dataArr = data.trim().split("-");
        }

        const firstNumber = parseInt(dataArr[0]);
        const secondNumber = parseInt(dataArr[1]);
    
        if (secondNumber < firstNumber) {
            return false;
        }
        return true;
    
    }else return true;

}

export default validations;