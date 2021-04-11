import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
const AppContext = createContext();
const url =
  "https://api.fake.rest/189bf93b-4d78-4f00-86ac-76d87cfccbd1/task/list";

//state
const initialState = {
  loading: true,
  current: null,
  todos: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            let err = new Error(response.message);
            throw err;
          }
        })
        .then((response) => {
          getAll(response.data);
        })
        .catch((err) => alert(err.message));
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);
  //metode implementirane u reducer-u
  const getAll = (todos) => {
    dispatch({ type: "GET_ALL", payload: todos });
    console.log(todos);
  };
  const postOne = (todo) => {
    dispatch({ type: "POST", payload: todo });
  };
  const getOne = (id) => {
    dispatch({ type: "GET_ONE", payload: id });
  };
  const deleteOne = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const doneOne = (id) => {
    dispatch({ type: "DONE", payload: id });
  };

  const details = (id) => {
    dispatch({ type: "DETAILS", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        state,
        getAll,
        postOne,
        getOne,
        deleteOne,
        doneOne,
        details,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
