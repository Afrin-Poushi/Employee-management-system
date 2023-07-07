import { REMOVE_USER, SET_USER_LIST, SET_USER_PROFILE } from "./constant";

export const userData = (data = [], action) => {
  switch (action.type) {
    case SET_USER_LIST:
      console.warn("USER_LIST condition in userReducer", action.data.users);
      return [action.data.users];

    case REMOVE_USER:
      console.warn("REMOVE_USER condition ", action.id);
      let remainingUsers;
      data.map((users) => {
        remainingUsers = users.filter((user) => user.id !== action.id);
      });
      return [remainingUsers];

    default:
      return data;
  }
};
