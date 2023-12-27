import * as actionTypes from "./actionTypes";

function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return [
        ...state,
        {
          userId: action.payload.userId,
          token: action.payload.token,
        },
      ];
    case actionTypes.REMOVE_USER:
      return state.filter((user) => user.userId !== action.payload.userId);
    default:
      return state;
  }
}

export default reducer;
