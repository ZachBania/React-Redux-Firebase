// Core Imports
import React from 'react';

// Component Imports

// Bootstrap Imports
import Alert from 'react-bootstrap/Alert';

export default function Notification( {notification}) {
  return (
    <>
      {/* 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', */}
      <div className='notification-container'>
        <Alert variant={notification.type ? notification.type : 'info' } dismissible>
          <Alert.Heading>{notification.header}</Alert.Heading>
          <p class="alert-body">{notification.body}</p>
        </Alert>
      </div>
    </>
  )
}