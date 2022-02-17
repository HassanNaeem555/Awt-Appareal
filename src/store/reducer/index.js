import { combineReducers } from "redux";
import Authenticate from "./authReducer";
import Categories from "./categoryReducer";
import { createForms } from "react-redux-form";
import { SignupUser, LoginUser, Subscribe, Contact } from "../forms";

export default combineReducers({
  user_authenticate: Authenticate,
  user_categories: Categories,
  ...createForms({
    signup: SignupUser,
    login: LoginUser,
    subscribe: Subscribe,
    contact: Contact,
  }),
});
