import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState([]);
  const handleClick = () => {
    setPeople(data);
  };
  const removeItem = (id) => {
    let filterPeople = people.filter((p) => p.id !== id);
    setPeople(filterPeople);
  };
  return (
    <>
      <h2>useState array example</h2>
      <button
        type="button"
        className="btn"
        style={{ margin: 20 }}
        onClick={handleClick}
      >
        Load People
      </button>
      <button
        type="button"
        className="btn"
        style={{ margin: 20 }}
        onClick={() => setPeople([])}
      >
        Delete People
      </button>

      {people.map((p) => {
        return (
          <div key={p.id} className="item">
            <h3>{p.name}</h3>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(p.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
