/* eslint-disable react/prop-types */

const isImage=/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

import styles from "./DFViewer.module.css"

const DogFormViewer = (props)=>{

    const {name,height,weight,life_span,image} = props.infoDog;

    return(
        <div className={styles.card}>

            <form>
                
                <legend>Preview</legend>

                <div  className={styles.cardText}>
                    <ul>

                        <li className={styles.cardText}>{name}</li>
                        <li className={styles.cardText}>{height}</li>
                        <li className={styles.cardText}>{weight}</li>
                        <li className={styles.cardText}>{life_span}</li>

                    </ul>
                </div>


                { isImage.test(image) ? 
                (<img className={styles.image} src={image} alt={name}/>) 
                : (<span className={styles.cardText__Label}>Imagen</span>)}
            </form>

        </div>
    )

}

export default DogFormViewer;