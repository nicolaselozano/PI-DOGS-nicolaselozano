

const isImage=/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;



const DogFormViewer = (props)=>{

    const {name,height,weight,life_span,image} = props.infoDog;

    return(
        <div>

            <form>
                <legend>Preview</legend>
                <ul>
                    <li>{name}</li>
                    <li>{height}</li>
                    <li>{weight}</li>
                    <li>{life_span}</li>
                    { isImage.test(image) ? 
                    (<img src={image} alt={name}/>) 
                    : (<li>Imagen</li>)}
                </ul>
            </form>

        </div>
    )

}

export default DogFormViewer;