import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: false,
  path: "/login",
  loggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, foo: true };
    case actionTypes.AUTH_SUCCESS:
      return { ...state, path: "/", loggedIn: true };
    case actionTypes.AUTH_FAIL:
      return { ...state, error: true };
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return { ...state };
    case actionTypes.SET_ERR_BOOL:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default reducer;
