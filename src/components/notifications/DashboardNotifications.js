// Core Imports
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Component Imports
import DashboardNotification from './DashboardNotification';
import { selectActiveUser, selectUserEmail } from '../../_redux/reducers/UserSlice';
import { deleteNotificationsByAuthorAsync } from '../../_redux/actions/NotificationActions';

// Bootstrap Componets
import { ListGroup } from 'react-bootstrap';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DashboardNotifications({ notifications }) {
    const activeUser = useSelector(selectActiveUser);
    const dispatch = useDispatch();
    const activeUserEmail = useSelector(selectUserEmail);
    


    function deleteNotifications() {
        // Delete Notifications
        dispatch(deleteNotificationsByAuthorAsync(activeUserEmail));
    }
    return (
        <>
            <div className='dashboard-notifications-container'>
                <h2>{activeUser.display_name}'s Notifications</h2>
                {notifications.length > 0 ? (
                    <ul className='dashboard-notifications-utilities-container'>
                        <li><FontAwesomeIcon icon={faSquareMinus} onClick={deleteNotifications} /></li>

                    </ul>
                ) : ('')}

                <ListGroup as="ul">
                    {notifications.length > 0 ? (
                        notifications.map(notification => (
                            <DashboardNotification notification={notification} key={notification.id} />
                        ))
                    ) : (
                        <ListGroup.Item className={"list-item-info"}>
                            <div className='list-item-content'>
                                <h3 className='notification-header'>Nothing found</h3>
                                <p className='notification-body'>No activty found for { activeUser.email }</p>
                            </div>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        </>
    )
}