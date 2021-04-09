const reducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_ITEMS":
      return { ...state, loading: false, cart: action.payload };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE":
      const temp = state.cart.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: temp };

    case "DECREASE":
      const temp2 = state.cart.map((item) => {
        if (item.id === action.payload && item.amount > 0) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return { ...state, cart: temp2 };
    case "GET_TOTALS":
      const { total, amount } = state.cart.reduce(
        (cartTotal, item) => {
          const itemTotal = item.price * item.amount;
          cartTotal.amount += item.amount;
          cartTotal.total += itemTotal;
          cartTotal.total =
            Math.round(cartTotal.total * 100 + Number.EPSILON) / 100;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      return { ...state, total: total, amount: amount };
    case "LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
};
export default reducer;
