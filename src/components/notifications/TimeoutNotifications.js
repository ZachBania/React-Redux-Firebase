// Core Imports
import React from 'react';

// Component Imports
import TimeoutNotification from './TimeoutNotification';

export default function NotificationsTimeout({ notifications }) {

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