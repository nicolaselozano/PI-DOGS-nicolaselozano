const URL = "http://localhost:3001/dogs"

export const createDog = async (dataDog)=>{

    try {
        
        const response = await fetch(URL,{

            method:"POST",

            body: JSON.stringify(dataDog),

            headers:{"Content-Type": "application/json"}

        })

        if(response.ok){

            console.log("perro subido correctamente")

        }

    } catch (error) {
        throw new Error(error.message);
    }
    

}
