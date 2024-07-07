// Core Imports
import React from "react";

// Component Imports
import UserListRow from "./UserListRow";

//Bootstrap Imports
import { Table } from "react-bootstrap";

const UserList = ({ users }) => {
    return (
        <div className="user-list-container">

            <Table>
                <thead>
                    <tr>
                        <th><p>Display Name</p></th>
                        <th><p>User Name</p></th>
                        <th><p>Email</p></th>
                        <th><p>Summary</p></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => (
                        <UserListRow user={user} key={user.id} />
                    ))}
                </tbody>
            </Table>

        </div>
    )
}

export default UserList;



