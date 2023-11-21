/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import imgExample from "../../../assets/ejemplodogo.jpg";
import getDetail from "../../../hooks/getDetail";
import getImage from "../../../services/getImage";


const Detail = () =>{
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const detailBreed = getDetail();

    const {name,reference_image_id,image,weight,height,life_span,Temperaments,temperament} = detailBreed; 
    //ESTABA DESTRUCTURANDO BREEED QUE TIENE TODOS LOS DATOS DEL PERRO
    

    const verifiedTemps = isTempDB(Temperaments,temperament);

    const verifiedWeight = weight && weight.metric ? weight.metric : "N/A";
  
    const verifiedHeight = height && height.metric ? height.metric : "N/A";
    
    useEffect(() => {
        let isMounted = true;
      
        const loadImage = async () => {
          try {
            const verifiedImage = image ? Promise.resolve(image) : getImage(reference_image_id);
            const url = await verifiedImage;
      
            if (isMounted) {
              setImageUrl(url);
              setImageLoaded(true);
            }
            
          } catch (error) {
            if (isMounted) {
              console.error("Error getting image URL:", error);
              
              setImageLoaded(true);
            }
          }
        };
      
        loadImage();
      
        return () => {
          isMounted = false;
        };
      }, [image, reference_image_id]);
    return(
        <div>


            <h2 className="">{name}</h2>

            <h2 className="">{verifiedWeight}</h2>
            <h2 className="">{verifiedHeight}</h2>

            <h2 className="">{life_span}</h2>

            <h2 className="">{verifiedTemps}</h2>
            {imageLoaded ? (
                <img src={imageUrl||imgExample} alt={name} className="" />
            ) : (
                <div>Loading Image...</div>
            )}
            
        </div>
    )

}

const isTempDB = (tempDB,tempAPI) => {
    if(tempAPI){
        return tempAPI;
    }else{
        if(!tempDB) return "No Temperaments";
        const dbTemps = tempDB.map((temp) => temp.name);
        return dbTemps.join("  ");
    }

}

export default Detail;