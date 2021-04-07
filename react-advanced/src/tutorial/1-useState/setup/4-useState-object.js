import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 25,
    message: "first message",
  });

  const handleClick = () => {
    setPerson({ ...person, message: "hello world" });
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h5>{person.message}</h5>
      <button type="button" className="btn" onClick={handleClick}>
        Change
      </button>
    </div>
  );
};

export default UseStateObject;
