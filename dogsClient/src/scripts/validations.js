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
        
    if (data.length < 7)return false;

    if(data.length === 7) return true;

    
    if(data.length === 11){

        const deleteYear = data.replace(" years","")

        const dataArr = deleteYear.split("-");
        const firstNumber = parseInt(dataArr[0]);
        const secondNumber = parseInt(dataArr[1]);
    
        if (secondNumber < firstNumber) {
            return false;
        }
        return true;
    
    }else return false;

}

export default validations;