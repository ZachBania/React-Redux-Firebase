// Core Imports
import React from 'react';

// Component Imports
import Notification from './Notification';

export default function Notifications({ notifications }) {

    return (
        <>
            <div className='notifications-container'>
                {notifications.length > 0 ? (
                    notifications.map(notification => (
                        <Notification notification={notification} key={notification.id} />
                    ))
                ) : (
                    <p className="no-notifications">No activity yet.</p>
                )}
            </div>
        </>
    )
}