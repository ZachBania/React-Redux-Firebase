// Core Imports
import React from 'react';

// Component Imports

// Bootstrap Imports
import Alert from 'react-bootstrap/Alert';

export default function Notification({ notification }) {
  const bsAlertTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  return (
    <>

      <div className='notification-container'>
        <Alert variant={'info'} >
          <Alert.Heading>{notification.header}</Alert.Heading>
          <p class="alert-body">{notification.body}</p>
        </Alert>
      </div>
    </>
  )
}