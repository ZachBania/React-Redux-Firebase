import { db } from '../../_api/firebase';
import { getNotifications, getNotificationsByAuthor, notificationError } from '../reducers/notificationSlice';
import { format } from 'date-fns'; 

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

export const getNotificationsByAuthorAsync = (author) => {
    return async (dispatch) => {
        try {
            const snapshot = await db.collection('Notifications').where('author', '==', author).get();
            let notifications = [];
            snapshot.forEach(doc => {
                notifications.push({ id: doc.id, ...doc.data() });
            });
            dispatch(getNotificationsByAuthor(notifications));
        } catch (error) {
            dispatch(notificationError(error));
        }
    };
};

export const createNotification = (type, header, body, author) => {
    return async (dispatch) => {
        try {
            await db.collection('Notifications').add({ 
                type: type, 
                header: header, 
                body: body, 
                author: author, 
                timestamp:new Date().toString()
            });
            dispatch(getNotificationsAsync()); 
        } catch (error) {
            dispatch(notificationError(error));
        }
    };
};

export const formatNotificationTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const formatedDate = format(date, 'M-d-y, h:mm a');
    return formatedDate;
};