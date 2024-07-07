// Core Imports
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Component Imports
import ManageUser from "./ManageProfile";

// Bootstrap Imports
import Stack from 'react-bootstrap/Stack';

const UserListRow = ({ user }) => {

  return (
    <>
      <tr key={user.id}>
        <td><p>{user.display_name ? user.display_name : ''}</p></td>
        <td><p>{user.user_name ? user.user_name : ''}</p></td>
        <td><p>{user.email ? user.email : ''}</p></td>
        <td><p>{user.summary ? user.summary : ''}</p></td>
      </tr>
    </>
  );
}

export default UserListRow;