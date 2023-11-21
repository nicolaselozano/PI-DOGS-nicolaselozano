/* eslint-disable no-unused-vars */
import { setDogs, updateDogs,paginacion,setDetail,cleanDetail } from "./dogsSilice"

import {filterBreeds} from "../scripts/Filters/filterBreeds";

import {getBreeds} from "../services/getBreeds"

import {getBreedById} from "../services/getBreedById"

const viewBreeds = 8;


export const getDogs = () => {
    // eslint-disable-next-line no-unused-vars
    return async (dispatch,getState) => {

        dispatch( updateDogs());

        try {


            const dataPages = await getBreeds();
            
            
            dispatch(setDogs({

                filterBreeds : dataPages,
                AllDogs:dataPages,
                page : 0

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
        if(filter && filter.reset == 1 ){
            next_page = 1;
            prev_page = -1;

        }
        next_page = Math.max(1, next_page);
        prev_page = Math.max(0, prev_page);

        const first_index = moveTo === "next" ? next_page * viewBreeds : prev_page * viewBreeds;

        let filtredBreeds = [];
        let filtering = [];
        if (filter) {
            filtering = filterBreeds(data, filter);
            filtredBreeds = [...filtering].splice(first_index, viewBreeds);
        } else {
            filtredBreeds = [...data].splice(first_index, viewBreeds);
        }

        if (moveTo === "filter"){
            dispatch(paginacion({
                actualDogs: filtredBreeds,
                filtredDogs: filtering,
                page:0,
            }));
        }else{
            dispatch(paginacion({
                actualDogs: filtredBreeds,
                filtredDogs: data,
                page: moveTo === "next" ? next_page : prev_page,
            }));
        }

    };
};



//Detail 

export const getDetailBreed = (id) =>{

    return async (dispatch, getState) => {

        try {
            
            const detailBreed = await getBreedById(id);

            dispatch(setDetail({
                detailBreed:detailBreed
            }));

        } catch (error) {

            throw new Error(error.message);

        }

    }

}

export const getCleanDetail = () =>{

    return (dispatch, getState) => {

        dispatch(cleanDetail())

    }

}