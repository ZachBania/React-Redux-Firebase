import { getNotifications, notificationError } from '../reducers/notificationSlice';
import { db } from '../../_api/firebase';
 
export const getNotificationsAsync = () => {
    return async (dispatch) => {
        try {
            const snapshot = await db.collection('Notifications').get();
            let notifications = [];
            snapshot.forEach(doc => {
                notifications.push({ id: doc.id, ...doc.data() });
            });
            dispatch(getNotifications(notifications));
        } catch (error) {
            dispatch(notificationError(error));
        }
    };
};
export const createNotification = (type, header, body, author) => {
    return async (dispatch) => {
        try {
            await db.collection('Notifications').add({ type, header, body, author });
            dispatch(getNotificationsAsync()); // Refresh notifications after adding a new one
        } catch (error) {
            dispatch(notificationError(error));
        }
    };
};

export const getNotificationsByAuthorAsync = (author) => {
    return async (dispatch) => {
        try {
            const snapshot = await db.collection('Notifications').where('author', '==', author).get();
            let notifications = [];
            snapshot.forEach(doc => {
                notifications.push({ id: doc.id, ...doc.data() });
            });
            dispatch(getNotifications(notifications));
        } catch (error) {
            dispatch(notificationError(error));
        }
    };
};
