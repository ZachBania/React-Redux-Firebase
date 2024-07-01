import { configureStore } from "@reduxjs/toolkit";
import userReducer, { setActiveUser, setUserLogOutState } from "./reducers/userSlice";
import projectReducer from "./reducers/projectSlice";
import notificationReducer from "./reducers/notificationSlice";
import { auth } from '../_api/firebase';

const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    notification: notificationReducer,
  },
});

// Listen for authentication state changes and update the Redux store
auth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch(setActiveUser({
      userName: user.displayName,
      userEmail: user.email,
    }));
  } else {
    store.dispatch(setUserLogOutState());
  }
});

export default store;
