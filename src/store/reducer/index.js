import { combineReducers } from "redux";
import Authenticate from "./authReducer";
import Categories from "./categoryReducer";
import WebSettings from "./webSettingReducer";
import { createForms } from "react-redux-form";
import { SignupUser, LoginUser, Subscribe, Contact } from "../forms";

export default combineReducers({
  user_authenticate: Authenticate,
  user_categories: Categories,
  user_settings: WebSettings,
  ...createForms({
    signup: SignupUser,
    login: LoginUser,
    subscribe: Subscribe,
    contact: Contact,
  }),
});
