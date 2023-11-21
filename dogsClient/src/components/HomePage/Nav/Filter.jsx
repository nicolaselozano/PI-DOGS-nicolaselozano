/* eslint-disable react/prop-types */
import SelectTemperament from "../../SelectTemperament/SelectTemperament";

const Filter = ({handleFilter}) => {

    const handleSelectTemp = (selectedTemp) =>{

        handleFilter({type : "TEMPERAMENT" , tempName : selectedTemp})

    }

    const handleSelectOrigin = (event) =>{

        handleFilter({type : event.target.value})

    }

    const handleSelectOrder = (event) =>{

        handleFilter({type : event.target.value})

    }
    return(

        <div>
            
            <SelectTemperament onSelectHome={handleSelectTemp}/>
            <div>
                <select onChange={handleSelectOrigin} name="ORIGIN" id="">
                        <option value="ALL">All</option>
                        <option value="ORIGINDB">DBBreeds</option>
                        <option value="ORIGINAPI">APIBreeds</option>
                </select>
            </div>

            <div>
                <select onChange={handleSelectOrder} name="ORDER" id="">
                        <option value="ASCENDENTE">Ascendente</option>
                        <option value="DESCENDENTE">Descendente</option>
                </select>
            </div>

        
        </div>
        
    )

}

export default Filter;