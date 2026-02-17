import { useState } from "react";

const Users = () => {
  const [users] = useState([
    { id: 1, name: "Vaibhav", role: "Admin" },
    { id: 2, name: "Rahul", role: "User" },
  ]);

  return (
    <div>
      <h2>User Management</h2>
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
