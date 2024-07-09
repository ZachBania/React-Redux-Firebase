// Core Imports
import React from 'react';

// Component Imports

// Bootstrap Imports
import { ListGroup } from 'react-bootstrap';

export default function DashboardNotification({ notification }) {
  const bsListGroupItemTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  return (
    <>
      <ListGroup.Item className={"list-item-" + notification.type}>
        <div className='list-item-content'>
          <p>{notification.header}</p>
          <p>{notification.body}</p>
        </div>
      </ListGroup.Item>
    </>
  )
}