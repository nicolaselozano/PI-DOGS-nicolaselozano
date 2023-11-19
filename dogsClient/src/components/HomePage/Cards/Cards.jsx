/* eslint-disable react/prop-types */

import getImage from "../../../services/getImage";

import Card from "../Card/Card";

const Cards = ({breeds}) => {


    // eslint-disable-next-line react/prop-types
   
    return(
        <div>
            {
                breeds ?
                breeds.map((data,index) => {

                    const {reference_image_id,image,dog_temperament,temperament,name,weight} = data;
                    
                    const verfiedTemp = dog_temperament || temperament;

                    const verifiedWeight = weight.length ? weight : weight.metric;

                    const verifiedImage = image.length > 0 ? Promise.resolve(image) : getImage(reference_image_id);
                
                    return(
                        <Card
                        key={index}
                        imagePromise={verifiedImage}
                        name = {name}
                        weight = {verifiedWeight}
                        temperament = {verfiedTemp}
                        />
                    )
                }) : null
            }
        </div>
    )

}

export default Cards;