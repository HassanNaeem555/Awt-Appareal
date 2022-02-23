import { USER_AUTH, USER_SIGNED_OUT } from "../constants";
const INIT_STATE = {
  userLogin: false,
  user: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        userLogin: true,
        user: action.payload,
      };
    case USER_SIGNED_OUT:
      return {
        ...state,
        userLogin: false,
        user: null,
      };
    default:
      return state;
  }
};
