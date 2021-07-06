import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import adminReducer from "./adminReducer";

const allReducers = combineReducers({
  adminData: adminReducer,
  UI: uiReducer,
});

export default allReducers;