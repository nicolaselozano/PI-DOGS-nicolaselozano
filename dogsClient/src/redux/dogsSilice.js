/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit";

const actualDogs = {
    AllDogs:[],
    actualDogs:[],
    page:0,
    isLoading:false,
    filtredDogs:[],
    detailBreed:{}

}

export const dogsReducer = createSlice ({
    name:"actualDogs",
    initialState:actualDogs,
    reducers:{
        updateDogs: (state,/*action*/) => {

            state.isLoading = true;
            state.actualDogs = [];
            
        },
        setDogs: (state,action) =>{

            state.isLoading = false;
            state.filtredDogs = action.payload.AllDogs;
            state.page = action.payload.page;
            state.AllDogs = action.payload.AllDogs;

        },
        paginacion: (state,action) =>{
            state.actualDogs = action.payload.actualDogs;
            state.filtredDogs = action.payload.filtredDogs;
            state.page = action.payload.page || 0;
        },
        setDetail: (state,action) =>{
            state.detailBreed = action.payload.detailBreed;
        },
        cleanDetail: (state,/*action*/) => {
            state.detailBreed = {}
            state.actualDogs = []
        },
        setSearchBreed: (state,action) =>{
            state.filtredDogs = action.payload.filtredDogs;
        },
    },
})

export const {updateDogs,setSearchBreed,setDogs,paginacion,setDetail,cleanDetail} = dogsReducer.actions;