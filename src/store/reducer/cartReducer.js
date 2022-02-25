import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from "../constants";
const INIT_STATE = {
  cart: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cartClone = state.cart.slice(0);
      cartClone.push(action.payload);
      return {
        ...state,
        cart: cartClone,
      };
    case UPDATE_CART:
      const cart_clone = state.cart.slice(0);
      const updatedItem = action.payload;
      const updationItemIndex = cart_clone.findIndex(
        (e) => e.id === updatedItem.id
      );
      cart_clone[updationItemIndex] = updatedItem;
      return {
        ...state,
        cart: cart_clone,
      };
    case DELETE_FROM_CART:
      const cart__clone = state.cart.slice(0);
      const product_id = action.payload;
      const updated_cart = cart__clone.filter((e) => e.id !== product_id);
      return {
        ...state,
        cart: updated_cart,
      };
    default:
      return state;
  }
};
