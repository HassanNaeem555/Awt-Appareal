import { combineReducers } from "redux";
import Authenticate from "./authReducer";
import Cart from "./cartReducer";
import Categories from "./categoryReducer";
import WebSettings from "./webSettingReducer";
import { createForms } from "react-redux-form";
import {
  SignupUser,
  LoginUser,
  Subscribe,
  Contact,
  UserDetailForPay,
} from "../forms";

export default combineReducers({
  user_authenticate: Authenticate,
  user_cart: Cart,
  user_categories: Categories,
  user_settings: WebSettings,
  ...createForms({
    signup: SignupUser,
    login: LoginUser,
    subscribe: Subscribe,
    contact: Contact,
    detailtopay: UserDetailForPay,
  }),
});
