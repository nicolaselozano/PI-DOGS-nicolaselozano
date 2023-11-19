import {createSlice} from "@reduxjs/toolkit";

const actualDogs = {

    actualDogs:[],
    page:0,
    isLoading:false,
    filtredDogs:[],

}

export const dogsReducer = createSlice ({
    name:"actualDogs",
    initialState:actualDogs,
    reducers:{
        updateDogs: (state,/*action*/) => {

            state.isLoading = true;
            
        },
        setDogs: (state,action) =>{

            state.isLoading = false;
            state.actualDogs = action.payload.actualDogs;
            state.page = action.payload.page;

        },
        paginacion: (state,action) =>{
            state.filtredDogs = action.payload.filtredDogs;
            state.page = action.payload.page;
        }
    },
})

export const {updateDogs,setDogs,paginacion} = dogsReducer.actions;