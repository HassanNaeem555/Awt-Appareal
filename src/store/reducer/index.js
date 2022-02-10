import { combineReducers } from "redux";
// import Dishes from "./dishes";
// import Leaders from "./leaders";
// import Comments from "./comments";
// import Promotions from "./promotions";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "../forms";

export default combineReducers({
  //   dishesStorage: Dishes,
  //   leadersStorage: Leaders,
  //   Comments: Comments,
  //   promotionsStorage: Promotions,
  ...createForms({
    feedback: InitialFeedback,
  }),
});
