import {createSlice} from "@reduxjs/toolkit";

const initialUserState = {

    name:"",
    username:"",
    email:"",

}

export const userReducer = createSlice({

    name:"user",
    initialState:null,
    reducers:{
        addUser: (state,action) =>{

            const {name,username,email} = action.payload;

            state.name = name;
            state.username = username;
            state.email = email;
            

        },
        changeEmail: (state, action) => {

            state.email = action.payload;
            
        }
    },

})