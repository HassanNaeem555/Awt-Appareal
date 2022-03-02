import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_FROM_CART,
  EMPTY_CART,
} from "../constants";

export function addInCart(item_to_add) {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item_to_add,
    });
  };
}
export function updateCart(item_to_update) {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_CART,
      payload: item_to_update,
    });
  };
}
export function deleteProductFromCart(cart_item_id) {
  return async (dispatch) => {
    dispatch({
      type: DELETE_FROM_CART,
      payload: cart_item_id,
    });
  };
}
export function emptyCart() {
  return async (dispatch) => {
    dispatch({
      type: EMPTY_CART,
    });
  };
}
