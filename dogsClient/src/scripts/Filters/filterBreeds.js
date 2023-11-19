import {TEMPERAMENT,ORIGINAPI,ORIGINDB,ASCENDENTE,DESCENDENTE} from "../filterOptions"
import { ascendente } from "./ascendente";
import { byOrigin } from "./byOrigin";
import { byTemperament } from "./byTemperament";
import { descendente } from "./descendente";

//filter.tempName es el temperamento que quiero filtrar
//filter.type es el tipo de filtrado que quiero hacer

export const filterBreeds = (data, filter) => {

    switch (filter.type) {
        case TEMPERAMENT:
            return data.filter((breed) => byTemperament(breed, filter.tempName));
        case ORIGINDB:
            return data.filter((breed) => byOrigin(breed));
        case ORIGINAPI:
            return data.filter((breed) => !byOrigin(breed));
        case ASCENDENTE:
            return ascendente(data);
        case DESCENDENTE:
            return descendente(data);
        default:
            return data;
    }
};
