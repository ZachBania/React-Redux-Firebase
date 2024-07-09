// Core Imports
import React from "react";

// Component Imports

// Bootstrap Imports

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