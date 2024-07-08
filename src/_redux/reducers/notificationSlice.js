import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    notifications: [], 
    notificationsByAuthor: [],
    timeoutNotifications: [],
};
 
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
        getTimeoutNotifications: (state, action) => {
            state.timeoutNotifications = action.payload;
        },
        notificationError: (state, action) => {
            console.log(action.payload);
        },
    }
});

export const { getNotifications, getNotificationsByAuthor, getTimeoutNotifications, notificationError } = notificationSlice.actions;
export default notificationSlice.reducer;
