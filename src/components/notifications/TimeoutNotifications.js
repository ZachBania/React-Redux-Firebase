// Core Imports
import React from 'react';
import { selectUserEmail, selectUserName } from '../../_redux/reducers/UserSlice';
import { useSelector } from 'react-redux';

// Component Imports
import TimeoutNotification from './TimeoutNotification';

export default function NotificationsTimeout({ notifications }) {
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    return (
        <>
            <div className='notifications-container'>
                {notifications.length > 0 ? (
                    notifications.map(notification => (
                        <TimeoutNotification notification={notification} key={notification.id} />
                    ))
                ) : ('')}
            </div>
        </>
    )
}