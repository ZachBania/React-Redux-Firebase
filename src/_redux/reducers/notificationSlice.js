import { createSlice } from '@reduxjs/toolkit';

const initialState = { notifications: [] };
 
const notificationSlice = createSlice({
    name: 'notification',
    initialState,

    reducers: {
        getNotifications: (state, action) => {
            state.notifications = action.payload;
        },
        notificationError: (state, action) => {
            console.log(action.payload);
        },
    }
});

export const { getNotifications, notificationError } = notificationSlice.actions;
export default notificationSlice.reducer;
