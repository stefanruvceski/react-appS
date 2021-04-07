import React from "react";

const User = ({ user }) => {
  return (
    <div class="person">
      <img src={user.img} alt={user.name} />

      <h3>{user.name}</h3>
      <p>{user.age}</p>
    </div>
  );
};

export default User;
