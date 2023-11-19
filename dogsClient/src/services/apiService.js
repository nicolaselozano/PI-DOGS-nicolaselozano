const URL = "http://localhost:3001/dogs"


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
    
                console.log("perro subido correctamente")
    
            }
        }


    } catch (error) {
        throw new Error(error.message);
    }
    

}
