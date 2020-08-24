import { combineReducers } from "redux";
import data from "./maindata";
import cart from "./cart";
import cartgories from "./categories"
const rootReducer = combineReducers({
  data,
  cart,
  cartgories
});

export default rootReducer;
