import React from "react";

import { useGlobalContext } from "./context";
import NavBar from "./navbar";
import CartContainer from "./cartContainer";
function Main() {
  console.log(useGlobalContext());
  const {
    state: { loading },
  } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <h1>Loading . . .</h1>
      </div>
    );
  } else {
    return (
      <main>
        <NavBar />
        <CartContainer />
      </main>
    );
  }
  return <></>;
}

export default Main;
