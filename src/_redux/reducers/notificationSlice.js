import { createSlice } from '@reduxjs/toolkit';

const initialState = { notifications: [], notificationsByAuthor: [] };
 
const notificationSlice = createSlice({
    name: 'notification',
    initialState,

    reducers: {
        getNotifications: (state, action) => {
            state.notifications = action.payload;
        },
        getNotificationsByAuthor: (state, action) => {
            state.notificationsByAuthor = action.payload;
        },
        notificationError: (state, action) => {
            console.log(action.payload);
        },
    }
});

export const { getNotifications, getNotificationsByAuthor, notificationError } = notificationSlice.actions;
export default notificationSlice.reducer;
