import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../constants";
const INIT_STATE = {
  wislist: [],
};

const Wislist = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const clone_wislist = state.wislist.slice(0);
      clone_wislist.push(action.payload);
      return {
        ...state,
        wislist: clone_wislist,
      };
    case REMOVE_FROM_WISHLIST:
      const cloneWislist = state.wislist.slice(0);
      const remainInWishlist = cloneWislist.filter(
        (e) => e?.id !== action.payload
      );
      return {
        ...state,
        wislist: remainInWishlist,
      };
    default:
      return state;
  }
};

export default Wislist;
