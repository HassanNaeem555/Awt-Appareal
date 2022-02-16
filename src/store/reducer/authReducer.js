import { USER_AUTH, USER_SIGNED_OUT } from "../constants";
const INIT_STATE = {
  userLogin: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        userLogin: !state.userLogin,
      };
    case USER_SIGNED_OUT:
      return {
        ...state,
        userLogin: false,
      };
    default:
      return state;
  }
};
