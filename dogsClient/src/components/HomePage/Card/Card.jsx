/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import imgExample from "../../../assets/ejemplodogo.jpg";
import {Link} from "react-router-dom";
import styles from "./card.module.css";

const Card = ({imagePromise,name,weight,temperament,id}) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
  
    useEffect(() => {
      setImageLoaded(false);
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
            setImageLoaded(true);
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
        
        <div className={styles.card}>

            <div className={styles.cardText}>
              <Link className={styles.cardText__Link} to={`detail/${id}`}>
                <h2 className={styles.cardText__Label}>{name}</h2>
              </Link>
              <h2 className="">{"Weight : "}{weight}</h2>
              <h2 className="">{temperament}</h2>
            </div>

            {imageLoaded ? (
                <img className={styles.image} src={imageUrl} alt={name}/>
            ) : (
                <div>Loading Image...</div>
            )}
            
        </div>
    )

}

export default Card;