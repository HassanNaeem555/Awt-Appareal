import { combineReducers } from "redux";
import Authenticate from "./authReducer";
import Cart from "./cartReducer";
import Wislist from "./wishlistReducer";
import Categories from "./categoryReducer";
import WebSettings from "./webSettingReducer";
import { createForms } from "react-redux-form";
import {
  SignupUser,
  LoginUser,
  Subscribe,
  Contact,
  UserDetailForPay,
  ResetPassword,
  ForgotPassword,
} from "../forms";

export default combineReducers({
  user_authenticate: Authenticate,
  user_cart: Cart,
  user_wishlist: Wislist,
  user_categories: Categories,
  user_settings: WebSettings,
  ...createForms({
    signup: SignupUser,
    login: LoginUser,
    subscribe: Subscribe,
    contact: Contact,
    detailtopay: UserDetailForPay,
    resetpassword: ResetPassword,
    forgotpassword: ForgotPassword,
  }),
});
