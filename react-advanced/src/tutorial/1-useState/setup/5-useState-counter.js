import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = (num) => {
    setCounter(counter + num);
  };
  const clickHandler2 = () => {
    setTimeout(() => {
      //ako zelimo samo za jedan da ga uvecamo koliko god puta kliknemo
      // setCounter(counter + 1);
      //ako zelimo sve klikove da registujemo i uvecamo
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <h2>Regular Counter</h2>
      <h1>{counter}</h1>
      <div>
        <button type="button" className="btn" onClick={() => clickHandler(-1)}>
          Decrease
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => clickHandler(-counter)}
        >
          Reset
        </button>
        <button type="button" className="btn" onClick={() => clickHandler(1)}>
          Increace
        </button>
      </div>
      <h2>More Complex Counter</h2>
      <h1>{counter}</h1>
      <button type="button" className="btn" onClick={() => clickHandler2()}>
        Increase Later
      </button>
    </>
  );
};

export default UseStateCounter;
