// Store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer, { setActiveUser, setStateLogout } from "./reducers/UserSlice";
import projectReducer from "./reducers/ProjectSlice";
import notificationReducer from "./reducers/NotificationSlice";
import postReducer from "./reducers/PostSlice";
import { auth, db } from '../_api/firebase';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'] // only persist the user slice of the state
};

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  post: postReducer,
  notification: notificationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

auth.onAuthStateChanged(async (user) => {
  if (user) {
    try {
      const querySnapshot = await db.collection('Users').where('email', '==', user.email).get();

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          store.dispatch(setActiveUser({
            id: doc.id,
            ...doc.data()
          }));
        });
      } else {
        store.dispatch(setActiveUser({
          id: user.uid,
          user_name: user.email.split('@')[0],
          email: user.email,
          display_name: user.displayName,
          summary: '',
        }));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle the error appropriately
    }
  } else {
    store.dispatch(setStateLogout());
  }
});

const persistor = persistStore(store);

export { store, persistor };
