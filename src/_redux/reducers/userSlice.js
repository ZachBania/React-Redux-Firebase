import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  users: [], 
  activeUser: { 
    id: null,
    user_name: null, 
    email: null,
    display_name: null,
    summary: null,
  } 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.activeUser.id = action.payload.id;
      state.activeUser.user_name = action.payload.user_name;
      state.activeUser.email = action.payload.email;
      state.activeUser.display_name = action.payload.display_name;
      state.activeUser.summary = action.payload.summary;
    },
    setStateLogout: state => {
      state.activeUser.id = null;
      state.activeUser.user_name = null;
      state.activeUser.email = null;
      state.activeUser.display_name = null;
      state.activeUser.summary = null;
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.activeUser = action.payload;
    },
    userError: (state, action) => {
      console.log(action.payload);
    }
  }
});

export const selectActiveUser = state => state.user.activeUser;
export const selectUserName = state => state.user.activeUser.user_name;
export const selectUserEmail = state => state.user.activeUser.email;

export const isAuthenticated = state => state.user.activeUser.user_name !== null;

export const { setActiveUser, setStateLogout, getUser, updateUser, getUsers, userError } = userSlice.actions;
export default userSlice.reducer;
