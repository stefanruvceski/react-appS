import React, { useState } from "react";
import { data } from "./data";
import User from "./user";

const Main = () => {
  console.log(data);
  const [users, setUsers] = useState(data);
  console.log(users);
  return (
    <div>
      <h4>{users.length} birthdays today</h4>
      {users.map((user) => {
        console.log(user);
        return <User key={user.id} user={user} />;
      })}
      <button type="button" className="btn" onClick={() => setUsers([])}>
        Clear All
      </button>
    </div>
  );
};

export default Main;
