import { configureStore } from "@reduxjs/toolkit";

import {userReducer} from "../redux/userSlice";

import {dogsReducer} from "../redux/dogsSilice";

export const store = configureStore({

    reducer:{
        user:userReducer.reducer,
        dogs:dogsReducer.reducer,
    }

})