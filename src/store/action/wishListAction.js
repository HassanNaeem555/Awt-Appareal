import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../constants";

export function addToWishList(wishlist) {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: wishlist,
    });
  };
}
export function removeFromWishlist(id) {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: id,
    });
  };
}
