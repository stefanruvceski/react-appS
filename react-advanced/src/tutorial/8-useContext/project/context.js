import React, { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";

const AppContext = createContext();
const url = "https://course-api.com/react-useReducer-cart-project";
const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getTotals = () => {
    dispatch({ type: "GET_TOTALS" });
  };

  const loading = () => {
    dispatch({ type: "LOADING" });
  };
  const displayItems = (items) => {
    dispatch({ type: "DISPLAY_ITEMS", payload: items });
  };

  useEffect(() => {
    getTotals();
  }, [state.cart]);

  const fetchData = async () => {
    loading();
    const response = await fetch(url);
    const cart = await response.json();
    displayItems(cart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        increase,
        decrease,
        remove,
        clearCart,
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
