// Core Imports
import React from 'react';
import { selectUserEmail, selectUserName } from '../../_redux/reducers/userSlice';
import { useSelector } from 'react-redux';

// Component Imports
import Notification from "./Notification";

export default function Notifications({ notifications }) {
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    return (
        <>
            <div className='notifications-container'>
                {notifications.length > 0 ? (
                    notifications.map(notification => (
                        <Notification notification={notification} key={notification.id} />
                    ))
                ) : (  
                    <p className="no-notifications">No notifications found</p>
                )}
            </div>
        </>
    )
}