import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const fetchData = async () => {
    fetch(url)
      .then((response) => {
        if (response.status === 200) return response.json();
        else {
          setErr(response.statusText);
          setUser(null);
          let err = Error(response.statusText);
          err.response = response;
          throw err;
        }
      })
      .then((response) => {
        setUser(response);
      })
      .catch((error) => setErr(error.message));
    // setUser(user);
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  const [user, setUser] = useState("");
  const [err, setErr] = useState("");
  if (user === "") return <h2>Loading . . .</h2>;
  else if (user === null) return <h2>Error . . .</h2>;
  else return <h2>{user.login}</h2>;
};

export default MultipleReturns;
