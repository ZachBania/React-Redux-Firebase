// Core Imports
import React from 'react';

// Component Imports
import {formatNotificationTimestamp} from '../../_redux/actions/NotificationActions';
// Bootstrap Imports
import Alert from 'react-bootstrap/Alert';

export default function Notification( {notification}) {
  const bsAlertTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  return (
    <>

      <div className='notification-container'>
        <Alert variant={ (notification.type && bsAlertTypes.includes(notification.type)) ? notification.type : 'info' } >
          <Alert.Heading>{notification.header}</Alert.Heading>
          <p class="alert-body">{notification.body}</p>
          <p class="alert-timestamp">{formatNotificationTimestamp(notification.timestamp)}</p>
        </Alert>
      </div>
    </>
  )
}