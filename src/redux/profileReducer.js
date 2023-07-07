import { SET_USER_PROFILE, SET_EDIT_PROFILE } from "./constant";

export const profileData = (data = [], action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      console.warn("USER_PROFILE condition in profileReducer", action.data);
      return [action.data];

    case SET_EDIT_PROFILE:
      console.warn("SET_EDIT_PROFILE condition in profileReducer", action.data);
      return [action.data];

    default:
      return data;
  }
};
