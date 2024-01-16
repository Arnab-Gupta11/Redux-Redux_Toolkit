import { combineReducers } from "redux";
import changeTheNumber from "./countdown";
const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;
