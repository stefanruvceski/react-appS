import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("sta");
  const [err, setErr] = useState(false);
  return (
    <>
      <button type="button" className="btn" onClick={() => setErr(!err)}>
        Toggle Error
      </button>
      {err ? <h1>Error . . .</h1> : <h1>{text}</h1>}
    </>
  );
};

export default ShortCircuit;
