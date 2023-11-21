/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import imgExample from "../../../assets/ejemplodogo.jpg";
import {Link} from "react-router-dom";
 
const Card = ({imagePromise,name,weight,temperament,id}) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
  
    useEffect(() => {
      const loadImage = async () => {
        try {
          const url = await imagePromise;
          setImageUrl(url);

          const img = new Image();
          img.onload = () => {
            setImageLoaded(true);
          };
          img.src = url;
          img.onerror = () =>{
            setImageUrl(imgExample);
          }
        } catch (error) {

          
          console.error("Error getting image URL:", error);
          setImageLoaded(true);
        }
      };
  
      loadImage();
    }, [imagePromise]);
    return(
        
        <div>

            <Link to={`detail/${id}`}>
              <h2 className="">{name}</h2>
            </Link>
            <h2 className="">{weight}</h2>
            <h2 className="">{temperament}</h2>
            {imageLoaded ? (
                <img src={imageUrl} alt={name} className="" />
            ) : (
                <div>Loading Image...</div>
            )}
            
        </div>
    )

}

export default Card;