import React from "react";
import { useGlobalContext } from "../context";

const Details = () => {
  const {
    state: { current },
    deleteOne,
    details,
  } = useGlobalContext();
  return (
    <div className=" itm2 card">
      <div className=" card-header ">
        <button
          onClick={() => details(null)}
          className="btn btn-primary float-left"
        >
          Back
        </button>
        <h5 className="d-inline float-right">{current.name}</h5>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>

        <button
          onClick={() => {
            deleteOne(current.id);
            details(null);
          }}
          className="btn btn-danger float-right"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Details;
