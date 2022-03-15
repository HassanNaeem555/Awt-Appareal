import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_FROM_CART,
  EMPTY_CART,
} from "../constants";
const INIT_STATE = {
  cart: [],
};

const Cart = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cartClone = state.cart.slice(0);
      let { item_to_add, item_variants } = action.payload;
      let { id, verient_name } = item_variants;
      item_to_add.selectedVarientId = id;
      item_to_add.selectedVarientName = verient_name;
      item_to_add.quantity = 1;
      item_to_add.total_price = item_to_add.product_price;
      cartClone.push(item_to_add);
      return {
        ...state,
        cart: cartClone,
      };
    case UPDATE_CART:
      const cart_clone = state.cart.slice(0);
      const updatedItem = action.payload;
      const updationItemIndex = cart_clone.findIndex(
        (e) => e.selectedVarientId === updatedItem.selectedVarientId
      );
      cart_clone[updationItemIndex] = updatedItem;
      return {
        ...state,
        cart: cart_clone,
      };
    case DELETE_FROM_CART:
      const cart__clone = state.cart.slice(0);
      const product_id = action.payload;
      const updated_cart = cart__clone.filter(
        (e) => e?.selectedVarientId !== product_id
      );
      return {
        ...state,
        cart: updated_cart,
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default Cart;
