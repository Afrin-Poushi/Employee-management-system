import { combineReducers } from "redux";
import { userData } from "./userReducer";
import { profileData } from "./profileReducer.js";

export default combineReducers({
  userData, profileData
});
