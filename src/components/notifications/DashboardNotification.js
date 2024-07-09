// Core Imports
import React from 'react';

// Component Imports
import { formatNotificationTimestamp } from '../../_redux/actions/NotificationActions';

// Bootstrap Imports
import { ListGroup } from 'react-bootstrap';

export default function DashboardNotification({ notification }) {
  const bsListGroupItemTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  return (
    <>
      <ListGroup.Item className={"list-item-" + notification.type}>
        <div className='list-item-content'>
          <h3 className='notification-header'>{notification.header}</h3>
          <p className='notification-body'>{notification.body}</p>
          <p className='notification-timestamp'>{formatNotificationTimestamp(notification.timestamp)}</p>
        </div>
      </ListGroup.Item>
    </>
  )
}