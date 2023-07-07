import { USER_PROFILE, EDIT_PROFILE } from "./constant";

export const showProfile = (id) => {
  console.warn("action showProfile", id);
  return {
    type: USER_PROFILE,
    id,
  };
};

export const editProfile = (profileData, id) => {
  console.warn("action showProfile", profileData, id);
  return {
    type: EDIT_PROFILE,
    profileData,
    id,
  };
};
