// Core Imports
import React from 'react';
import { useSelector } from 'react-redux';

// Component Imports
import DashboardNotification from './DashboardNotification';
import { selectActiveUser } from '../../_redux/reducers/UserSlice';

// Bootstrap Componets
import { ListGroup } from 'react-bootstrap';

export default function DashboardNotifications({ notifications }) {
    const activeUser = useSelector(selectActiveUser);
    return (
        <>
            <div className='dashboard-notifications-container'>
                <h2>{activeUser.display_name}'s Notifications</h2>
                <ListGroup as="ul">
                    {notifications.length > 0 ? (
                        notifications.map(notification => (
                            <DashboardNotification notification={notification} key={notification.id} />
                        ))
                    ) : (
                        <p className="no-notifications">No activity yet.</p>
                    )}
                </ListGroup>
            </div>
        </>
    )
}