import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import projectReducer from "./reducers/projectSlice";



const store = configureStore({
    reducer: {
        user: userReducer,
        project: projectReducer
    }
});

export default store;
