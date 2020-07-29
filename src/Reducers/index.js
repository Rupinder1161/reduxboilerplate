import { combineReducers } from "redux";
import data from "./maindata";
import cart from "./cart";

const rootReducer = combineReducers({
  data,
  cart,
});

export default rootReducer;
