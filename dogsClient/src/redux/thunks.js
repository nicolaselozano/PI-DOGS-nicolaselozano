import { setDogs, updateDogs,paginacion } from "./dogsSilice"

import {filterBreeds} from "../scripts/Filters/filterBreeds";

import {getBreeds} from "../services/getBreeds"

const viewBreeds = 8;


export const getDogs = () => {
    // eslint-disable-next-line no-unused-vars
    return async (dispatch,getState) => {

        dispatch( updateDogs());

        try {


            const dataPages = await getBreeds();
            
            
            dispatch(setDogs({

                actualDogs : dataPages,
                page : -1

            }))

        } catch (error) {
            
            throw new Error(error.message)

        }

    }
}


//filtro los perros segun su especificacion si la hay y me muevo por las paginas

export const setPaginacion = (moveTo, data, filter) => {
    return (dispatch, getState) => {
        dispatch(updateDogs());
        const state = getState();

        let next_page = state.dogs.page + 1;
        let prev_page = state.dogs.page - 1;
        next_page = Math.max(1, next_page);
        prev_page = Math.max(0, prev_page);

        const first_index = moveTo === "next" ? next_page * viewBreeds : prev_page * viewBreeds;

        let filtredBreeds = [];
        if (filter) {
            const filtering = filterBreeds(data, filter);
            filtredBreeds = [...filtering].splice(first_index, viewBreeds);
        } else {
            filtredBreeds = [...data].splice(first_index, viewBreeds);
        }

        console.log(state.dogs.page);

        dispatch(paginacion({
            filtredDogs: filtredBreeds,
            page: moveTo === "next" ? next_page : prev_page,
        }));
    };
};
