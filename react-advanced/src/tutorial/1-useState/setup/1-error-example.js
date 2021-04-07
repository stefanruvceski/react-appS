import React from "react";

const ErrorExample = () => {
  let title = "Radnom title";

  const handleClick = () => {
    title = "blaaa";
  };

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
