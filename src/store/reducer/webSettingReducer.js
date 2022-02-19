import { GET_WEB_SETTINGS } from "../constants";
const INIT_STATE = {
  web_setting: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WEB_SETTINGS:
      return {
        ...state,
        web_setting: action.payload,
      };
    default:
      return state;
  }
};
