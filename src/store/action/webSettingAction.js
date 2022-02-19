import { GET_WEB_SETTINGS } from "../constants";

export function getWebSettings(web_setting) {
  return async (dispatch) => {
    dispatch({
      type: GET_WEB_SETTINGS,
      payload: web_setting,
    });
  };
}
