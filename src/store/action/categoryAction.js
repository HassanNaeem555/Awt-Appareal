import { GET_CATEGORIES } from "../constants";

export function getCategories(categories) {
  return async (dispatch) => {
    dispatch({
      type: GET_CATEGORIES,
      payload: categories,
    });
  };
}
