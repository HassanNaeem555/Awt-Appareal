import { GET_CATEGORIES } from "../constants";
const INIT_STATE = {
  categories: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
