import { useState,useEffect,useRef } from "react";
import {createDog} from "../../services/apiService"
import DogFormViewer from "../DogFormViewer/DogFormViewer";
import SelectTemperament from "../SelectTemperament/SelectTemperament";
import validations from "../../scripts/validations";
import styles from "./dogForm.module.css";


const DogForm = () => {

    const [infoDog,setInfoDog] = useState({

        name:"",
        height:"",
        weight:"",
        life_span:"",
        image:"",
        temperament_id:[],

    })

    const [errors, setErrors] = useState({})

  
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }, [infoDog]); 
    
    const handleChange = (event) => {
        //setInfoDog
            if (event && event.target) {

                const { name, value, selectionStart } = event.target;
                

                if (name === "life_span" || name === "weight" || name === "height" ){

                    let limitValue = value.replace(/[^0-9-]/g, '').substring(0, 5);
                    
                    const isDeletingDash = selectionStart === 3 && event.nativeEvent.inputType === 'deleteContentBackward' ||event.key === 'Delete';
            
                  
                  const creatingValue = isDeletingDash
                    ? limitValue= limitValue.slice(0, -1) : limitValue ;
                    let concatValue = creatingValue.length == 3
                    ? `${creatingValue.slice(0, 2)}-${creatingValue.slice(2)}`
                    : creatingValue;
                    

                        if (/-.*-/.test(concatValue)) concatValue = "";

                        if(name === "life_span"){

                            setInfoDog((prevInfoDog)=>({
                                ...prevInfoDog,
                                [name]: concatValue.concat(" years"),
                            }));

                        }else{

                            setInfoDog((prevInfoDog)=>({
                                ...prevInfoDog,
                                [name]: concatValue,
                            }));

                        }

                    }else{

                        setInfoDog((prevInfoDog)=>({
                            ...prevInfoDog,
                            [name]: value,
                        }));

                    }
                    setErrors(validations({...infoDog,[name]:value}))
        }


        //SetError

        

    };

    const handleSelectTemperament = (selectedTemp) => {

        setInfoDog({
          ...infoDog,
          temperament_id: selectedTemp ? selectedTemp.temperament_id : null,
        });

    };
    const handleSubmit = (event) =>{
        event.preventDefault();

        const isInfoDogEmpty = Object.values(infoDog).some((value) => !value);

        if (isInfoDogEmpty) {
            alert("Por favor, completa los campos antes de enviar el formulario.");
            return;
        }else if (Object.values(errors).every((error) => !error)) {

            alert("se Esta subiendo el perro a la DB...");

            createDog(infoDog);

        }

    }

    return(

        <div className={styles.container}>
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
                        {
                            errors.name ? (<span className="">{errors.name}</span>) : (<span className=""></span>)
                        }
                    </div>
                    <div htmlFor="height">
                        <label>Height</label>
                        <input
                        ref={inputRef}
                        type="text"
                        id="height"
                        name="height"
                        value={infoDog.height}
                        onChange={handleChange}
                        />
                        {
                            errors.height ? (<span className="">{errors.height}</span>) : (<span className=""></span>)
                        }
                    </div>
                    <div htmlFor="weight">
                        <label>Weight</label>
                        <input
                        ref={inputRef}
                        type="text"
                        id="weight"
                        name="weight"
                        value={infoDog.weight}
                        onChange={handleChange}
                        />
                        {
                            errors.weight ? (<span className="">{errors.weight}</span>) : (<span className=""></span>)
                        }
                    </div>
                    <div htmlFor="life_span">
                        <label>Life span</label>
                        <input
                        ref={inputRef}
                        type="text"
                        id="life_span"
                        name="life_span"
                        value={infoDog.life_span}
                        onChange={handleChange}
                        />
                        {
                            errors.life_span ? (<span className="">{errors.life_span}</span>) : (<span className=""></span>)
                        }
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
                        {
                            errors.image ? (<span className="">{errors.image}</span>) : (<span className=""></span>)
                        }
                    </div>
                    <div>
                        <SelectTemperament onSelect={handleSelectTemperament}/>
                        {
                            errors.temperament_id ? (<span className="">{errors.temperament_id}</span>) : (<span className=""></span>)
                        }
                    </div>
                    <button type="submit" >Submit</button>
                </fieldset>
            </form>

            <DogFormViewer infoDog={infoDog}/>
        </div>

    );

}

export default DogForm;