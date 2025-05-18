import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

export default UserInfo;
