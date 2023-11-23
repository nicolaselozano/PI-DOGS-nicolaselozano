/* eslint-disable no-unused-vars */
import { setDogs, updateDogs,paginacion,setDetail,cleanDetail,setSearchBreed } from "./dogsSilice"

import {filterBreeds} from "../scripts/Filters/filterBreeds";

import {getBreeds} from "../services/getBreeds"

import {getBreedById} from "../services/getBreedById"

import { useNavigate } from 'react-router-dom';

import getSearchByName from "../services/getSearchByName";

const viewBreeds = 8;


export const getDogs = () => {
    // eslint-disable-next-line no-unused-vars
    return async (dispatch,getState) => {
        const state = getState();
        dispatch( updateDogs());

        try {


            const dataPages = await getBreeds();
            
            
            dispatch(setDogs({

                filterBreeds : dataPages,
                AllDogs:dataPages,
                page : state.page

            }))

        } catch (error) {
            
            throw new Error(error.message);

        }

    }
}

//busco las razas por nombre usando el metodo get search

export const searchBreedByname = (name) =>{

    return async (dispatch,getState) =>{

        const state = getState();

        try {
            
            const dataSearch = await getSearchByName(name);

            

            if(!dataSearch.length){

                const getBreedsDB = state.dogs.AllDogs.filter((breed) => isNaN(breed.id));

                const filterDB = getBreedsDB.filter((breed) => breed.name.includes(name));
                
                dispatch(setSearchBreed({
                    filtredDogs : filterDB,
                }))

            }else{
                dispatch(setSearchBreed({
                    filtredDogs : dataSearch,
                }))
            }


        } catch (error) {

            throw new Error(error.message);

        }

    }

}

//filtro los perros segun su especificacion si la hay y me muevo por las paginas

export const setPaginacion = (moveTo, data, filter) => {
    return (dispatch, getState) => {
        dispatch(updateDogs());
        const state = getState();
        
        let next_page = state.dogs.page + (moveTo === "next" ? 1 : 0);
        let prev_page = state.dogs.page + (moveTo === "prev" ? -1 : 0);
        
        if(filter && filter.reset == 1 ){
            next_page = 1;
            prev_page = -1;

        }

        next_page = Math.max(1, next_page);
        prev_page = Math.max(0, prev_page);

        const startIndex = (moveTo === "next" ? next_page : prev_page) * viewBreeds;

        const filtering = filter ? filterBreeds(data, filter) : data;
        let filtredBreeds = filtering.slice(startIndex, startIndex + viewBreeds);

        if (!filtredBreeds[0] && moveTo === "next") {
            next_page--;
            const newIndex = state.dogs.page * viewBreeds;
            filtredBreeds = filtering.slice(newIndex, newIndex + viewBreeds);
        }

        const pageData = moveTo === "filter" ? { actualDogs: filtredBreeds, filtredDogs: filtering, page: 0 } :
            { actualDogs: filtredBreeds, filtredDogs: data, page: moveTo === "next" ? next_page : prev_page };

        dispatch(paginacion(pageData));
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