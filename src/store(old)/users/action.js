import * as actionTypes from "./actionTypes";

export const addUser = (userId, token) => {
  return {
    type: actionTypes.ADD_USER,
    payload: {
      userId,
      token,
    },
  };
};

export const removeUser = (userId) => {
  return {
    type: actionTypes.REMOVE_USER,
    payload: {
      userId,
    },
  };
};
