import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import projectReducer from "./reducers/projectSlice";
import notificationReducer from "./reducers/notificationSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        project: projectReducer,
        notification: notificationReducer
    }
});

export default store;
