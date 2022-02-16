import { combineReducers } from "redux";
import Authenticate from "./authReducer";
import { createForms } from "react-redux-form";
import { InitialFeedback, SignupUser } from "../forms";

export default combineReducers({
  user_authenticate: Authenticate,
  ...createForms({
    feedback: InitialFeedback,
    signup: SignupUser,
  }),
});
