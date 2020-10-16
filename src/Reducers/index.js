import { combineReducers } from "redux";
import data from "./maindata";
import cart from "./cart";
import cartgories from "./categories"
import TotalPrice from "./TotalPricing"
const rootReducer = combineReducers({
  data,
  cart,
  cartgories,
  TotalPrice
});

export default rootReducer;
