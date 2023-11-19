/* eslint react/prop-types: 0 */
import { useEffect, useState } from "react";
import getTemperaments from "../../services/getTemperaments.js"
import style from "./SelectTemperament.module.css"

//Selector desplegable de multiple opcion, con un filtro por el id del Temperamento
const SelectTemperament = ({onSelect}) => {

    //temperaments es la propiedad que viene en el json con los temps

    const [allTemperaments, setAllTemperaments] = useState(new Map());
    const [allActualTemps,setAllActualTemps] = useState(new Map());
    const [actTemp, setActTemp] = useState("");

    //selectedTemps es donde estan los temps para el form
    const [selectedTemps,setSelectedTemps] =  useState([])

    useEffect( () => {
        
        const fetchData = async ()=> {

            try {
                const {temperaments} = await getTemperaments(); 
                const tempMap = new Map();
                temperaments.forEach((temp) => {
                    tempMap.set(temp.temperament.name,temp.temperament.id)
                });
                setAllTemperaments(tempMap);
                setAllActualTemps(tempMap);
            } catch (error) {
                console.error("useEfect error",error.message);
            }

        }

        fetchData();
    },[]);

    useEffect(() => {
        // Ensure that state updates do not occur during rendering
        setAllActualTemps(allTemperaments);
        setAllActualTemps(allActualTemps);
      }, [allTemperaments,allActualTemps]);

    const handleChange = (event) => {

        const filterTerm = event.target.value.toLowerCase();
        
        
        const filteredTemps = Array.from(allTemperaments.entries()).filter(
            ([clave]) => clave.toLowerCase().startsWith(filterTerm)
        );
        setAllActualTemps(new Map(filteredTemps));
        setActTemp(event.target.value);
    };
    


    const options = Array.from(allActualTemps.entries()).map(([clave, valor]) => (
        <option key={valor} value={clave} >
            {clave}
        </option>
    ));

    const handleAddTemperament = () => {
        const actualTemp = allTemperaments.get(actTemp);
        const existTemp = selectedTemps.find((temp) => temp === actualTemp);
        if(!existTemp && actualTemp){

            setSelectedTemps(prevSelectedTemps => {
                const updatedSelectedTemps = [...prevSelectedTemps, actualTemp];
                onSelect(updatedSelectedTemps ? {temperament_id: updatedSelectedTemps} : null);
                return updatedSelectedTemps;
            });
        }
      };

    const handleResetTemperaments = () =>{
        setSelectedTemps([]);
        onSelect({temperament_id:null})
    }
      

    const getKeyByValue = (map, targetValue) => {
        for (const [key, value] of map.entries()) {
          if (value === targetValue) {
            return key;
          }
        }
        return null; 
    }

    return(
        <div className={style.container}>
            <label htmlFor="temperament">Temperament</label>
            <input
                type="text"
                placeholder="Buscar..."
                value={actTemp}
                onChange={handleChange}
            />
            <select
                id="temperament"
                value={actTemp || ""}
                onChange={handleChange}
            >
                <option value="" disabled>
                Seleccione un temperamento
                </option>
                {options}
            </select>
            <button type="button" onClick={handleAddTemperament}>add</button>
            <button type="button" onClick={handleResetTemperaments}>Reset Temperaments</button>
            <ul>
                {selectedTemps ? selectedTemps.map((temp, index) => (
                    <li key={index}>{getKeyByValue(allTemperaments,temp)}</li>
                ))
                : null}
            </ul>
        </div>
    )

}


export default SelectTemperament;