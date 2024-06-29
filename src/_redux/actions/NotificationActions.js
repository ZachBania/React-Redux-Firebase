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
