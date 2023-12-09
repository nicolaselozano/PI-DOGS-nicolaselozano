/* eslint-disable react/prop-types */

import getImage from "../../../services/getImage";

import Card from "../Card/Card";

import styles from "./cards.module.css";

const Cards = ({breeds}) => {


    // eslint-disable-next-line react/prop-types
   
    return(
        <div className={styles.container}>
            {
                breeds && Array.isArray(breeds) ?
                breeds.map((data,index) => {

                    const {reference_image_id,image,Temperaments,temperament,name,weight,id} = data;

                    const verfiedTemp = isTempDB(Temperaments,temperament);  

                    const verifiedWeight = weight.length ? weight : weight.metric;

                    const verifiedImage = !reference_image_id ? Promise.resolve(image) : getImage(reference_image_id);
                

                    return(

                        <div key={index}>
                            <Card
                            id={id}
                            imagePromise={verifiedImage}
                            name = {name}
                            weight = {verifiedWeight}
                            temperament = {verfiedTemp}
                            />
                        </div>

                    )
                }) : null
            }
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

export default Cards;

