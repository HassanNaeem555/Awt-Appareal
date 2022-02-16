import { combineReducers } from "redux";
import Authenticate from "./authReducer";
import Categories from "./categoryReducer";
import { createForms } from "react-redux-form";
import { InitialFeedback, SignupUser } from "../forms";

export default combineReducers({
  user_authenticate: Authenticate,
  user_categories: Categories,
  ...createForms({
    feedback: InitialFeedback,
    signup: SignupUser,
  }),
});
