import { REMOVE_USER, USER_LIST, USER_PROFILE } from "./constant";

export const userList = () => {
  return {
    type: USER_LIST,
  };
};

export const removeUserFromList = (id) => {
  console.warn("action removeUserFromList", id);
  return {
    type: REMOVE_USER,
    id,
  };
};
