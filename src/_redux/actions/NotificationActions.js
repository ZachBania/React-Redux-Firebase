import { db } from '../../_api/firebase';
import { getNotifications, getNotificationsByAuthor, getTimeoutNotifications, notificationError } from '../reducers/NotificationSlice';
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

export const deleteNotificationsByAuthorAsync = (author) => {
    return async (dispatch) => {
        try {
            const snapshot = await db.collection('Notifications').where('author', '==', author).get();
            snapshot.forEach(doc => {
                db.collection('Notifications').doc(doc.id).delete();
            });
            dispatch(getNotificationsByAuthorAsync(author));
        } catch (error) {
            dispatch(notificationError(error));
        }
    };
}

export const createNotification = (type, header, body, author) => {
    return async (dispatch) => {
        try {
            const timestamp = new Date().toString();
            // Create Notification in Firestore
            await db.collection('Notifications').add({ 
                type: type, 
                header: header, 
                body: body, 
                author: author, 
                timestamp: timestamp
            });
            // Updating state with new Notifications
            dispatch(getNotificationsAsync()); 

            // Temporary display timeout notification
            const snapshot = await db.collection('Notifications').where('author', '==', author).where('timestamp', '==', timestamp).get();
            let notification = [];
            snapshot.forEach(doc => {
                notification.push({ id: doc.id, ...doc.data() });
            });
            dispatch(getTimeoutNotifications(notification));
            setTimeout(() => {
                dispatch(getTimeoutNotifications([]));
            }, 3000);
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