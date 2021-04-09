import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const id = parseInt(useParams().id);
  const person = data.filter((p) => p.id === id)[0];
  return (
    <div>
      <h1>{person.name}</h1>
      <Link to="/people" className="btn">
        Back
      </Link>
    </div>
  );
};

export default Person;
