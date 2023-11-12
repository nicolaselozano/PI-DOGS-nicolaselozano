import { useState } from "react";
import {createDog} from "../../services/apiService"
import DogFormViewer from "../DogFormViewer/DogFormViewer";
 
const DogForm = () => {

    const [infoDog,setInfoDog] = useState({

        name:"",
        height:"",
        weight:"",
        life_span:"",
        image:"",

    })

    const handleChange = (event) => {

        const {name,value} = event.target;

        setInfoDog({
            ...infoDog,
            [name]:value
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        createDog(infoDog);

    }

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Create Dog</legend>
                    <div htmlFor="name">
                        <label>Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={infoDog.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div htmlFor="height">
                        <label>Height</label>
                        <input
                        type="text"
                        id="height"
                        name="height"
                        value={infoDog.height}
                        onChange={handleChange}
                        />
                    </div>
                    <div htmlFor="weight">
                        <label>Weight</label>
                        <input
                        type="text"
                        id="weight"
                        name="weight"
                        value={infoDog.weight}
                        onChange={handleChange}
                        />
                    </div>
                    <div htmlFor="life_span">
                        <label>Life span</label>
                        <input
                        type="text"
                        id="life_span"
                        name="life_span"
                        value={infoDog.life_span}
                        onChange={handleChange}
                        />
                    </div>
                    <div htmlFor="image">
                        <label>Image URL</label>
                        <input
                        type="text"
                        id="image"
                        name="image"
                        value={infoDog.image}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit" >Submit</button>
                </fieldset>
            </form>

            <DogFormViewer infoDog={infoDog}/>
        </div>

    );

}

export default DogForm;