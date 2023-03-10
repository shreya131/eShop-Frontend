const cartReducers = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload }] };
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((e) => e.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default cartReducers;