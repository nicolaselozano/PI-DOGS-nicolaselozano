// const URL = "http://localhost:3001/dogs" SI LO EJECUTAS DE FORMA LOCAL , HAY QUE REMPLAZARLOS EN TODOS LOS SERVICIOS
const URL = "https://dog-santuary-apidogs-pi.onrender.com/dogs" 


const init= {

    method:"POST",
    headers:{"Content-Type": "application/json"},

}

export const createDog = async (dataDog)=>{

    
    try {
        
        if(Object.values(dataDog).every((data) => data)){
            const response = await fetch(URL,{
                ...init,
                body:JSON.stringify(dataDog)
            })
    
            if(response.ok){
                
                alert("perro subido correctamente");
    
            }
        }


    } catch (error) {
        throw new Error(error.message);
    }
    

}
