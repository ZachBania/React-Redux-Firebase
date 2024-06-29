// Core Imports
import React from 'react';

// Component Imports
import Notification from "./Notification";

// Bootstrap Imports
import Alert from 'react-bootstrap/Alert';

export default function Notifications({ notifications }) {
    return (
        <>
            <div className='notifications-container'>
                {notifications && notifications.map(notification => (
                    <Notification notification={notification} key={notification.id} />
                ))}
            </div>
        </>
    )
}