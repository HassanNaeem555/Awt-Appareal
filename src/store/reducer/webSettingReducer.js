import { GET_WEB_SETTINGS, TOGGLE_AUTH_MODAL } from "../constants";
const INIT_STATE = {
  web_setting: {},
  auth_modal: false,
};

const WebSettings = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WEB_SETTINGS:
      return {
        ...state,
        web_setting: action.payload,
      };
    case TOGGLE_AUTH_MODAL:
      return {
        ...state,
        auth_modal: !state.auth_modal,
      };
    default:
      return state;
  }
};

export default WebSettings;
